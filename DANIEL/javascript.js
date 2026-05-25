const reviews = [

{
    name:"alphasigma123",
    stars:"⭐⭐⭐⭐⭐",
    text:"Amazing spicy news!",
    img:"Anonymous.png"
},

{
    name:"Georgi Zhivkov",
    stars:"⭐⭐⭐⭐",
    text:"Very spicy website.",
    img:"georgi.jpg"
},

{
    name:"Sebastian Chernev",
    stars:"⭐⭐⭐⭐⭐",
    text:"Best newspaper ever!",
    img:"daniel.jpg"
}

];

let current = 0;

function showReview(){

    document.getElementById("name").innerText =
    reviews[current].name;

    document.getElementById("stars").innerText =
    reviews[current].stars;

    document.getElementById("text").innerText =
    reviews[current].text;

    document.getElementById("reviewer").src =
    reviews[current].img;
}

function nextReview(){

    current++;

    if(current >= reviews.length){
        current = 0;
    }

    showReview();
}

function previousReview(){

    current--;

    if(current < 0){
        current = reviews.length - 1;
    }

    showReview();
}
