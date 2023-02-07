<template>
    <button class="button">
        <slot/>
    </button>
</template>

<script>
    export default {
        name: "MyButton"
    }
</script>

<style lang="scss" scoped>
.button {
  border: 2px solid var(--color-char);
  color: var(--color-char-text);
  background: none;
  font-size: medium;
  font-weight: normal;
  padding: 5px;
  transition: all 0.3s;
  background-color: var(--color-char);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px var(--color-char);
  }
}
</style>