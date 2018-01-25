
const arminateButton = document.getElementById('arminate-button')

arminateButton.onclick = () => {
  chrome.tabs.query(
    {active: true, currentWindow: true},
    tabs => chrome.tabs.sendMessage(tabs[0].id, { type: 'arminate' })
  )
}
