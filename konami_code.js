const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// const alphabet = ['a', 'b', 'c']



function init() {

const doc = document.body.addEventListener('keydown', function(event){
  onKeyDownHandler(event)
})

// keep track of index outside of the event handler
var index = 0

// unattached event handler
function onKeyDownHandler(e) {
  console.log(e);
  const key = parseInt(e.detail || e.which);
  console.log(key);

  if (key === code[index]) {
    index++

    if (index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}
}
