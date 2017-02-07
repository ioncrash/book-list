import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('book');
  },

  actions: {
    cancel: function() {
      this.transitionTo('index');
    },
    save: function(book) {
      this.get('store').findAll('book').then((books) => {
        book.rank = books.get('length') + 1;
        let bookSave = this.get('store').createRecord('book', book);
        console.log(bookSave)
        bookSave.save().then(() => {
          this.transitionTo('index')
        });
      })
    }
  }
});
