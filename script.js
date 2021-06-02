document.getElementById('img-changer').addEventListener('click', image)
document.getElementById('text-changer').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('background').addEventListener('click', bg)

function image () {
  document.getElementById('picture').src = 'images/sleeping.jpg'
}

function text () {
  document.getElementById('text1').innerHTML = 'Good Evening!'
}

function hide () {
  document.getElementById('text1').style.display = 'none'
}

function show () {
  document.getElementById('text1').style.display = "block"
}

function bg () {
  document.body.style.backgroundColor = "violet"
}
