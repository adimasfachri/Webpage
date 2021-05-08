function drop() {
  var x = document.getElementById("top_navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}