const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const input = document.querySelector('body')

  input.addEventListener('keydown', function(e) {

    if (parseInt(e.detail || e.which) == 38) {
      alert(`Congrats!`)
    }
  })
}
