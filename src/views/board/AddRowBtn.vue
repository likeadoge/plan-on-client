<template>
    <dashed-button v-if="!viewer()" :style="{height:'36px'}" @click="cb=>cb(addRow())">
      <div style="padding:6px;margin-top:-2px">添加泳道</div>
      
    </dashed-button>
</template>

<script>
import { auth } from "@/utils/auth";
export default {
  methods: {
    ...auth(),
    addRow() {
      return new Promise((res, rej) => {
        this.$emit("addRow", { res, rej });
      });
    },
  },
};
</script>