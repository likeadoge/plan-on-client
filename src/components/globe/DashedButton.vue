<template>
  <div class="btn" @click="()=>btnClick()">
      <a-icon
        v-if="!loading"
        :style="{color:'#999',fontSize:iconSize?iconSize+'px':'14px'}"
        type="plus"
      />
      <a-icon
        v-if="loading"
        :style="{color:'#999',fontSize:iconSize?iconSize+'px':'14px'}"
        type="loading"
      />
    <slot />
  </div>
</template>


<script>
export default {
  props: ["iconSize"],
  data: () => ({
    loading: false,
  }),
  methods: {
    btnClick() {
      this.$emit("click", (v) => {
        this.loading = true;
        Promise.resolve(v).finally(() => {
          this.loading = false;
        });
      });
    },
  },
};
</script>

<style scoped>
.btn {
  border: 1px dashed #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.btn:hover {
  opacity: 0.6;
}
</style>