import Vue from 'vue'
import moment from 'moment'

Vue.filter('formateDate', function(payload: string): string {
  if (!payload) return '--'
  return moment(payload).format('YYYY-MM-DD HH:mm:ss')
})