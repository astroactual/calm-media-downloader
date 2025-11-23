function renderButton(masterSection) {
  // if not provided a .movie-menu, render nothing
  if (!masterSection) {
    return;
  }

  //create button w/ styles
  const button = document.createElement("button");
  //button.style.marginTop = "-4px";
  button.style.borderRadius = "6px";
  button.style.height = "30px";
  button.style.lineHeight = "30px";

  //Button styles similar to others on page
  button.classList.add("btn", "btn-trans-brand", "download-button");
  //content of button
  button.textContent = `Download`;

  //Select button location
  const buttonLocation = masterSection.querySelector(".movie-menu-icons");
  //insert button
  buttonLocation.insertAdjacentElement("afterbegin", button);

  //wait for click
  button.addEventListener("click", function () {
    // find video element on page when clicked, open src in new tab to download
    const videoElement = document.querySelector("video");
    if (!videoElement) {
      window.alert('Please open a video player before clicking "Download"');
      return;
    }
    //post src in console, just cause why not
    console.log("Video Source:", videoElement.src);
    //open link in new blank tab
    window.open(videoElement.src, "_blank");
  });
}

//render button!
renderButton(document.querySelector(".movie-menu"));
