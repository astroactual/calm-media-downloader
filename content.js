function renderReadingTime(h1) {
  // If we weren't provided an h1, we don't need to render anything.
  if (!h1) {
    return;
  }

  const badge = document.createElement("button");
  // TODO: Add button styles similar to others on page
  badge.classList.add("color-secondary-text", "type--caption");

  badge.textContent = `Download`;

  // Support for API reference docs
  const downloadButton = h1.querySelector("h1");

  downloadButton.insertAdjacentElement("afterend", badge);
}

renderReadingTime(document.querySelector("h1"));

// script won't be reinjected when this happens, so we need to watch for changes to the content.
observer.observe(document.querySelector("devsite-content"), {
  childList: true,
});
