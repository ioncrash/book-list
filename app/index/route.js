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
    },
    rankUp: function(book) {
      let that = this;
      new Ember.RSVP.Promise(function(resolve) {
        that.store.findAll('book')
          .then(function(books) {
            return books.filterBy('rank', book.get('rank') - 1)[0];
            // console.log(books)
          })
        .then((otherBook) => {
          let newRank = otherBook.get('rank') + 1
          otherBook.set('rank', newRank)
          otherBook.save();
        })
        .then(()=> {
          book.set('rank', book.get('rank') - 1);
          book.save();
        })

      })
      // console.log("in index, book is ", book)

      // console.log(book.get('rank'))
    }
  }
});
