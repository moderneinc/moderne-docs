---
description: Learn how to compute and use method summaries for efficient inter-procedural analysis
---

# Method Summary Analysis

Method summaries are compact representations of what a method does, enabling efficient inter-procedural analysis without repeatedly analyzing method bodies. Think of them as "nutrition labels" for methods – they tell you what goes in, what comes out, and what effects occur, without needing to examine all the ingredients.

## Understanding method summaries

A method summary captures the essential behavior of a method relevant to your analysis. For taint analysis, this might include.

```java
// Original method
public String processUser(String name, int id, boolean validate) {
    if (validate) {
        name = sanitize(name);
    }
    logAccess(id);
    return "User: " + name;
}

// Summary:
// - Parameter 0 (name) -> flows to return (conditionally sanitized)
// - Parameter 1 (id) -> flows to log (potential information leak)
// - Parameter 2 (validate) -> affects whether sanitization occurs
// - Side effect: writes to log
```

## Designing summary representations

The structure of your summaries depends on your analysis needs:

### Basic flow summary

For simple taint tracking.

```java
public class BasicFlowSummary {
    // Which parameters flow to the return value
    private final Set<Integer> paramsToReturn;
    
    // Which parameters flow to which fields
    private final Map<Integer, Set<FieldRef>> paramsToFields;
    
    // Whether the return value is always sanitized
    private final boolean returnSanitized;
    
    public boolean parameterFlowsToReturn(int paramIndex) {
        return paramsToReturn.contains(paramIndex);
    }
}
```

### Conditional flow summary

For more precision with path-sensitive information.

```java
public class ConditionalFlowSummary {
    // Flows that always happen
    private final FlowSet unconditionalFlows;
    
    // Flows that depend on conditions
    private final Map<Condition, FlowSet> conditionalFlows;
    
    public static class Condition {
        enum Type { PARAM_NULL, PARAM_EQUALS, FIELD_CHECK }
        private final Type type;
        private final int paramIndex;
        private final Object value;
    }
    
    public FlowSet getFlows(CallContext context) {
        FlowSet flows = new FlowSet(unconditionalFlows);
        
        // Add flows whose conditions are met
        for (Map.Entry<Condition, FlowSet> entry : conditionalFlows.entrySet()) {
            if (evaluateCondition(entry.getKey(), context)) {
                flows.merge(entry.getValue());
            }
        }
        
        return flows;
    }
}
```

### Access path summary

For field-sensitive analysis.

```java
public class AccessPathSummary {
    // Tracks precise paths like param0.field1.field2
    private final Set<AccessPath> accessPaths;
    
    public static class AccessPath {
        private final Source source;
        private final List<String> fields;
        private final Destination destination;
        
        enum Source { PARAM_0, PARAM_1, THIS, STATIC_FIELD }
        enum Destination { RETURN, FIELD, SINK }
    }
    
    // Example: parameter 0's 'name' field flows to return
    // new AccessPath(PARAM_0, ["name"], RETURN)
}
```

## Computing summaries

### Bottom-up analysis

The standard approach computes summaries starting from leaf methods.

```java
public class SummaryComputer {
    private final Map<MethodId, MethodSummary> computed = new HashMap<>();
    
    public void computeAllSummaries(CallGraph callGraph) {
        // Process in reverse topological order
        List<MethodId> order = callGraph.reverseTopologicalSort();
        
        for (MethodId method : order) {
            if (!computed.containsKey(method)) {
                computeSummary(method, callGraph);
            }
        }
    }
    
    private MethodSummary computeSummary(MethodId method, CallGraph callGraph) {
        // Get methods this one calls
        Set<MethodId> callees = callGraph.getCallees(method);
        
        // Ensure callees are computed first
        Map<MethodId, MethodSummary> calleeSummaries = new HashMap<>();
        for (MethodId callee : callees) {
            calleeSummaries.put(callee, 
                computed.computeIfAbsent(callee, 
                    m -> computeSummary(m, callGraph)));
        }
        
        // Now compute this method's summary using callee summaries
        return computeWithDependencies(method, calleeSummaries);
    }
}
```

