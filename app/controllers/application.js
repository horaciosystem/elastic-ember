import Ember from 'ember';
import {search} from '../utils/elastic';
var client = new elasticsearch.Client();

export default Ember.Controller.extend({
  query: "",
  actions: {
    search: function () {
      search(client, this.get('query'), {
        success: data => {
          console.log('sucess');
          console.log(data);
        },
        fail: e => {
          if(e.lengthComputable){
            console.log(e);
            // var progress = e.loaded / e.total * 100;
            // this.set('progressValue', progress);
          } else {
            console.log('não tem tamanho. hã ? ');
          }
        }
      });
    },
  }
});
