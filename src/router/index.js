import Vue from 'vue'
import Router from 'vue-router'
import Names from '@/components/Names'
import NamesPage from '@/components/NamesPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Names',
			component: Names
		},
		{
			path: '/',
			name: 'NamesPage',
			component: NamesPage
		}
	]
})