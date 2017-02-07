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
    save: function(book, isValid) {
      if (isValid) {
        book.save()
        .then(()=>{
          this.transitionTo('index');
        });
      } else {
        Ember.$('.error').text("Something's wrong -- please make sure you have entered both a title and an author!")
      }
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
