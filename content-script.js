
chrome.runtime.onMessage.addListener( msg => {
  Array.from(document.querySelectorAll('img'))
    .forEach(img => img.src = chrome.extension.getURL('images/armin.jpg'))
})
