//var expect = chai.expect;

var assert = require('assert');
var Cow = require('./cow.js');

describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function(){
      var cow = new Cow();
      expect(cow.name).to.equal("Anon cow");
    });

    it("should set cow's name if provided", function() {
      var cow = new Cow("Liam");
      expect(cow.name).to.equal("Liam");
    });
  });

  describe("#greets", function() {
    it("should throw if no target is passed", function() {
      expect(function() {
        (new Cow()).greets();
      }).to.throw(Error);
    });

    it("should greet passed target", function() {
      var greetings = (new Cow("Liam")).greets("Linda");
      expect(greetings).to.equal("Liam greets Linda");
    });
  });
});
