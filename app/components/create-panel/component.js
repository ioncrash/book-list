import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed('book.title', 'book.author', function() {
    return (book.title !== '' && book.author !== '');
  }),

  book: {
    title: '',
    author: '',
  },
  actions: {
    cancel: function() {
      this.sendAction('cancel');
    },
    save: function() {
      console.log('isValid: ', this.get('isValid'))
      // console.log(this.get('book'))
      this.sendAction('save', this.get('book'));
    },
  }
});