### Incremental summary computation

For large codebases, compute summaries incrementally.

```java
public class IncrementalSummaryComputer {
    private final DependencyTracker deps = new DependencyTracker();
    
    public void methodChanged(MethodId changed) {
        // Invalidate the changed method's summary
        invalidateSummary(changed);
        
        // Invalidate methods that depend on it
        Set<MethodId> affected = deps.getDependents(changed);
        for (MethodId method : affected) {
            invalidateSummary(method);
        }
        
        // Recompute in dependency order
        recomputeInvalidated();
    }
    
    private void trackDependency(MethodId caller, MethodId callee) {
        deps.addDependency(caller, callee);
    }
}
```

## Advanced summary features

### Heap abstractions

Track modifications to heap objects.

```java
public class HeapSummary {
    // Which fields of which parameters are modified
    private final Map<ParamRef, Set<FieldRef>> fieldWrites;
    
    // Abstract objects created and returned
    private final Set<AbstractObject> allocations;
    
    public boolean modifiesField(int param, String field) {
        ParamRef ref = new ParamRef(param);
        Set<FieldRef> writes = fieldWrites.get(ref);
        return writes != null && writes.contains(new FieldRef(field));
    }
}
```

### Effect summaries

Capture side effects beyond data flow.

```java
public class EffectSummary {
    // I/O effects
    private final Set<IOEffect> ioEffects;
    
    // Synchronization effects
    private final Set<LockEffect> lockEffects;
    
    // Exception effects
    private final Set<ExceptionEffect> exceptions;
    
    public static class IOEffect {
        enum Type { FILE_READ, FILE_WRITE, NETWORK, DATABASE }
        private final Type type;
        private final AccessPath target;
    }
}
```

### Compositional summaries

Build complex summaries from simpler ones.

```java
public class CompositionalSummary {
    // Compose summaries for common patterns
    
    public static MethodSummary composeSequence(
            MethodSummary first, MethodSummary second) {
        // If method A calls B, compose their effects
        return new MethodSummary() {
            @Override
            public FlowSet getFlows() {
                FlowSet flows = first.getFlows();
                // Apply second's transformation to first's outputs
                return second.transformFlows(flows);
            }
        };
    }
    
    public static MethodSummary composeConditional(
            Condition cond, MethodSummary trueSummary, MethodSummary falseSummary) {
        // Conditional composition
        return new ConditionalMethodSummary(cond, trueSummary, falseSummary);
    }
}
```

## Using summaries effectively

### Summary application

Apply summaries at call sites.

```java
public class SummaryApplication {
    public Set<TaintedValue> applyMethodSummary(
            J.MethodInvocation call,
            MethodSummary summary,
            AnalysisState state) {
        
        // Map arguments to parameters
        List<Expression> args = call.getArguments();
        Map<Integer, Set<TaintedValue>> argTaints = new HashMap<>();
        
        for (int i = 0; i < args.size(); i++) {
            argTaints.put(i, state.getTaintsFor(args.get(i)));
        }
        
        // Apply summary transformations
        Set<TaintedValue> result = new HashSet<>();
        
        // Check parameter-to-return flows
        for (int param : summary.getParamsFlowingToReturn()) {
            if (!argTaints.getOrDefault(param, Set.of()).isEmpty()) {
                result.add(new TaintedValue(call, 
                    summary.getReturnTaintType(param)));
            }
        }
        
        // Apply side effects
        applySideEffects(summary, state, argTaints);
        
        return result;
    }
}
```

### Summary precision policies

Different analyses need different precision levels.
```java
public interface SummaryPrecisionPolicy {
    // Decide how precise summaries should be
    
    boolean useContextSensitivity(MethodId method);
    boolean usePathSensitivity(MethodId method);
    boolean trackHeapEffects(MethodId method);
    int getMaxSummarySize(MethodId method);
}

public class SecurityFocusedPolicy implements SummaryPrecisionPolicy {
    @Override
    public boolean usePathSensitivity(MethodId method) {
        // High precision for security-critical methods
        return method.hasSecurityAnnotation() ||
               method.isInSecurityPackage();
    }
}
```

