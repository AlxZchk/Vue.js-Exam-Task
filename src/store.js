import Vue from 'vue';
import Vuex from 'vuex';
import data from './data';

Vue.use(Vuex);

const initialState = {
	data,
	curPage: 1,
	perPage: 5,
	searchText: '',
};

export default new Vuex.Store({
	state: {
		data,
		curPage: 1,
		perPage: 5,
		searchText: '',
	},
	getters: {
		fields: state => Object.keys(state.data[0]),

		filteredData: state => {
			return state.data.filter(
				e =>
					Object.values(e)
						.join('~')
						.toLowerCase()
						.indexOf(state.searchText.toLowerCase()) > -1,
			);
		},

		rows: (state, getters) => {
			return getters.filteredData.slice((state.curPage - 1) * state.perPage, state.curPage * state.perPage);
		},

		numPages: (state, getters) => Math.ceil(getters.filteredData.length / state.perPage),
	},
	mutations: {
		set: (state, { key, value }) => (state[key] = value),
	},
	actions: {},
});
