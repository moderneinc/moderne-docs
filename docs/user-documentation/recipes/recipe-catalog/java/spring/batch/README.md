---
description: Spring Batch OpenRewrite recipes.
---

# Spring Batch

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Flag deprecated `ChunkListener` callbacks for manual migration to `ChunkListener&lt;I, O&gt;`](./flagchunklistenerformanualmigration.md)
* [Migrate to Spring Batch 5.0 from 4.3](./springbatch4to5migration.md)
* [Migrate to Spring Batch 6.0 from 5.2](./springbatch5to6migration.md)
* [Transform classes that extend `*ListenerSupport` to implement the `*Listener` interfaces instead](./listenersupportclasstointerface.md)

## Recipes

* [Add `@EnableJdbcJobRepository` alongside `@EnableBatchProcessing`](./addenablejdbcjobrepository.md)
* [Add `PlatformTransactionManager` to `tasklet()` and `chunk()` calls](./addtransactionmanagertotaskletandchunk.md)
* [Add class argument to `JobParameters`](./migratejobparameter.md)
* [Add `setJobRegistry(..)` to manually configured `TaskExecutorJobOperator`](./addjobregistrytotaskexecutorjoboperator.md)
* [Change the type of `skipCount` parameter in `SkipPolicy` from `int` to `long`](./upgradeskippolicyparametertype.md)
* [Convert receive type in some invocation of StepExecution.xx()](./convertreceivetypewhencallstepexecutionmethod.md)
* [Migrate `Date` to `LocalDateTime` for Spring Batch timestamp methods](./migratestepexecutiontimestamptypes.md)
* [Migrate `ItemWriter`](./migrateitemwriterwrite.md)
* [Migrate `JobBuilderFactory` to `JobBuilder`](./migratejobbuilderfactory.md)
* [Migrate `StepBuilderFactory` to `StepBuilder`](./migratestepbuilderfactory.md)
* [Migrate method when it annotated by Spring Batch API](./migratemethodannotatedbybatchapi.md)
* [Migration invocation of JobParameter.toString to JobParameter.getValue.toString](./jobparametertostring.md)
* [Remove `DefaultBatchConfigurer`](./removedefaultbatchconfigurer.md)
* [Transform classes that extend a given Class to implement the given Interface instead](./replacesupportclasswithitsinterface.md)
* [Use constructor injection for `StoredProcedureItemReader`](./migratestoredprocedureitemreaderconstructor.md)


