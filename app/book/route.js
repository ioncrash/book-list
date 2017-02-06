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

      // let data = this.get('newBook');
      // data.title = this.get('model').get('title')
      // data.author = this.get('model.author');
      // console.log(data);
      // let newBook = this.get('store').createRecord('book', model);
      // newBook.save();
    }
  }
});
