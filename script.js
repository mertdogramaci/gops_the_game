document.getElementById("deck_size_button").onclick = function() {
    let deck_size = document.getElementById("deck_size").value;
    if (deck_size > 10 || deck_size < 1) {
        document.getElementById("deck_size_output").style.display = "none";
        document.getElementById("deck_size_error").style.display = "inline";
    } else {
        document.getElementById("deck_size_error").style.display = "none";
        document.getElementById("deck_size_output").style.display = "inline";
        document.getElementById("deck_size_output").innerHTML = deck_size;
    }
}

let input = document.getElementById("deck_size");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("deck_size_button").click();
  }
});