<a href="https://travis-ci.org/Xotic750/to-object-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/to-object-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/to-object-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-object-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/to-object-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-object-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/to-object-x" title="npm version">
<img src="https://badge.fury.io/js/to-object-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_to-object-x"></a>

## to-object-x

ES6-compliant shim for ToObject.

**See**: [7.1.13 ToObject ( argument )](http://www.ecma-international.org/ecma-262/6.0/#sec-toobject)

<a name="exp_module_to-object-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>Object</code> ⏏

The abstract operation ToObject converts argument to a value of
type Object.

**Kind**: Exported function  
**Returns**: <code>Object</code> - The `value` converted to an object.  
**Throws**:

- <code>TypeError</code> If `value` is a `null` or `undefined`.

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| value | <code>\*</code> | The `value` to convert. |

**Example**

```js
import toObject from 'to-object-x';

toObject(); // TypeError
toObject(null); // TypeError
console.log(toObject('abc')); // Object('abc')
console.log(toObject(true)); // Object(true)
console.log(toObject(Symbol('foo'))); // Object(Symbol('foo'))
```
