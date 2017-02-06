import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      this.sendAction('save', this.get('book'));
    },
    cancel: function() {
      this.sendAction('cancel');
    },
    deleteBook: function() {
      this.sendAction('deleteBook', this.get('book'));
    }
  }
});
