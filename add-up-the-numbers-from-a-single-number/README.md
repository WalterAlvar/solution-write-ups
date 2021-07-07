# [Add up the number](https://edabit.com/challenge/4gzDuDkompAqujpRi)
This function is based in the "Triangular Number" mathematical theory.the objective is create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->

## Syntax

> addUp(`number`) -> `number`

### Parameters

**num**: `number`  
**sum**: `number`  

_**num**_: Will be any given number pass through the function.  

<!--
  describe the parameter
-->

### Return Value: `number`
**sum**: its the result of adding up numbers
<!--
  describe the return value
-->

## Test Cases
`` Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)
Test.assertEquals(addUp(392), 77028)
Test.assertEquals(addUp(53), 1431)
Test.assertEquals(addUp(897), 402753)
Test.assertEquals(addUp(23), 276)
Test.assertEquals(addUp(1000), 500500)``
<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->

## Use Cases

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

---

---

<!-- copy this section for every solution you study -->

## [Gabriel](https://edabit.com/user/akYGmQ9iZcZm2d8BP)

<!-- paste the solution here -->

```js
function addUpGabriel(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

### Gabriel's Strategy:

Through iterations the user will increment from 1 to the given number each time for accumulating value
<!--
  Describe what strategy they used to pass this challenge.
  Careful! your strategy description should not mention
    the code they wrote to solve the challenge.

  Practice describing their strategy at a higher level:
  a simple way to understand strategy is to think of the important steps
  between the argument values and the return values.

  For example if they use a `for` loop
  you won't mention that `i` was incremented,
  but you might mention how the final result changes at each iteration.
-->

### Implementation

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->
Gabriel uses a ` for ` loop to keep incrementing with ` i++ ` the value of the variable ` sum ` as long as it is minor or equal to  the variable ` num ` or: ` <= num `. As @Evan told us during the class, in a ` for ` loop, this is the way that you expect incrementing value ` i++ `
### Possible Refactors

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->

### References
[A fun one](https://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/)  
[A wiki one](https://en.wikipedia.org/wiki/Triangular_number)
<!--
  links that helped you to understand this solution or to think of possible refactors
-->

---

> ... maybe even more write-ups?

---
## [ User: _sir](https://edabit.com/user/F7iZc3vpy7d9ALD6D)

```js
function addUpSir(num) {
  return (num * (num + 1)) / 2;
}
```

### _sir's Strategy:  

This user uses a mathematical approaching. Actually the same formula:  
![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2)

### _sir's Implementation:  
This user goes for the math way. So first ` num ` will be sum + 1 and then multiplied by ` num `

### Remix

<!-- paste your remixed solution here -->

```js
```

### Strategy

### Implementation

### Possible Refactors

### Inspired By

<!--
  which solutions inspired your solution?
  what did you take from each one?
-->

### References

---

## Retrospective

To study this challenge was good for me because I found it a difficult one, specially because I am not that good understanding how ` loops ` works. Using the trace tables in Study Lenses also helps a lot for making a little map in how the behavior of the function. 

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->
