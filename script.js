if (document.querySelector(".container")) {  
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");
    let buttonOn = false;
    const invert = ()=> {
        alert("hii")
        document.body.style.filer =  "invert(1) hue-rotate(180deg)";
        media.forEach((mediaItem) => {
            mediaItem.style.filer = "inver(1) hue-rotate(180deg)";
        })
    }
    button.addEventListener("click", () => {
        if(!buttonOn) {
            buttonOn = true;
            button.style.animation = "transformToBlue 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveRight 0.5s ease-in-out 0s forwards";
            chrome.tabs.executeScript({
                file: 'On.js'
            })
        } else {
            buttonOn = false;
            button.style.animation = "transformToYellow 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveLeft 0.5s ease-in-out 0s forwards";
            chrome.tabs.executeScript({
                file: 'Off.js'
            })
        }
    })
}