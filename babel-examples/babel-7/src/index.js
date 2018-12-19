// 升级到 babel7

import es6 from './es6';

this;


import 'a';

var {
  // ...y, // 这里不能写尾逗号
  ...y
} = { a: 1 };

z = { x, ...y };

class Bork {
  static a = "foo";
  y;
}

export v from "mod";

tag`\unicode and \u{55}`;

`foo${bar}`;
