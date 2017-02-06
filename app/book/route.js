import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('book', params.book_id);
  },

  newBook: {
    title: '',
    author: '',
  },

  actions: {
    save: function(book) {
      book.save();
    },
    cancel: function() {
      this.transitionTo('index')
    },
    deleteBook: function(book) {
      book.destroyRecord()
        .then(()=>{
          this.transitionTo('index');
        });
    }
  }
});
