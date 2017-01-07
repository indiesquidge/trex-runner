try {
  const buttonEl = document.createElement('button')
  document.body.appendChild(buttonEl)
  buttonEl.innerHTML = 'Show High Score'

  const runner = new window.Runner()
  runner.testScore = score => Math.round(score / 40)
  buttonEl.addEventListener('click', () => {
    window.alert(runner.testScore(runner.highestScore) || 0)
  })
} catch (e) {
  window.alert(new Error(e))
}
