var slider = document.getElementById("range");
var val = document.getElementById("value");
slider.oninput = function() {
  var active = 250 * (this.value / 100);
  val.style.width = active + 'px';
}