chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const movieTitle = "ng-binding ng-scope";

  //const mediaTitle = bindingTitle ?? scopeTitle;

  if (request.action === "getSpanText") {
    const spanElement = document.querySelector(`span.${movieTitle}`); // Target the first span element
    if (spanElement) {
      sendResponse({ spanText: spanElement.textContent });
    } else {
      sendResponse({ spanText: null });
    }
  }
});
