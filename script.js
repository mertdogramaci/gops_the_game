document.getElementById("deck_size_button").onclick = function() {
    const deck_size = document.getElementById("deck_size").value;

    for (let i = 1; i <= 13; i++) {
        document.getElementById("main_" + i).style.display = "none";
    }

    for (let i = 1; i <= 13; i++) {
        document.getElementById("selected_main_" + i).style.display = "none";
        document.getElementById("main_" + i).style.border = "none";
    }
    
    if (deck_size > 13 || deck_size < 1) {
        document.getElementById("deck_size_error").style.display = "inline";
        document.getElementById("main_deck").style.display = "none";
        document.getElementById("selected_card_title").style.display = "none";

    } else {
        document.getElementById("deck_size_error").style.display = "none";
        document.getElementById("main_deck").style.display = "inline";
        document.getElementById("selected_card_title").style.display = "inline";
        document.getElementById("input_section").style.display = "none";
        document.getElementById("player_side").style.display = "inline";

        for (let i = 1; i <= deck_size; i++) {
            document.getElementById("main_" + i).style.display = "inline";
        }
        
        let x = Math.floor((Math.random() * deck_size) + 1);
        document.getElementById("selected_main_" + x).style.display = "inline";
        document.getElementById("main_" + x).style.borderStyle = "solid";
        document.getElementById("main_" + x).style.borderColor = "red";
        document.getElementById("main_" + x).style.borderWidth = "10px";
    }
}

let input = document.getElementById("deck_size");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("deck_size_button").click();
  }
});
