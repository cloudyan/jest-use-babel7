# babel-7

测试 jest using babel-7

https://github.com/facebook/jest/tree/master/examples/babel-7

报错如下：

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

使用以下配置安装，就报上面的错误

(仔细核对后，确实是大意了，这里使用的是 babel@6x 😭，这里更新为）

```json
  // babel-7-err/package.json
  "devDependencies": {
    "@babel/core": "^7.2.0",
    "@babel/preset-env": "^7.2.0",
    "babel-core": "^6.26.3",
    "babel-jest": "^23.6.0",
    "jest": "^23.6.0"
  },

  // babel-7-err-1/package.json
  "devDependencies": {
    "@babel/core": "^7.2.0",
    "@babel/preset-env": "^7.2.0",
    "babel-jest": "^23.6.0",
    "jest": "^23.6.0"
  },
```

应该改为，这样就不会报错了(**最关键的代码** `"babel-core": "7.0.0-bridge.0",`)

```json
  "devDependencies": {
    "@babel/core": "*",
    "@babel/preset-env": "*",
    "babel-core": "7.0.0-bridge.0",
    "babel-jest": "*",
    "jest": "*"
  },
```

版本真要认真看，浪费了好多时间。

为什么浪费了这么多时间，和 [jest 缓存](https://jestjs.io/docs/zh-Hans/troubleshooting#%E7%BC%93%E5%AD%98%E9%97%AE%E9%A2%98)也有关系，以至于更新配置，运行就有时 OK，有时就报错，，没及时生效就对配置感觉到迷茫，时好时坏混乱了，找不到原因

```json
// package.json
  "scripts": {
    "test": "jest --no-cache"
  }
```
