'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	CollegeSchema = mongoose.model('CollegeSchema');

/**
 * Globals
 */
var user, collegeSchema;

/**
 * Unit tests
 */
describe('College schema Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			collegeSchema = new CollegeSchema({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return collegeSchema.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		CollegeSchema.remove().exec();
		User.remove().exec();

		done();
	});
});