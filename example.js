'use strict'
const linkDir = require('./lib')
const path = require('path')
const cwd = process.cwd()

linkDir(path.join(cwd, 'src'), path.join(cwd, 'node_modules/src'))
