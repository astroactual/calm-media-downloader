function renderReadingTime(loginPanel) {
  // If we weren't provided a main, we don't need to render anything.
  if (!loginPanel) {
    return;
  }

  const badge = document.createElement("button");
  // TODO: Add button styles similar to others on page
  badge.classList.add("btn", "btn-dark");

  badge.textContent = `Download`;

  // Support for API reference docs
  const downloadButton = loginPanel.querySelector(".col-sm-7");

  downloadButton.insertAdjacentElement("afterbegin", badge);
}

renderReadingTime(document.querySelector(".login-panel"));
