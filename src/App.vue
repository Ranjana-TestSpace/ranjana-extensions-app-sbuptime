<template>
  <div class="iframe-wrapper">
    <iframe
      src="https://uptime.storyblok.com/"
      class="uptime-iframe"
      title="Storyblok Uptime"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.iframe-wrapper {
  flex: 1;
  width: 100%;
  height: 100vh; /* Full viewport height */
  min-width: 800px; /* Force it to be broad */
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.uptime-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
