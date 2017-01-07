function injectScript (filePath, tag = 'body') {
  const node = document.getElementsByTagName(tag)[0]
  const script = document.createElement('script')

  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', filePath)
  node.appendChild(script)
}

injectScript(chrome.extension.getURL('high-score.js'), 'body')
