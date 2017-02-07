import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('book');
  },

  actions: {
    cancel: function() {
      this.transitionTo('index');
    },
    save: function(book, isValid) {
      if (isValid) {
        this.get('store').findAll('book').then((books) => {
          book.rank = books.get('length') + 1;
          let bookSave = this.get('store').createRecord('book', book);
          bookSave.save().then(() => {
            this.transitionTo('index');
          });
        })
      } else {
        Ember.$('.error').text("Something's wrong -- please make sure you have entered both a title and an author!")
      }
    },
  }
});
