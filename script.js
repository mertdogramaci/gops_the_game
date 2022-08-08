document.getElementById("deck_size_button").onclick = function() {

    const deck_size = document.getElementById("deck_size").value;

    for (let i = 1; i <= 10; i++) {
        let image_path = "main_" + i;
        document.getElementById(image_path).style.display = "none";
    }
    
    if (deck_size > 10 || deck_size < 1) {
        document.getElementById("deck_size_error").style.display = "inline";
        document.getElementById("main_deck").style.display = "none";
    } else {
        document.getElementById("deck_size_error").style.display = "none";

        const main_deck = [];
        const main_deck_path = "card_images/spades/";

        for (let i = 1; i <= deck_size; i++) {
            let image_path = "main_" + i;
            document.getElementById(image_path).style.display = "inline";
        }
    }
}

let input = document.getElementById("deck_size");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("deck_size_button").click();
  }
});
