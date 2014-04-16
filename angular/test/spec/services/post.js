'use strict';

describe('Service: Post', function () {

  // load the service's module
  beforeEach(module('soyApp'));

  // instantiate service
  var Post;
  beforeEach(inject(function (_Post_) {
    Post = _Post_;
  }));

  it('should do something', function () {
    expect(!!Post).toBe(true);
  });

});
