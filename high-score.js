(() => {
  const runner = new Runner()
  runner.testScore = (score) => Math.round(score / 40)

  const buttonEl = document.createElement('button')
  document.body.appendChild(buttonEl)
  buttonEl.innerHTML = 'Show High Score'
  buttonEl.addEventListener('click', () => alert(runner.testScore(runner.highestScore)))
})()
