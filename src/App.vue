<template>
	<div id="app">
		<div class="app-top">
			<UploadFile></UploadFile>
			<Info></Info>
		</div>
		<div class="app-header">
			<ShowItems />
			<SearchItems />
		</div>

		<TableData @edit="editHandler" />

		<div class="app-footer">
			<!-- <Info /> -->
			<Pagination />
		</div>
		<EditModal 
			v-if="isModalShown" 
			:item="editItem"
			@sumbitModal="submitModal"
			@cancelModal="cancelModal"
		></EditModal>
	</div>
</template>

<script>
	import TableData from '@/components/Table.vue';
	import ShowItems from '@/components/ShowItems.vue';
	import SearchItems from '@/components/SearchItems.vue';
	import Pagination from '@/components/Pagination.vue';
	import UploadFile from '@/components/UploadFile.vue'
	import Info from '@/components/Info.vue';
	import EditModal from '@/components/EditModal.vue';

	export default {
		name: 'App',
		data() {
			return {
				isModalShown: false,
				editItem: null,
				editItemSave: null,
			}
		},
		components: {
			TableData,
			ShowItems,
			SearchItems,
			Pagination,
			UploadFile,
			Info,
			EditModal,
		},
		methods: {
			editHandler(row) {
				this.editItem = { ...row };
				this.editItemSave = { ...row };
				this.isModalShown = true;
			},
			cancelModal() {
				this.editItem = null;
				this.editItemSave = null;
				this.isModalShown = false;
			},
			submitModal(result) {
				this.$store.commit('editItem', { oldItem: this.editItemSave, editedItem: result });
				this.editItem = null;
				this.editItemSave = null;
				this.isModalShown = false;
			}
		}
	};
</script>


<style lang="scss">
	* {
		box-sizing: border-box;
		color: #73879c;
		font-size: 14px;
	}

	.app-header,
	.app-footer {
		display: flex;
		justify-content: space-between;
		padding: 8px 2px;
	}

	.app-top {
		padding: 10px 0;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between
	}
</style>
