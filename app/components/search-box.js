import Ember from 'ember';

export default Ember.TextField.extend({
  placeholder: 'Search image for a human action',
  classNames: ['center-align'],

  observeInput: function() {
    if (!this.get('holdValue')) {
      var inp = this.get('value');
      this.set('term', inp);
    }
  }.observes('value', 'holdValue', 'nsfw'),

  didInsertElement: function(){
    this.$().focus();
    var val = this.get('term');
    this.setProperties({
      activeIndex: -1,
      value: val
    });
  },
  keyDown: function(e) {
    var offset = e.keyCode === 38 ? -1 : e.keyCode === 40 ? 1 : 0; // up or down

    var aI      = this.get('activeIndex'),
      newIndex  = aI + offset,
      results     = this.get('results');
    if(offset) {

      if (newIndex >= 0 && (newIndex < results.length)) {
        var result = results[newIndex];

        this.setProperties({
          holdValue: true,
          activeIndex: newIndex,
          value: result.name
        });
      }
      e.preventDefault();
    }
    else if(e.keyCode === 13){
      this.sendAction('selectRes', results[aI].name);
    }
    else{
      this.$().focus();
      this.set('holdValue', false);
      this.set('activeIndex', -1);
    }
  }
});
