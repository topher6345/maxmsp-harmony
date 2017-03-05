var assert = require('assert');

const harmony = require('../src/harmony');

describe('Harmony', function() {
  describe('#note_in_key()', function() {
    it('should return C', function() {
      let actual = harmony.note_in_key(0,0)
      let expected = "C"
      assert.equal(expected, actual);
    });

    it('should return D', function() {
      let actual = harmony.note_in_key(0,1)
      let expected = "D"
      assert.equal(expected, actual);
    });

    it('should return C if tonality = 12', function() {
      let actual = harmony.note_in_key(12,1)
      let expected = "C"
      assert.equal(expected, actual);
    });
  });
});