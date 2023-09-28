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
// set med-blue spans to #3c5e73
// set light blue spans to :7c9EA6

let medBlueSpans = document.getElementsByClassName("med-blue");

let ltBlueSpans = document.getElementsByClassName("light blue");

for (let span of ltBlueSpans){
    span.computedStyleMap.color ="#7c9EA6";
}

for (let span of medBlueSpanss){
    span.style.color = "#3c5E73"
}

//selecting group with thr CSS selector
let colors = ["#283040","#3C5E73","#7C9EA6","#D9BCA3","#F2DCC9"];

let svgs = document.querySelectorAll("#svgs svgs");

// console.log(svgs);
//iterate trough te svg collection and csngr color of each
for (let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors [i];
})
//individual element with css selector\
document.querySelector(".bold").style.color = "#7C9EA6";

document.querySelector (".content_list li:fort-Of Type").textContent =" this is a new list item";

docuemnt.querySelectorAll(".content_list li")[2]. innerHTML += "<strong>Prof. Barrent </strong">;

document.querySelector("remove a").removeAttribute("hidden");