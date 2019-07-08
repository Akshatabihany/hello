var names = ['budding', 'passionate', 'self-taught', 'committed'];

setInterval(function() {
  var rand = Math.floor(Math.random() * 4);
  document.getElementById("name").innerHTML = names[rand];
}, 1000);
