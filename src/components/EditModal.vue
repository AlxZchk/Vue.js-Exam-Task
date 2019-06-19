<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="input-wrapper" v-for="(field, index) in fields" :key="`r${index}`">
          <label>
            <span>{{field}}</span>
            <input v-model="item[field]" type="text" :name="field">
          </label>
        </div>
        <div class="button-container">
          <button class="btn" type="button" @click="submitHandler">Submit</button>
          <button class="btn" type="button" @click="cancelHandler">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EditModal',
  props: ['item'],
  computed: {
    fields() {
      return Object.keys(this.item);
    },
  },
  methods: {
    submitHandler() {
      this.$emit('sumbitModal', this.item);
    },
    cancelHandler() {
      this.$emit('cancelModal');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between
}

label {
  display: flex;
  justify-content: space-between;
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

</style>
