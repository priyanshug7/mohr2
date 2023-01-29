var params = {
    fullscreen: true
  };
  var elem = document.body;
  var two = new Two(params).appendTo(elem);
  
  // Two.js has convenient methods to make shapes and insert them into the scene.
  var radius = 50;
  var x = two.width * 0.5;
  var y = two.height * 0.5 - radius * 1.25;
  var circle = two.makeCircle(x, y, radius);
  circle.fill = '#FF8000';
// And accepts all valid CSS color:
circle.stroke = 'orangered';
circle.linewidth = 5;
two.update();