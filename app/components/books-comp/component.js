import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editBook: function(book) {
      // console.log(this.get('book'))
      this.sendAction('editBook', book);
    },
    rankUp: function(book) {
      this.sendAction('rankUp', book);
    }
  }

});
