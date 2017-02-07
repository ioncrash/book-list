import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed('book.title', 'book.author', function() {
    return (this.get('book.title') !== '' && this.get('book.author') !== '');
  }),

  book: {
    title: '',
    author: '',
  },
  actions: {
    cancel: function() {
      this.set('book.title', '')
      this.set('book.author', '')
      this.sendAction('cancel');
    },
    save: function() {
      this.sendAction('save', this.get('book'), this.get('isValid'));
    },
  }
});
