import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'eapp/tests/helpers/start-app';

var application;

module('Acceptance: Home', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '');
    assert.equal(find('ul.autolist li').length, 3, 'Total available autocomplete results that are non-nsfw');
  });
});

test('nsfw posts', function(assert) {
  visit('/');
  click('.nsfw-check input');

  andThen(function() {
assert.equal(find('ul.autolist li').length, 6, 'Also includes nsfw posts');
  });
});

test('search posts', function(assert) {
  visit('/');
  fillIn('input.searchField', 'f');

  andThen(function() {
    assert.equal(find('ul.autolist li').length, 2, 'Matching posts');
  });
});

test('no posts for search result', function(assert) {
  visit('/');
  fillIn('input.searchField', 'wolf');

  andThen(function() {
    assert.equal(find('ul.autolist li').length, 0, 'No matches');
    assert.equal(find('h5').text(), 'No results found');
  });
});

