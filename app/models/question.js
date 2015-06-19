import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
