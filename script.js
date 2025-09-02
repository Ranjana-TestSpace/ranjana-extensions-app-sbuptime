// Listen for messages from Storyblok editor
window.addEventListener("message", (event) => {
  if (event.data && event.data.story) {
    const story = event.data.story;

    // Hide loading
    document.getElementById("loading").classList.add("hidden");

    // Show story data
    document.getElementById("story-data").classList.remove("hidden");
    document.getElementById("story-name").textContent = story.name;
    document.getElementById("story-slug").textContent = story.slug;

    console.log("Received story data from Storyblok:", story);
  }
});
