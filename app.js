const allBtn = document.querySelectorAll(".btn")
const screen = document.getElementById("screen")
var placeHolder =  `${''}`;
const numBtn =document.querySelectorAll(".btn-grey")
///////////////BLCOK OF CODE TO REGISTER THE VALUE OF EACH BUTTON EVENT/////////////////////////////////////////

allBtn.forEach((pressedBtn)=>{
    pressedBtn.addEventListener("click", ()=>{
        placeHolder+=pressedBtn.textContent
        screen.value =placeHolder
        
        })
})
//////////////////////////////////////////BLCOK OF CODE FOR THE EQUAL BUTTON ////////////////////////////////////


const equal = document.getElementById("equal")

function equalsTo(){
    let answer =eval(placeHolder)
    screen.value= answer 
    placeHolder=answer
    
}

equal.addEventListener("click", equalsTo)


////////////////BLOCK OF CODE FOR CLEARING CALCULATED VALUE /////////////////////////////////////////////////////
const clear = document.getElementById("clear")

function clearFunc(){
    placeHolder = `${''}`
    screen.value=placeHolder
}

clear.addEventListener("click", clearFunc)