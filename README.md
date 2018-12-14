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

因为使用了以下配置安装，于是报了上面的错误(仔细核对后，真是大意了，这里使用的是 babel-core@6x 😭）

```json
  // babel-7-err/package.json
  "devDependencies": {
    "@babel/core": "^7.2.0",
    "@babel/preset-env": "^7.2.0",
    "babel-core": "^6.26.3",
    "babel-jest": "^23.6.0",
    "jest": "^23.6.0"
  },

  // 移除 "babel-core": "^6.26.3", 仅使用 @babel/core@7.x 也不行的
  "devDependencies": {
    "@babel/core": "^7.2.0",
    "@babel/preset-env": "^7.2.0",
    "babel-jest": "^23.6.0",
    "jest": "^23.6.0"
  },
```

改为下面这样，就不会报错了(**关键代码** `"babel-core": "7.0.0-bridge.0",`)

> 官方回复：
> Please kindly read the docs about running Jest with Babel 7: https://jestjs.io/docs/en/getting-started#using-babel

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

官方版本是好的，为什么还浪费了这么多时间？

因为 [jest 缓存](https://jestjs.io/docs/en/troubleshooting#caching-issues)的关系，以至于更新修改配置没及时生效，导致测试时好时坏混乱了，也对官方版本感到怀疑了，所以浪费了很多时间

```json
// package.json
  "scripts": {
    "test": "jest --no-cache"
  }
```

- The transform script was changed or babel was updated and the changes aren't being recognized by Jest?

尝试使用 `--no-cache` 选项。 Jest 会缓存转换的模块文件来加速测试的执行。
