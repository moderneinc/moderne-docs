# How to find personally identifiable information (PII) and secrets exposed by your APIs

As companies grow in size, more and more APIs tend to be added. As these APIs are added, it becomes exponentially more difficult to track how sensitive information flows throughout the code base. Despite best intentions, it can be quite easy for PII or secrets to be accidentally exposed by an API.

Doing a text-based search for sensitive field names such as `ssn` or `dateOfBirth` _might_ help you find where that data is – but you might also get a ton of irrelevant results, and you'd _definitely_ miss out on cases where classes create or call out to other classes that have sensitive data.

Fortunately, Moderne offers a [recipe](https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindSensitiveApiEndpoints) that uses rich type information to detect how sensitive data flows throughout your code base. This recipe can detect all sorts of things that a text-based search would fail at. For instance, it can detect if an API returns a class that extends another class that has a method that returns sensitive data – or it can detect when an API returns a class that has a method that returns a different class that has a method that returns sensitive data. It can even recursively step through classes to find sensitive data flow through multiple levels of dependencies.

Let's walk through how to find and use this recipe so you can be more confident that your APIs are not unintentionally exposing sensitive data.

## Using the find sensitive API endpoints recipe

* Navigate to [the find sensitive API endpoints recipe](https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindSensitiveApiEndpoints).

* Once there, you'll want to come up with a list of field names that represent PII or secrets for your company. For the purposes of this guide, let's go with [these options](https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindSensitiveApiEndpoints?defaults=W3sibmFtZSI6ImZpZWxkTmFtZXMiLCJ2YWx1ZSI6WyJiaXJ0aGRhdGUiLCJzc24iLCJkb2IiLCJkYXRlT2ZCaXJ0aCIsInN0cmVldEFkZHJlc3MiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdfSx7Im5hbWUiOiJ0cmFuc2l0aXZlIiwidmFsdWUiOiJUcnVlIn1d):

![Sensitive recipe options](/.gitbook/assets/find-sensitive-recipe.png)

* After you've come up with the list of field names to search for, you can select whether or not you want the recipe to perform a transitive search. Setting this field to `true` (**recommended**) will recursively check through objects for sensitive data. For instance, if this field is `true` and an `Owner` object has a `getPet` method that returns a `Pet` object that contains PII or secrets, then the recipe would flag any methods that return an `Owner` because it could then return a `Pet`. If this field is set to false, then the recipe would only check the `Owner` class and any objects the `Owner` class extends (such as a `Person` class).

* Once you've configured the recipe as you want, press the `Dry run` button and Moderne will begin searching for sensitive APIs. You'll be redirected to a page that looks like this:

![Recipe results](/.gitbook/assets/find-sensitive-results.png)

* You can click on any of the repositories to see what APIs return sensitive information:

![Example sensitive data](/.gitbook/assets/sensitive-pet-results.png)

* Clicking on the text that is underlined will provide you with context about what sensitive data is exposed:

![Example context](/.gitbook/assets/sensitive-pet-example.png)

* If you enabled a transitive search, you may find results that step through multiple classes such as in the `Owner` -> `Pet` example we discussed above:

![Transitive example](/.gitbook/assets/owner-transitive-example.png)

