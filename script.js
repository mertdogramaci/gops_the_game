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

        let main_deck = [];
        let first_player_deck = [];
        let second_player_deck = [];

        for (let i = 1; i <= deck_size; i++) {
            main_deck.push(i);
            first_player_deck.push(i);
            second_player_deck.push(i);
        }
        
        for (let i = 0; i < deck_size; i++) {
            let x = turn(main_deck, first_player_deck, second_player_deck);
            main_deck.splice(x[0], 1);
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

function turn(main_deck, first_player_deck, second_player_deck) {
    for (const element of main_deck) {
        document.getElementById("main_" + element).style.display = "inline";
    }

    let x = Math.floor((Math.random() * main_deck.length) + 1);
    document.getElementById("selected_main_" + main_deck[x]).style.display = "inline";
    document.getElementById("main_" + main_deck[x]).style.borderStyle = "solid";
    document.getElementById("main_" + main_deck[x]).style.borderColor = "red";
    document.getElementById("main_" + main_deck[x]).style.borderWidth = "10px";

    let first_step = first_player_turn();
    let second_step;

    let result = [x, first_step, second_step];

    document.getElementById("main_" + main_deck[x]).style.display = "none";
    document.getElementById("selected_main_" + main_deck[x]).style.display = "none";
    return result;
}

function first_player_turn(first_player_deck) {
    
}
