/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:12, maxcomplexity:4 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, describe, xit, it, returnExports */

(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var hasSymbol = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
  var ifSymbolIt = hasSymbol ? it : xit;
  var $toObject;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    $toObject = require('../../index.js');
  } else {
    $toObject = returnExports;
  }

  describe('Basic tests', function () {
    it('should throw TypeError', function () {
      expect(function () {
        $toObject();
      }).toThrow();

      expect(function () {
        $toObject(undefined);
      }).toThrow();

      expect(function () {
        $toObject(null);
      }).toThrow();
    });

    it('should be correct type in each case', function () {
      expect(typeof $toObject(1)).toBe('object');
      expect(typeof $toObject(true)).toBe('object');
      expect(typeof $toObject('')).toBe('object');
      expect(typeof $toObject([])).toBe('object');
      expect(typeof $toObject({})).toBe('object');
      expect(typeof $toObject(Object('a'))).toBe('object');
      expect(typeof $toObject(function () {})).toBe('function');
      expect(typeof $toObject(new Date())).toBe('object');
    });

    it('should have correct values', function () {
      var str = $toObject('foo');
      expect(typeof str).toBe('object');
      expect(str.length).toBe(3);
      expect(Object.prototype.toString.call(str)).toBe('[object String]');
      expect(str.toString()).toBe('foo');
      expect(str.charAt(0)).toBe('f');
      expect(str.charAt(1)).toBe('o');
      expect(str.charAt(2)).toBe('o');
    });

    it('should be same object', function () {
      var testObject = [];
      expect($toObject(testObject)).toBe(testObject);
      testObject = {};
      expect($toObject(testObject)).toBe(testObject);
      testObject = function () {};
      expect($toObject(testObject)).toBe(testObject);
      testObject = Object('test');
      expect($toObject(testObject)).toBe(testObject);
      testObject = Object(true);
      expect($toObject(testObject)).toBe(testObject);
      testObject = Object(10);
      expect($toObject(testObject)).toBe(testObject);
    });

    ifSymbolIt('should return Symbol', function () {
      var sym = Symbol('foo');
      expect($toObject(sym)).toEqual(Object(sym));
    });
  });
}());
