const ratingMessages = [
    " Barely spicy... my grandma's paprika is hotter than this.",
    " Getting warm! Like a mild salsa at best.",
    " Now we're talking! Your nose is definitely running.",
    " VERY SPICY! You are sweating reading this.",
    " EXTREMELY SPICY! You might want to call the fire department!"
];

function rateNews(level) {
    document.getElementById("rating-result").innerText =
        "You rated this " + level + "/5 — " + ratingMessages[level - 1];
}