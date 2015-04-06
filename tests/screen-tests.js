var TestsHelper = require('./lib/test-helper');

var Screen = require('../lib/screen');

function testBounds() {
  var bounds = Screen.bounds();

  TestsHelper.assert(Object.keys(bounds).length == 4, "The screen's bounds should have four values");

  for (var key in bounds) {
    var value = bounds[key];
    TestsHelper.assert(value > 0, "Every value of the screen's bounds");
  }
}

testBounds();