## Practical example: taint summary

Here's a complete example of computing and using taint summaries.

```java
public class TaintSummaryExample {
    
    public static class TaintSummary {
        private final BitSet paramsToReturn;
        private final Map<Integer, BitSet> paramsToParams;
        private final boolean sanitizesReturn;
        private final Set<Integer> paramsSentToSink;
        
        public static TaintSummary compute(J.MethodDeclaration method) {
            ControlFlowGraph cfg = ControlFlowGraphs.build(method);
            
            BitSet paramsToReturn = new BitSet();
            Map<Integer, BitSet> paramsToParams = new HashMap<>();
            boolean sanitizesReturn = false;
            Set<Integer> paramsSentToSink = new HashSet<>();
            
            // Analyze each parameter
            for (int i = 0; i < method.getParameters().size(); i++) {
                ParameterTaintAnalysis analysis = 
                    new ParameterTaintAnalysis(cfg, i);
                ParameterTaintResult result = analysis.analyze();
                
                if (result.flowsToReturn()) {
                    paramsToReturn.set(i);
                }
                
                if (result.isSanitized()) {
                    sanitizesReturn = true;
                }
                
                paramsSentToSink.addAll(result.getSinkParams());
            }
            
            return new TaintSummary(
                paramsToReturn, paramsToParams, 
                sanitizesReturn, paramsSentToSink);
        }
    }
    
    // Using the summary
    public void analyzeCall(J.MethodInvocation call, TaintSummary summary) {
        List<Expression> args = call.getArguments();
        
        // Check each argument
        for (int i = 0; i < args.size(); i++) {
            if (isTainted(args.get(i))) {
                // Does this tainted arg flow to return?
                if (summary.paramsToReturn.get(i)) {
                    if (!summary.sanitizesReturn) {
                        markTainted(call);
                    }
                }
                
                // Does it flow to a sink?
                if (summary.paramsSentToSink.contains(i)) {
                    reportVulnerability(call, "Tainted data flows to sink");
                }
            }
        }
    }
}
```

## Performance considerations

### Summary size management

Keep summaries compact.

```java
public class CompactSummary {
    // Use bit vectors for parameter sets
    private final BitSet parameterMask;
    
    // Compress common patterns
    private static final int PATTERN_ALL_TO_RETURN = 1;
    private static final int PATTERN_NONE_TO_RETURN = 2;
    private static final int PATTERN_IDENTITY = 3;
    
    private final int pattern;
    
    // Only store exceptions to patterns
    private final Map<Integer, Integer> exceptions;
}
```

### Caching strategies

Effective caching is crucial.

```java
public class SummaryCache {
    // Two-level cache: memory and disk
    private final Map<MethodId, MethodSummary> memoryCache;
    private final DiskCache diskCache;
    
    // Version tracking for invalidation
    private final Map<MethodId, Long> versions;
    
    public MethodSummary get(MethodId method) {
        // Check memory cache
        MethodSummary summary = memoryCache.get(method);
        if (summary != null) {
            return summary;
        }
        
        // Check disk cache
        summary = diskCache.load(method);
        if (summary != null && isValid(method, summary)) {
            memoryCache.put(method, summary);
            return summary;
        }
        
        // Compute and cache
        summary = computeSummary(method);
        cache(method, summary);
        return summary;
    }
}
```

## Best practices

### Design for your analysis
Don't over-engineer summaries. Include only information relevant to your specific analysis.

### Balance precision and size
More precise summaries are larger and slower to compute. Find the right trade-off for your use case.

### Validate summaries
Test that summaries accurately represent method behavior.
```java
@Test
void validateSummary() {
    MethodSummary summary = computeSummary(method);
    
    // Run full analysis
    FullAnalysisResult full = runFullAnalysis(method);
    
    // Compare results
    assertEquals(full.getAbstraction(), summary.getAbstraction());
}
```

### Document summary format
Clearly document what your summaries represent and how to interpret them.

## Next steps

* [Inter-procedural Analysis](inter-procedural-analysis.md) - Using summaries in whole-program analysis