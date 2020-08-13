<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    padding: Boolean,
    hover: Boolean,
    level: [Boolean,Number],
  },
  computed: {
    cls() {
      const cls = ["styled-card"];
      if (this.padding) cls.push("padding");
      if (this.level) cls.push("level");
      if (this.hover) cls.push("hover");
      return cls;
    },
  },
};
</script>

<style scoped>
.styled-card {
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s ease-out;
}

.styled-card.padding {
  padding: 16px;
}

.styled-card.level{
  box-shadow: 0 2px 6px 0px rgba(0,0,0,0.08);
}

.styled-card.level.hover:hover{
  box-shadow: 0 4px 10px 0px rgba(0,0,0,0.1);
  cursor: pointer;
}
</style>