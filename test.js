const request = require("request");
const assert = require('assert');

const base_url = "https://hometask-rita-iakovleva.c9users.io/length";

let data = '';

describe("length test ", function(){

    describe("get length correctly", function() {

        data = '';
        it(`should return ${data.length}`, function(done) {
            request.get(`${base_url}?${data}`, function(err, res, body) {
                assert.equal(data.length, body);
                done();
            });
        });

        data = 'lala';
        it(`should return ${data.length}`, function(done) {
            request.get(`${base_url}?${data}`, function(err, res, body) {
                assert.equal(data.length, body);
                done();
            });
        });

        data = '!(%$#*&"YV%h")';
        it(`should return ${data.length}`, function(done) {
            request.get(`${base_url}?${data}`, function(err, res, body) {
                assert.equal(data.length, body);
                done();
            });
        });

        data = '10475846';
        it(`should return ${data.length}`, function(done) {
            request.get(`${base_url}?${data}`, function(err, res, body) {
                assert.equal(data.length, body);
                done();
            });
        });

        data = 'lwkdckfdvfka';
        it(`should return ${data.length}`, function(done) {
            request.get(`${base_url}?${data}`, function(err, res, body) {
                assert.equal(data.length, body);
                done();
            });
        });

    });

});
