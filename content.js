function renderButton(masterSection) {
  // If we weren't provided .movie-menu, we don't need to render anything.
  if (!masterSection) {
    return;
  }

  //create button
  const button = document.createElement("button");
  //Button styles similar to others on page
  button.classList.add("btn", "btn-trans-brand", "download-button");
  //content of button
  button.textContent = `Download`;

  //Select button location
  const buttonLocation = masterSection.querySelector(".ff-icon-movie-about");
  //insert button
  buttonLocation.insertAdjacentElement("afterend", button);

  //Event listener goes here
}

//render button when movie menu is present
//TODO: render button only when video link is present??
//TODO or add event listener to button, when clicked, find video element and load src in new tab
renderButton(document.querySelector(".movie-menu"));
