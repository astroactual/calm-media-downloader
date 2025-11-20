console.log("This is a popup!");

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: getSelectedElementText,
      },
      (results) => {
        if (results && results[0] && results[0].result) {
          document.getElementById("extractedText").textContent =
            results[0].result;
        } else {
          document.getElementById("extractedText").textContent =
            "No element selected or unable to extract text.";
        }
      }
    );
  });
});

function getSelectedElementText() {
  // This function runs in the context of the webpage
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const selectedElement = range.commonAncestorContainer;
    // Try to get the text content of the closest element parent
    if (selectedElement.nodeType === Node.TEXT_NODE) {
      return selectedElement.parentNode.textContent;
    } else if (selectedElement.nodeType === Node.ELEMENT_NODE) {
      return selectedElement.textContent;
    }
  }
  return null;
}
