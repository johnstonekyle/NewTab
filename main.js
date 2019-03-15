var icons = [
    "apple",
    "bacon",
    "bananas",
    "bell-pepper",
    "broccoli",
    "carrot",
    "cheese",
    "cherry",
    "chicken-leg",
    "chili-pepper",
    "chocolate",
    "coffee-cup",
    "cookie",
    "corn",
    "croissant",
    "cupcake",
    "donut",
    "eggplant",
    "fortune-cookie",
    "french-fries",
    "fried-egg",
    "grapes",
    "hamburger",
    "hot-dog",
    "ice-cream",
    "ketchup",
    "meatball",
    "melon",
    "milk",
    "milkshake",
    "mustard",
    "orange",
    "pea",
    "peach",
    "pear",
    "piece-of-cake",
    "pineapple",
    "pizza",
    "popsicle",
    "pudding",
    "radish",
    "scallion",
    "soda",
    "strawberry",
    "sushi",
    "taco",
    "toast",
    "watermelon"
];

function generateMessage(){
    var hr = (new Date()).getHours();
    var text;
    if (hr >= 5 && hr <= 11){
        text = 'Good Morning';
    } else if (hr >= 12 && hr <= 6){
        text = 'Good Afternoon';
    } else {
        text = 'Good Evening';
    }
    document.getElementById('text').innerHTML = text;
}

function randomIcon(){
    var rng = Math.round(Math.random()*(icons.length-1));
    var icon = icons[rng];
    document.getElementById('icon').src = 'img/'+icon+'.svg';
}

randomIcon();
generateMessage();
