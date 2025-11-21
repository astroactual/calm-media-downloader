function renderButton(masterSection) {
  // If we weren't provided #TODO FIND SOURCE, we don't need to render anything.
  if (!masterSection) {
    return;
  }

  //create button
  const button = document.createElement("button");
  //Button styles similar to others on page
  button.classList.add("btn", "btn-dark");
  //content of button
  button.textContent = `Download`;

  //Select button location
  const buttonLocation = masterSection.querySelector("h1");
  //insert button
  buttonLocation.insertAdjacentElement("afterend", button);

  //button opens link
  button.addEventListener("click", function () {
    // Open the link in a new tab
    window.open("https://www.google.com", "_blank");
  });
}

//render the button
renderButton(document.querySelector("body"));
