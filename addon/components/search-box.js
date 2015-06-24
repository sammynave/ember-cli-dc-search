import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: ['placeholder'],
  placeholder: 'enter a name or email'
});
