  import Ember from 'ember';
  var client = new elasticsearch.Client();

  export default Ember.Controller.extend({
    query: "",
    actions: {
      search: function () {
        client.search({
          q: 'pants'
        }).then(function (body) {
          var hits = body.hits.hits;
          console.log(body);
        }, function (error) {
          console.trace(error.message);
        });
      }
    }
  });
