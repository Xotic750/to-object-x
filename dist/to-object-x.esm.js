import requireObjectCoercible from 'require-object-coercible-x';
var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

var toObject = function toObject(value) {
  return castObject(requireObjectCoercible(value));
};

export default toObject;

//# sourceMappingURL=to-object-x.esm.js.map