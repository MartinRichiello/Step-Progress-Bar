//Get the elements we need
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const image = document.querySelector("img");


//Variable to count active elements
let currentActive = 1;

//Check if we clikced button "Next"
next.addEventListener("click", () => {

    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update()
})

//Check if we clikced button "Prev"
prev.addEventListener("click", () =>{

    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

//Checks the circles and which one of them should be updated
function update(){

    circles.forEach((circle, idx) => {

        if(idx < currentActive) {
            circle.classList.add('active')
        }else{
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + "%"


    //Disable buttons in case pf beginning and end
    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }


    /*if(currentActive === 1){
        image.src ="../public/images/egg.png"
    } else{
        image.src = ""
    }
`       */

    switch(currentActive){

        case 1:
            image.src ="../public/images/egg.png";
            break;
        
        case 2:
            image.src ="../public/images/littlechicken.png";
            break;
        
        case 3:
            image.src ="../public/images/hen.png";
            break;
        
        case 4:
            image.src="../public/images/mother-hen.png";
            break;
        

    }


}