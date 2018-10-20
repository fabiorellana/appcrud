import Vue from 'vue'
import Router from 'vue-router'
import Data from '@/components/Data'
import DataPage from '@/components/DataPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Data',
			component: Data
		},
		{
			path: '/',
			name: 'DataPage',
			component: DataPage
		}
	]
})