<template>
  <div class="container">
    <div class="info-row">
      <p>
        Search text:
        <span>{{searchText}}</span>
      </p>
      <p>
        Sort field:
        <span>{{sortField}}</span>
      </p>
    </div>
    <div class="info-row">
      <p>
        Sort direction:
        <span>{{sortDirection}}</span>
      </p>
      <p>
        Current page:
        <span>{{curPage}}</span>
      </p>
    </div>
    <div class="info-row">
      <p>
        Items per page:
        <span>{{perPage}}</span>
      </p>
      <p>
        Data length:
        <span>{{data.length}}</span>
      </p>
    </div>
    <div class="info-row">
      <p>
        Data array:
        <span>{{(curPage - 1) * perPage}} - {{ curPage * perPage - 1}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Info",
  computed: {
    ...mapState([
      "searchText",
      "sortField",
      "sortDirection",
      "curPage",
      "perPage",
      "data"
    ])
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 15px;
  border-radius: 5px;
  border: 1px solid black;
}

.info-row {
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
}

p:first-child {
  margin-right: 40px;
}
</style>

