'use strict';

//  not supported by node.js
//  import * as mod1 from "./modules/my-module";
//  console.log(mod1.sum(2, mod1.PI));
//
//  import {sum, PI} from  "./modules/my-module";
//  console.log(sum(2, PI));

const myMod = require('../modules/my-module.js');
//  console.log(myMod.sum(myMod.PI, 2));
myMod.func1();
myMod.func2();
