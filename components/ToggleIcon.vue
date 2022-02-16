<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xml:space="preserve"
    style="enable-background: new 0 0 908 486"
    viewBox="0 0 908 486"
    :class="$colorMode.preference"
  >
    <path
      d="M662.5 453.5c116 0 210-94 210-210s-94-210-210-210h-419c-116 0-210 94-210 210s94 210 210 210h419z"
      style="fill: none; stroke-width: 60; stroke-miterlimit: 10"
    />
    <circle
      :cx="$colorMode.preference === 'light' ? 245 : 662.5"
      cy="243.5"
      r="210"
      style="fill: none; stroke-width: 60; stroke-miterlimit: 10"
    />
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  position: relative;
  path,
  circle {
    stroke: var(--foregroundColor);
    transition: stroke 0.3s ease-out;
  }
}
circle {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
