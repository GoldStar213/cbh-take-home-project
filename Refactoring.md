# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
I made a few changes to the code here to make it more readable while preserving functionality:

- Added a new getPartitionKey function to handle any false-y values passed to deterministicPartitionKey up top.
- Defined the TRIVIAL_PARTITION_KEY and MAX_PARTITION_KEY_LENGTH variables directly in the function where they're used, which makes more sense and is more readable.
- Replaced the temporary `candidate` variable with a more descriptive function and variable, `getPartitionKey(event)`, which takes an event and produces a partition key as its output.
- Condensed the checks for candidate in the first half of the function down to a couple of concise `if` statements.
- Simplified the final `if` statement a bit by extracting a new `getHash(candidate)` function to handle the cases where we need to hash the candidate to make it small enough.