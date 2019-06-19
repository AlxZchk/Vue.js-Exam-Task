import Vue from 'vue';
import Vuex from 'vuex';
import data from './data';

Vue.use(Vuex);

const initialState = {
	data,
	curPage: 1,
	perPage: 5,
	searchText: '',
	sortField: null,
	sortDirection: '+',
};

export default new Vuex.Store({
	state: {
		data,
		curPage: 1,
		perPage: 5,
		searchText: '',
		sortField: null,
		sortDirection: '+',
	},
	getters: {
		fields: state => Object.keys(state.data[0]),

		filteredData: state => {
			const filteredData = state.data.filter(
				e =>
					Object.values(e)
						.join('~')
						.toLowerCase()
						.indexOf(state.searchText.toLowerCase()) > -1,
			);

			if (state.sortField === null) {
				return filteredData;
			} else {
				return filteredData.sort((a, b) => {
					const res = b[state.sortField].toString().localeCompare(a[state.sortField].toString());
					return state.sortDirection === '-' ? res : -res;
				});
			}
		},

		rows: (state, getters) => {
			return getters.filteredData.slice((state.curPage - 1) * state.perPage, state.curPage * state.perPage);
		},

		numPages: (state, getters) => Math.ceil(getters.filteredData.length / state.perPage),
	},
	mutations: {
		set: (state, { key, value }) => (state[key] = value),
		changeSort: (state, rowName) => {
			if (state.sortField !== rowName) {
				state.sortField = rowName;
				state.sortDirection = '+';
			} else {
				state.sortDirection = state.sortDirection === '+' ? '-' : '+';
			}
		},
		editItem: (state, data) => {
			const { oldItem, editedItem } = data;
			let index = null;
			state.data.forEach((item, idx) => {
				const keys = Object.keys(item);
				const isExactItem = keys.every((key) => item[key] === oldItem[key]);
				if (isExactItem) { index = idx; }
			})

			const newData = state.data.map((item, idx) => idx === index ? editedItem : item);
			if (index !== null) { state.data = newData; }
		}
	},
	actions: {},
});
