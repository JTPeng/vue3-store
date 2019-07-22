import format from 'date-fns/format';
import Vue from 'vue';

Vue.filter('dateFormat', function(value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return format(value, formatStr);
});
