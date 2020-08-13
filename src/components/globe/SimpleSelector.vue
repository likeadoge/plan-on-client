<template>
  <a-select :disabled="disabled" labelInValue v-model="target" placeholder="请选择……">
    <a-select-option v-for="v in list" :key="v[id]" :value="v[id]">{{v[label]}}</a-select-option>
  </a-select>
</template>

<script>
export default {
  props: {
    list: { default: () => [] },
    disabled:{ default: () => false },
    id: String,
    label: String,
    value: Object,
  },

  computed: {
    target: {
      get() {
        if (!this.value) return undefined;
        else
          return {
            label: this.value[this.label],
            key: this.value[this.id],
          };
      },
      set(v) {
        if (!v) this.$emit("change", null);
        else
          this.$emit("update:value", {
            [this.label]: v.label,
            [this.id]: v.key,
          });
      },
    },
  },
};
</script>