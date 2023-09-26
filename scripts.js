// Celeste Ramirez

//ID Section 
//For this section, use JS to select the element here by its ID and add to the innerHTML a span with a class of "tan" and text inside that span that says "This is new tan text"
document.getElementById("firstPara").innerHTML += '<span class =\"tan\"> This is new tan text<span>';

//tag Name Section 
//get all images change to 250 px
let images = document .getElementsByTagName("img");

console.log(images);

for (let image of images){
    images.width = "250";
}

//Class NAme sections
set med-bluw spans to #3c5e73
set light bluw spans to :7c9EA6

let medBlueSpans = document.getElementsByClassName("med-blue");

let ltBlueSpans = document.getElementsByClassName("light blue");

for (let span of ltBlueSpans){
    span.computedStyleMap.color ="#7c9EA6";
}

for (let span of medBluwSpanss){
    span.style.color = "#3c5E73"
}