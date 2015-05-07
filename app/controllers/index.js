import Ember from 'ember';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({
  queryParams: ['term'],
  results: [
    { id: 1, name: "game of thrones", img: "http://netflixlife.com/files/2015/04/game-of-thrones-logo.jpeg" , nsfw: true},
    { id: 2, name: "silicon valley", img: "http://www.pyak.com/wp-content/uploads/2014/12/silicon-valley.jpg" , nsfw: false},
    { id: 3, name: "friends", img: "http://www.online-movie-films.com/wp-content/uploads/2014/02/online-movie-films8.jpg" , nsfw: false},
    { id: 4, name: "house of cards", img: "http://cdn.bgr.com/2013/04/netflix-house-of-cards.jpg" , nsfw: true},
    { id: 5, name: "modern family", img: "https://pmcdeadline2.files.wordpress.com/2014/06/modern-5__140605173923.jpg" , nsfw: false},
    { id: 6, name: "breaking bad", img: "http://www.palingbisa.com/wp-content/uploads/2015/01/Breaking-Bad.jpg" , nsfw: true}
  ],

  queryResults: computedFilterByQuery('results', 'name', 'term').readOnly(),

  filteredResults: function() {
    if (this.get('nsfw')) {
      return this.get('queryResults');
    } else {
      return this.get('queryResults').filterBy('nsfw', false);
    }
  }.property('queryResults', 'nsfw'),

  actions: {
    selectRes: function(result) {
      this.transitionTo('results', { queryParams: { term: result } });
    }
  }
});
