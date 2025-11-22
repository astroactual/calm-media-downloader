function renderButton(masterSection) {
  // If we weren't provided #TODO FIND SOURCE, we don't need to render anything.
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

  const videoElement = document.querySelector('video');

}

renderButton(document.querySelector(".movie-menu"));

  // Function to handle discovered video elements
function handleVideoElements(videoElements) {
let videoToProcessSrc = null; // Initialize a variable to hold the src
const button = document.querySelector('button.download-button');

    videoElements.forEach(video => {
        if (!video.classList.contains('processed')) {
            console.log('New video found:', video);
            video.classList.add('processed');
            // If you want the src of the first newly processed video
            if (videoToProcessSrc === null) {
                videoToProcessSrc = video.src;
                console.log(videoToProcessSrc);
                button.addEventListener("click", function () {
                // Open the link in a new tab
                window.open(videoToProcessSrc, "_blank");
            });

            }
        }
    });

    const mediaSrc = document.getElementsByClassName("video.processed")[0];
    console.log(mediaSrc);
}

// Function that will be called when DOM mutations occur
const observerCallback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
        // Check if new nodes (elements) were added
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const addedVideos = [];
            
            // Iterate over added nodes
            mutation.addedNodes.forEach(node => {
                // Check if the node itself is a video element
                if (node.tagName === 'VIDEO') {
                    addedVideos.push(node);
                } 
                // Check if any added node *contains* video elements within its children
                else if (node.querySelector) {
                    const nestedVideos = node.querySelectorAll('video');
                    if (nestedVideos.length > 0) {
                        addedVideos.push(...Array.from(nestedVideos));
                    }
                }
            });

            if (addedVideos.length > 0) {
                handleVideoElements(addedVideos);
            }
        }
    }
};

// Create a new MutationObserver instance
// The observerCallback function runs whenever the observed changes happen
const observer = new MutationObserver(observerCallback);

// Configuration of the observer:
const config = { 
    childList: true, // Observe additions/removals of child elements
    subtree: true    // Observe all descendants of the target
};

// Start observing the document body for configured mutations
observer.observe(document.body, config);

// Optional: Also check for existing videos when the script first runs
const initialVideos = document.querySelectorAll('video');
if (initialVideos.length > 0) {
    handleVideoElements(Array.from(initialVideos));
}


 


//render the button







