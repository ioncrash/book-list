import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed('book.title', 'book.author', function() {
    return (this.get('book.title') !== '' && this.get('book.author') !== '');
  }),

  actions: {
    save: function() {
      this.sendAction('save', this.get('book'), this.get('isValid'));
    },
    cancel: function() {
      this.sendAction('cancel');
    },
    deleteBook: function() {
      this.sendAction('deleteBook', this.get('book'));
    }
  }
});
