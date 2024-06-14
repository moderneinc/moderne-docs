# Frequently asked questions (FAQ)

## Why do artifact scanners detect vulnerabilities in recipe artifacts/JARs?

In order to match old or vulnerable code, OpenRewrite may include a copy of libraries that contain vulnerabilities. That being said, these libraries are **never executed**.

OpenRewrite exercises the Java compiler internally to compile code patterns that exist in these old and/or vulnerable libraries. These patterns are then used to **match** old or vulnerable code for the sake of modernizing or repairing it.

Using a library in compilation in this way **does not trigger class initialization** in the way that reflection might, for example. In other words, code paths in libraries used in compilation are **never executed**.

As an example of this, consider the case of [rewrite-spring](https://github.com/openrewrite/rewrite-spring). It has libraries bundled inside of the [META-INF/rewrite/classpath directory](https://github.com/openrewrite/rewrite-spring/tree/main/src/main/resources/META-INF/rewrite). However, those JARs are not made into a FatJar or a shaded library in the traditional sense. It is not possible that by using `rewrite-spring` that one of those libraries gets called.
