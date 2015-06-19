import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
   addQuestion: function() {
     var question = this.store.createRecord('question', {
       question: this.get('question'),
       description: this.get('description'),
       author: this.get('author'),
     });

     question.save();

     this.setProperties({
      question: '',
      description: '',
      author: ''
     });
     this.transitionToRoute('questions');
   }
 }
});
