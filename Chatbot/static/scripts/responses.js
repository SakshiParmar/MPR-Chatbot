function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there! How are you feeling today?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "How are you?") {
        return "I'm good";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "What's your fav phrase?") {
        return "Very good prisha and aryan";
    } else if (input == "I'm good") {
        return "Acha laga sunke";
    } else {
        return "Try asking something else!";
    }
}