<template>
	<table>
		<thead>
			<tr>
				<th 
					v-for="(field, index) in fields" :key="`f${index}`"
					@click="changeSort(field)"
					v-bind:class="{ 
							sortArrowUp: sortDirection === '+' && sortField === field,
						 	sortArrowDown: sortDirection === '-' && sortField === field
						}"
				>
					{{ field }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, index) in rows" :key="`r${index}`">
				<td v-for="(item, key) in row" :key="`d${key}`">
					<span v-html="replaceText(item.toString())" />
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';

	export default {
		name: 'Table',

		computed: {
			...mapState(['searchText', 'sortField', 'sortDirection']),
			...mapGetters(['fields', 'rows']),
		},

		methods: {
			replaceText(text) {
				return text.replace(
					new RegExp('(' + this.searchText + ')', 'gim'),
					'<i>$1</i>',
				);
			},
			changeSort(rowName) {
				this.$store.commit('changeSort', rowName);
			},
		},
		created() {
			this.$store.commit('set', { key: 'curPage', value: Number(this.$route.params.id) });
		}
	};
</script>



<style lang="scss">
	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 5px;
	}

	tbody tr:nth-child(odd) {
		background-color: #f9f9f9;
	}

	th {
		text-align: left;
		border: 1px solid #ddd;
		border-bottom: 3px solid #ddd;
		font-family: 'Glyphicons Halflings';
		position: relative;
		cursor: pointer;
	}

	th::after {
		content: '';
		position: absolute;
		top: 12px;
		right: 8px;
		display: block;
		opacity: 0.2;
		font-size: 0.7em;
	}

	th.sortAsc::after {
		content: '\25b2';
		opacity: 0.8;
	}

	th.sortDesc::after {
		content: '\25bc';
		opacity: 0.8;
	}

	td {
		border: 1px solid #ddd;
	}

	td,
	th {
		padding: 8px;
		position: relative;
	}

	i {
		display: inline-block;
		font-style: normal;
		background-color: yellow;
	}

	.sortArrowUp, .sortArrowDown {
            position: relative;
        }
        .sortArrowUp::after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            display: inline-block;
            width: 0;
            height: 0;
            vertical-align: .255em;
            content: "";
            border-top: 0;
            border-right: .3em solid transparent;
            border-bottom: .3em solid #000;
            border-left: .3em solid transparent;
        }

        .sortArrowDown::after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            display: inline-block;
            width: 0;
            height: 0;
            vertical-align: .255em;
            content: "";
            border-top: .3em solid #000;
            border-right: .3em solid transparent;
            border-bottom: 0;
            border-left: .3em solid transparent;
        }
</style>
