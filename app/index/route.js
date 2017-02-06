import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('book');
  },

  actions: {
    editBook: function(book) {
      this.transitionTo('book', book)
    }
  }
});
