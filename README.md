# JavaScript Bug: Unexpected Function Behavior with Missing Arguments

This repository demonstrates a common JavaScript bug involving functions and missing arguments. The function `foo` expects two arguments but is called with only one in the example. In JavaScript, this will not throw an error but instead assign `undefined` to the missing argument and may lead to unexpected behavior. The solution shows how to handle this gracefully.

## Bug
The `bug.js` file contains the problematic code.  When `foo(1)` is executed, `b` is `undefined`, leading to unexpected results.