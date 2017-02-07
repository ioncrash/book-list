import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('book');
  },

  actions: {
    editBook: function(book) {
      this.transitionTo('book', book);
    },
    createBook: function() {
      this.transitionTo('new');
      // let books = this.get('store').findAll('book');
      // console.log(model.get('length'));
    },
    rankUp: function(book) {
      console.log("in index, book is ", book)
      book.set('rank', book.get('rank') + 1)
      console.log(book.get('rank'))
    }
  }
});
