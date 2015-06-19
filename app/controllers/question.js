import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
   actions: {
     edit: function(){
       this.set('isEditing', true);
     },

     save: function() {
       this.set('isEditing', false);

       var question = this.get('model');
       question.set('question', this.get('question'));
       question.set('description', this.get('description'));
       question.set('author', this.get('author'));

       question.save();
     },
     delete: function() {
       var question = this.get('model');
       var answers = question.get('answers');

       var answerIds = [];

       answers.forEach(function(answer){
         answerIds.push(answer.get('id'));
       });

       if(confirm('Are you sure?')) {
        this.store.find('answer').then(function(allAnswers) {
          answerIds.forEach(function(id){
            allAnswers.forEach(function(anAnswer) {
              if(id === anAnswer.get('id')) {
                anAnswer.destroyRecord();
              }
            });
          });
         question.destroyRecord();
        });
       }
     this.transitionToRoute('questions');
   }
 }
});
