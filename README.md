# CS-544-Assignments
Programming for the web Assignments

Subject to the above restrictions, show code for a functionrmPrefixSuffix(str: string, m: Size, n: Size) : string which, when given a string str and non-negative integers m and n, returns string str with the first m characters and last n characters removed. 4-points

    > rmPrefixSuffix('Twas brillig and the slithy toves',
                     5, 10)
    'brillig and the sl'
    > rmPrefixSuffix('', 5, 10)
    ''
    rmPrefixSuffix('Twas brillig and the slithy toves',
                    0, 0)
    'Twas brillig and the slithy toves'
Subject to the above restrictions, show code for a functionapplyToEvens(ns: Integer[], f: (n: Integer) => Integer) : Integer[] which returns the list constituting the results of applyingf to the even elements of ns. 5-points

    > applyToEvens([7, 2, 5, 6], n => n + 1)
    [ 3, 7 ]
    > applyToEvens([7, 5, 5], n => n + 1)
    []
    > applyToEvens([], n => n + 1)
    []
Subject to the above restrictions, show code for a functionproductOdds(ns: Integer[]) : Integer which returns the product of all the odd elements of ns. It should return 1 if there are no such elements. 5-points

    > productOdds([2, 5, 7, 4])
    35
    > productOdds([2, 5, 8, 4])
    5
    > productOdds([2, 8, 4])
    1
    > productOdds([])
    1
Subject to the above restrictions, show code for a functionstrIndexesStr(s: string, ...indexes : Index[]) : string which returns the string which is the concatenation of the characters in strings at the specified indexes. 5-points

    > strIndexesStr('hello world', 1, 2, 6)
    'elw'
    > strIndexesStr('hello world')
    ''
A selector is a string containing dot-separated indexes used to index multiple levels into a complex object. Subject to the above restrictions, show code for a functionselect(obj: Object, selector : string) : any which returns the value specified by selector in obj. It should returnundefined if there is no such value.

    > select({a: [1, {b: 22}], c: 33}, 'c')
    33
    > select({a: [1, {b: 22}], c: 33}, 'a.1')
    { b: 22 }
    > select({a: [1, {b: 22}], c: 33}, 'a.1.b')
    22
    > select({a: [1, {b: 22}], c: 33}, 'a')
    [ 1, { b: 22 } ]
    > select({a: [1, {b: 22}], c: 33}, 'a.2')
    undefined
    > select({a: [1, {b: 22}], c: 33}, '')
    undefined
    > select({a: [1, {b: 22}], c: 33}, 'b')
    undefined
    > select({a: [1, {b: 22}], c: 33}, 'a..1')
    undefined
Hints:

Use one of the the optional chaining operators.

An array can be indexed using a string, so for example[22, 33, 44]['1'] returns 33. 6-points

Subject to the above restrictions, show code for a functionlineAt(text: string, offset: Index) : string which, when given a string text and index offset, returns the line at index offset in string text. A line is defined to be a maximal sequence of characters which do not contain a '\n' newline character. 5-points

    > lineAt('012\nabcd', 0)
    '012'
    > lineAt('012\nabcd', 1)
    '012'
    > lineAt('012\nabcd\n', 5)
    'abcd'
    > lineAt('012\nabcd', 5)
    'abcd'
    > lineAt('012\nabcd', 3)
    ''
Subject to the above restrictions, show code for a functionfixedLengthLines(text: string, len: Size) : string which returns text with all lines within text with length set to len. When a line is shorter than len it is padded on the right with the requisite number of spaces; when it's length is greater than len, the requisite number of suffix characters are removed. Note that a line is a maximal sequence of characters not containing a newline character '\n'.

All lines in the return value must always be followed by a '\n' character irrespective of whether that is the case for the corresponding line in text. 5-points

    > fixedLengthLines('12345\n1\n12', 3)
    '123\n1 \n12 \n'
    > fixedLengthLines('', 3)
    '   \n'
Subject to the above restrictions, show code for a functionoddLengthLines(text: string) : string[] which, when given a string text, returns text with all lines which have odd length (not counting the '\n'). Note that a line is a maximal sequence of characters not containing a newline character '\n'.

All lines in the return value must always be followed by a '\n' character irrespective of whether that is the case for the corresponding line in text. 4-points

    > oddLengthLines('01\n012\n0123\n01234\n')
    '012\n01234\n'
    > oddLengthLines('01\n012\n0123\n01234')
    '012\n01234\n'
    > oddLengthLines('')
    ''
    > oddLengthLines('01')
    ''
    > oddLengthLines('0')
    '0\n'
Use split() to get the lines in text, filter() to only select odd-length lines, a map to stick on newline terminators, followed by a final join() to stick everything back together again into a single string.

Fizz buzz is a standard interview question used to screen out programmer candidates who have no business calling themselves programmers.

Subject to the above restrictions, write a functionfizzBuzz(n: Integer) : Integer[] which when called with n a positive integer, generates an array of integers from with the following exceptions:

Any integer divisible by 3 is replaced by the string 'fizz'.

An integer divisible by 5 is replaced by the string 'buzz'.

Any integer divisible by both 3 and 5 is replaced by the string 'fizz buzz'. 5-points

    > fizz_buzz(1)
    [ 1 ]
    > fizz_buzz(20)
    [ 1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizz buzz',
      16,
      17,
      'fizz',
      19,
      'buzz' ]
    >
Subject to the above restrictions, write a functionrange(n: Integer, init: Integer=0, inc: Integer=1): Integer[] which when given a non-negative integer n, and integers init and inc returns an n-element array [ init, init + inc, init + 2*inc, ..., init + (n-1)*inc]. 5-points

    > range(4)
    [ 0, 1, 2, 3 ]
    > range(4, 3)
    [ 3, 4, 5, 6 ]
    > range(4, 3, 3)
    [ 3, 6, 9, 12 ]
    > range(0, 3, 3)
    []
    > 
Subject to the above restrictions, write a functionsumOfPowers(x: number, n: Integer) : Integer which when given a number x and non-negative integer n returns the sum of the first n powers of x; i.e., it should return:

5-points

    sumOfPowers(2, 3)
    7
    > sumOfPowers(2, 8)
    255
    > sumOfPowers(2, 1)
    1
    > sumOfPowers(2, 0)
    0
Write a functioniterExponential(n: Integer, x: Integer) : Integer which returns an approximation to using n terms. Your answer must make use of a loop. It should not use the ** power operator, should not call any functions and should use only operations. Note that the-term approximation for is given by:

 
 
 
 
5-points

    > iterExponential(1, 1)
    1
    > iterExponential(3, 1)
    2.5
    > iterExponential(5, 1)
    2.708333333333333
    > iterExponential(10, 1)
    2.7182815255731922
    >
Subject to the above restrictions as well as not using the ** power operator, write a functionexprExponential(n: Integer, x: Integer) : Integer which returns an approximation to using n terms. Hint: use your solution to the previous question as a guide. 6-points

    > exprExponential(1, 1)
    1
    > exprExponential(3, 1)
    2.5
    > exprExponential(5, 1)
    2.708333333333333
    > exprExponential(10, 1)
    2.7182815255731922
    > exprExponential(10, 2)
    7.3887125220458545
    >

