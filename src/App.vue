<template>
	<div id="app">
		<div class="upload-button">
			<UploadFile></UploadFile>
		</div>
		<div class="app-header">
			<ShowItems />
			<SearchItems />
		</div>

		<TableData />

		<div class="app-footer">
			<!-- <Info /> -->
			<Pagination />
		</div>
	</div>
</template>

<script>
	import TableData from '@/components/Table.vue';
	import ShowItems from '@/components/ShowItems.vue';
	import SearchItems from '@/components/SearchItems.vue';
	import Pagination from '@/components/Pagination.vue';
	import UploadFile from '@/components/UploadFile.vue'
	// import Info from '@/components/Info.vue';

	export default {
		name: 'App',
		components: {
			TableData,
			ShowItems,
			SearchItems,
			Pagination,
			UploadFile,
			// Info,
		},
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

	.app-upload {
		padding: 10px 0;
	}
</style>
