//array of images
let RickAstley = [
    "https://m.media-amazon.com/images/M/MV5BOTNmZGU0MDYtNDE4Zi00NTE4LTg0ZGEtYzBjOWNjOTkwMzdlXkEyXkFqcGdeQXVyMTg3Nzg5ODY@._V1_.jpg",
    "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1",
    "https://www.giantfreakinrobot.com/wp-content/uploads/2022/08/rick-astley.jpg",
    "https://people.com/thmb/-p-5Xbe03Gr_B8b7I1uN1b_16AE=/1000x1000/smart/filters:no_upscale():focal(719x309:721x311)/rick-astley-recreation-never-gonna-give-you-up-081922-1-909d277568c34a599c27fa7503ce7a4c.jpg",
    "https://static.wikia.nocookie.net/agk/images/1/18/21499dba0eec71730fdaa0534a82e163.jpg/revision/latest?cb=20210511185219",
	"https://i1.sndcdn.com/artworks-000094489636-qzznk3-t500x500.jpg"
];

//array of lyrics 
let neverGonnaGive = [
    "We're no strangers to love",
    "You know the rules and so do I (do I)",
    "A full commitment's what I'm thinking of",
    "You wouldn't get this from any other guy",
    "I just wanna tell you how I'm feeling",
    "Gotta make you understand",
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you"
];

let colors = [
	"#FF1493",
	"#FF00FF",
	"#FF69B4",
	"#FFB6C1",
	"#FF00FF",
	"#DB7093",
	"#FFC0CB",

];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * RickAstley.length)
    imgs[i].src = RickAstley[randomImg]
}
//change all h1 tags
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Rick Rolllll";
}
//change all p tags to a line from the lyrics which is stored in an array
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = neverGonnaGive[i%12];
}

//replace the href in all a tags to this video
const a = document.getElementsByTagName("a");
for (let i = 0; i < a.length; i++){
    a[i].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

//set the default value of all inputs to this
const inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++){
    inputs[i].value += "Rick Astley";
}

//change the html lang attribute to spanish
const html = document.getElementsByTagName("html");
for (let i = 0; i < html.length; i++){
    html[i].lang = "es";
}

//change all divs background color to a shade of pink
const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++){
    divs[i].style.backgroundColor = colors[i%7];
}

//change all span text to have 2 smiley faces at the end of it 
const spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++){
    spans[i].innerText += " :) :)";
}