import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        answer: this.get('answer'),
        author: this.get('author'),
        date: new Date,
        question: this.get('controllers.question.model')
      });

      var question = this.get('controllers.question.model');

      newAnswer.save().then(function() {
        question.get('answers').pushObject(newAnswer);
        question.save();
      });

      this.setProperties({
        author: '',
        question: ''
      });
    this.transitionToRoute('question', question.get('id'));
    }
  }
});
