const chai = require('chai');
const InfoObject = require('../info/index.js');
const Serverless = require('serverless');
const config = require('../config.js');

const serverless = new Serverless();
const infoObject = new InfoObject(serverless, {})

// describe a test group
describe("info/index.js tests", () => {
  // describe a specific test
  it('init()', (done) => {
  	console.log("here")
  	console.log(infoObject.provider)
  	chai.expect(infoObject.init()).to.be.a('string');    
    
    done();
  });
});