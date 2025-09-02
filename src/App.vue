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
  width: 100%;
  height: 100vh; /* Full viewport height */
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
