import Ember from 'ember';
import jQuery from 'jquery';

export default Ember.Component.extend({
  focusOnKeyDown: function() {
    var newactiveIndex = this.get('activeIndex');
    if (newactiveIndex >= 0) {
      this.toggleActiveClass(newactiveIndex);
    }else{
      jQuery('li').removeClass();
    }
  }.observes('attrs.activeIndex').on('init'),

  toggleActiveClass: function (activeIndex) {
    var element = 'li[tabindex='+ activeIndex +']' ;
    var indexEle = jQuery(element);
    indexEle.addClass('teal').siblings().removeClass();
    indexEle.closest('ul.autolist').scrollTop(indexEle.index() * indexEle.outerHeight());
  },
  actions: {
    selectRes: function(result) {
      this.sendAction('selectRes', result.name);
    }
  }

});
