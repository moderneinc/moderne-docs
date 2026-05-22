---
description: Logging OpenRewrite recipes.
---

# Logging

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Find Kotlin logging smells](./logging$ktrecipe.md)
* [Find `LoggerFactory.getLogger` migration candidates](./findloggerfactorymigrationcandidates$ktrecipe.md)
* [Find eager log-message construction](./findeagerlogmessages$ktrecipe.md)
* [Find legacy logger-library usage](./findlegacyloggerlibraries$ktrecipe.md)
* [Find logger declaration smells](./findloggerdeclarationsmells$ktrecipe.md)
* [Find `println` / `System.err.println` / `printStackTrace`](./findprintandprintstacktrace$ktrecipe.md)
* [Find redundant logger level-check guards](./findloggerguards$ktrecipe.md)

## Recipes

* [Find `LoggerFactory.getLogger(&quot;some-name&quot;)` calls](./findloggerfactorygetloggerwithstringname$ktrecipe.md)
* [Find `LoggerFactory.getLogger(SomeClass::class.java)` calls](./findloggerfactorygetlogger$ktrecipe.md)
* [Find `LoggerFactory.getLogger(this::class.java)` calls](./findloggerfactorygetloggerwiththisclass$ktrecipe.md)
* [Find `System.err.println(...)` calls](./findprinterr$ktrecipe.md)
* [Find `Throwable.printStackTrace()` calls](./findprintstacktrace$ktrecipe.md)
* [Find companion-object loggers missing `private`](./findcompanionloggerwithoutprivate$ktrecipe.md)
* [Find `e.printStackTrace(out)` calls](./findthrowableprintstacktracewithstream$ktrecipe.md)
* [Find eager string interpolation in `log.debug(...)`](./findeagerstringinterpolationinlogdebug$ktrecipe.md)
* [Find eager string interpolation in `log.error(...)`](./findeagerstringinterpolationinlogerror$ktrecipe.md)
* [Find eager string interpolation in `log.info(...)`](./findeagerstringinterpolationinloginfo$ktrecipe.md)
* [Find eager string interpolation in `log.trace(...)`](./findeagerstringinterpolationinlogtrace$ktrecipe.md)
* [Find eager string interpolation in `log.warn(...)`](./findeagerstringinterpolationinlogwarn$ktrecipe.md)
* [Find `if (log.isDebugEnabled) ...` guards](./findisdebugenabledguard$ktrecipe.md)
* [Find `if (log.isErrorEnabled) ...` guards](./findiserrorenabledguard$ktrecipe.md)
* [Find `if (log.isInfoEnabled) ...` guards](./findisinfoenabledguard$ktrecipe.md)
* [Find `if (log.isTraceEnabled) ...` guards](./findistraceenabledguard$ktrecipe.md)
* [Find `if (log.isWarnEnabled) ...` guards](./findiswarnenabledguard$ktrecipe.md)
* [Find `java.util.logging.Logger.getLogger(...)` calls](./findjulloggergetlogger$ktrecipe.md)
* [Find `julLogger.log(level, msg)` and level-specific `julLogger.fine/info/severe/...` calls](./findjulloggerlog$ktrecipe.md)
* [Find loggers declared as instance fields (one per object)](./findloggernotincompanion$ktrecipe.md)
* [Find `org.apache.log4j.Logger` references](./findlog4j1logger$ktrecipe.md)
* [Find `println(...)` calls](./findprintln$ktrecipe.md)
* [Find string concatenation in `log.debug(...)`](./findstringconcatinlogdebug$ktrecipe.md)
* [Find string concatenation in `log.error(...)`](./findstringconcatinlogerror$ktrecipe.md)
* [Find string concatenation in `log.info(...)`](./findstringconcatinloginfo$ktrecipe.md)
* [Find string concatenation in `log.trace(...)`](./findstringconcatinlogtrace$ktrecipe.md)
* [Find string concatenation in `log.warn(...)`](./findstringconcatinlogwarn$ktrecipe.md)
* [Find top-level/companion logger fields named `log`](./findloggerfieldnamedlog$ktrecipe.md)


