(function(Vue, moment) {
  'use strict';

  Vue.config.debug = true;

  var base = 'http://api.myproject.dev:8000';

  var vm = new Vue({
    el: '#demo',

    data: {
      articles: {}
    },

    ready: function() {
      var resource = this.$resource(base + '/v1/articles');

      resource.get('').then(function(response) {
        this.$set('articles', response.data.data);
      }, function(response) {
        console.log(response);
      });
    },

    filters: {
      formatDate: function(datetime) {
        return moment(datetime, moment.ISO_8601).fromNow();
      }
    },

    http: {
      headers: {
        Accept: 'application/json'
      }
    }
  });
})(Vue, moment);

