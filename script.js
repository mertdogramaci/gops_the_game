document.getElementById("deck_size_button").onclick = function() {

    const deck_size = document.getElementById("deck_size").value;
    
    if (deck_size > 10 || deck_size < 1) {
        document.getElementById("deck_size_error").style.display = "inline";
    } else {
        document.getElementById("deck_size_error").style.display = "none";

        const main_deck = [];

        for (let i = 1; i <= deck_size; i++) {
            main_deck.push(i);
        }

        document.getElementById("main_deck").innerHTML = main_deck;
    }
}

let input = document.getElementById("deck_size");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("deck_size_button").click();
  }
});
