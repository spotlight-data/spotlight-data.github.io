function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var prev = null;
function clickCircle(divId){
  var def = document.getElementById("def");
  var x = document.getElementById(divId);
  if (x.style.display === "none") {
      if (prev === null){
        def.style.display = "none";
        x.style.display = "block";
        prev = x;
      } else {
        def.style.display = "none";
        prev.style.display = "none";
        x.style.display = "block";
        prev = x;
      }
  }else {
    x.style.display = "none";
    def.style.display = "block";
  }
}
