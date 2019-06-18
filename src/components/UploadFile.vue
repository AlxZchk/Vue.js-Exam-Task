<template>
  <div class="upload-btn-wrapper">
    <button class="btn">Upload a file</button>
    <input type="file" name="myfile" ref="myFile" @change="previewFile" />
  </div>
</template>

<script>
export default {
  name: "UploadFile",
  methods: {
    previewFile() {
      const file = this.$refs.myFile.files[0];
      if (file) {
        const reader = new FileReader();
        const self = this;
        reader.readAsText(file, "UTF-8");
        reader.onload = function(evt) {
          const contents = evt.target.result;
          const data = JSON.parse(contents);
          self.$store.commit('set', { key: 'sortField', value: null });
          self.$store.commit('set', { key: 'sortDirection', value: '+' });
          self.$store.commit('set', { key: 'curPage', value: 1 });
          self.$store.commit('set', { key: 'perPage', value: 5 });
          self.$store.commit('set', { key: 'searchText', value: '' });
          self.$store.commit('set', { key: 'data', value: data });
        }

        reader.onerror = function(evt) {
          console.log("Error reading file");
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
}

.btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  cursor: pointer;
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
