---
description: Antipattern OpenRewrite recipes.
---

# Antipattern

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Find and fix SQL performance anti-patterns](./sqlantipatterns.md)

## Recipes

* [Find `COUNT` subqueries used as existence checks](./findcountasexistencecheck.md)
* [Find `DISTINCT` masking join fan-out](./finddistinctwithjoin.md)
* [Find `HAVING` conditions that use no aggregate](./findhavingwithoutaggregate.md)
* [Find `INSERT ... VALUES` statements that omit the column list](./findinsertwithoutcolumns.md)
* [Find `LIKE` patterns starting with a wildcard](./findleadingwildcardlike.md)
* [Find `NOT IN` with a subquery](./findnotinsubquery.md)
* [Find `OFFSET`-based pagination](./findoffsetpagination.md)
* [Find `ORDER BY` on a random function](./findorderbyrandom.md)
* [Find `SELECT *` queries](./findselectstar.md)
* [Find `UNION` where `UNION ALL` may suffice](./findunioninsteadofunionall.md)
* [Find `UPDATE` and `DELETE` statements without a `WHERE` clause](./finddmlwithoutwhere.md)
* [Find cartesian joins](./findcartesianjoin.md)
* [Find constant predicates that are always true or always false](./findconstantpredicate.md)
* [Find correlated aggregate subqueries in `WHERE`](./findcorrelatedaggregatesubquery.md)
* [Find non-sargable predicates](./findnonsargablepredicate.md)
* [Find optional filters written as `OR` parameter `IS NULL`](./findoptionalparameteror.md)
* [Find oversized `IN` lists](./findoversizedinlist.md)
* [Find row limiters without an `ORDER BY`](./findlimitwithoutorderby.md)
* [Find scalar subqueries in the `SELECT` list](./findscalarsubqueryinselect.md)
* [Remove redundant `ORDER BY` from subqueries](./removeorderbyinsubquery.md)
* [Replace `= NULL` and `&lt;&gt; NULL` with `IS NULL` and `IS NOT NULL`](./replacenullcomparisonwithisnull.md)


