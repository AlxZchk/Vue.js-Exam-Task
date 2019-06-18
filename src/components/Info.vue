<template>
  <div class="container">
    <p> Search text: <span>{{searchText}}</span></p>
    <p> Sort field: <span>{{sortField}}</span></p>
    <p> Sort direction: <span>{{sortDirection}}</span></p>
    <p> Current page: <span>{{curPage}}</span></p>
    <p> Items per page: <span>{{perPage}}</span></p>
    <p> Data length: <span>{{data.length}}</span></p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
  
export default {
  name: 'Info',
  computed: {
			...mapState(['searchText', 'sortField', 'sortDirection', 'curPage', 'perPage', 'data']),
		},
}
</script>

<style lang="scss" scoped>

</style>

