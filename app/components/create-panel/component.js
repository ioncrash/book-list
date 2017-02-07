import Ember from 'ember';

export default Ember.Component.extend({
  book: {
    title: '',
    author: '',
  },
  actions: {
    cancel: function() {
      this.sendAction('cancel');
    },
    save: function() {
      // console.log(this.get('book'))
      this.sendAction('save', this.get('book'));
    },
  }
});
