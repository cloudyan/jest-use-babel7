# babel-7

测试 jest babel-7

https://github.com/facebook/jest/tree/master/examples/babel-7

报错

```js
babel-7 git:(master) ✗ npm test

> example-babel-7@0.0.0 test /Users/dwd/github/jskit/work/webtest/babel-7
> jest

 FAIL  __tests__/index.test.js
  ● Test suite failed to run

    /Users/dwd/github/jskit/work/webtest/babel-7/__tests__/index.test.js:5
    import double from '../index';
           ^^^^^^

    SyntaxError: Unexpected identifier

      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:403:17)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.144s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```

