import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [ 'Architect 1 ', 'Architect 2', 'Architect 3' ]
  }
});
