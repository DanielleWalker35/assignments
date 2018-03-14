var chai = require("chai");
var assert = chi.assert;

var helperCallbForFilt = require("../app.js");

describe("counting code warmup test", function(){
    it("should return 1", function(){
        assert.equal(helperCallbForFilt("code"), 1);
    });
    it ("should return 0", function(){
        assert.equal(helperCallbForFilt("ccc"), 0);
    });
    it ("should return 1", function(){
        assert.equal(helperCallbForFilt("cofe"), 1);
    });
    it ("should return 2", function(){
        assert.equal(helperCallbForFilt("xxxcopecodexx"), 2);
    });
})

//to run the text, from the project folder type the command "mocha"into terminal
