# Moderne.io GraphQL API

## Query

| Field            | Argument  | Type              | Description                                                  |
| ---------------- | --------- | ----------------- | ------------------------------------------------------------ |
| activeRecipeRuns |           | [[RecipeRun]()!]! | Get all currently active recipe runs by a user id (passed via header) sorted by most recent |
|                  | limit     | Int               |                                                              |
|                  | sortOrder | SortOrder         |                                                              |


