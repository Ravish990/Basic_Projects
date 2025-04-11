const containerEle = document.querySelector(".container");


const careers = ["Web Developer", "Problem Solver", "Open Source contributor"];

let idx = 0; 

let CharacterIdx = 0;

updateCareer();


function updateCareer() {
    CharacterIdx++;
    containerEle.innerHTML = `<h1>I am ${careers[idx].slice(0, 1) === ("O" || "a" || "e" || "i" || "u") ? "an" : "a"} ${careers[idx].slice(0,CharacterIdx)}</h1>`;
    if (CharacterIdx === careers[idx].length) {
        idx++;
        CharacterIdx = 0;
    }
    if (idx === careers.length) {
        idx = 0;
    }
    
    
    setTimeout(updateCareer, 300)

}
