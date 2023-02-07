<template>
  <div class="container">
    <svg-icon class="icon" type="mdi" :path="iconPath"></svg-icon>
    <span class="parameter">{{ parameter }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiBank } from "@mdi/js";

export default {
  name: "MyInfoItem",
  props: {
    parameter: { type: String },
    value: { type: String },
    iconPath: { type: String },
  },
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiBank,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .icon {
    height: 48px;
    width: 48px;
    :first-child {
        fill: var(--color-char)
    }
  }
  .parameter{
    max-width: 150px;
    font-size: normal;
    font-weight: lighter;
    color: var(--color-text);
  }
  .value{
    font-size: large;
    font-weight: bold;
  }
}
</style>
