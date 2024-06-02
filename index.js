const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatedEl = document.getElementById("generated-el")
let generatedEl2 = document.getElementById("generated-el2")

function generatePass() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    let randomNumber1 = Math.floor(Math.random() * characters.length)
    let randomNumber2 = Math.floor(Math.random() * characters.length)
    let randomNumber3 = Math.floor(Math.random() * characters.length)
    let randomNumber4 = Math.floor(Math.random() * characters.length)
    let randomNumber5 = Math.floor(Math.random() * characters.length)
    let randomNumber6 = Math.floor(Math.random() * characters.length)
    let randomNumber7 = Math.floor(Math.random() * characters.length)
    let randomNumber8 = Math.floor(Math.random() * characters.length)
    let randomNumber9 = Math.floor(Math.random() * characters.length)
    let randomNumber10 = Math.floor(Math.random() * characters.length)
    let randomNumber11 = Math.floor(Math.random() * characters.length)
    let randomNumber12 = Math.floor(Math.random() * characters.length)
    let randomNumber13 = Math.floor(Math.random() * characters.length)
    let randomNumber14 = Math.floor(Math.random() * characters.length)
    
    let randomNum = Math.floor(Math.random() * characters.length)
    let randomNum1 = Math.floor(Math.random() * characters.length)
    let randomNum2 = Math.floor(Math.random() * characters.length)
    let randomNum3 = Math.floor(Math.random() * characters.length)
    let randomNum4 = Math.floor(Math.random() * characters.length)
    let randomNum5 = Math.floor(Math.random() * characters.length)
    let randomNum6 = Math.floor(Math.random() * characters.length)
    let randomNum7 = Math.floor(Math.random() * characters.length)
    let randomNum8 = Math.floor(Math.random() * characters.length)
    let randomNum9 = Math.floor(Math.random() * characters.length)
    let randomNum10 = Math.floor(Math.random() * characters.length)
    let randomNum11 = Math.floor(Math.random() * characters.length)
    let randomNum12 = Math.floor(Math.random() * characters.length)
    let randomNum13 = Math.floor(Math.random() * characters.length)
    let randomNum14 = Math.floor(Math.random() * characters.length)
    
    generatedEl.textContent = characters[randomNumber] + characters[randomNumber1] + characters[randomNumber2] + characters[randomNumber3] + characters[randomNumber4] + characters[randomNumber5] + characters[randomNumber6] + characters[randomNumber7] + characters[randomNumber8] + characters[randomNumber9] + characters[randomNumber10] + characters[randomNumber11] + characters[randomNumber12] + characters[randomNumber13] + characters[randomNumber14] 
    generatedEl2.textContent = characters[randomNum] + characters[randomNum1] + characters[randomNum2] + characters[randomNum3] + characters[randomNum4] + characters[randomNum5] + characters[randomNum6] + characters[randomNum7] + characters[randomNum8] + characters[randomNum9] + characters[randomNum10] + characters[randomNum11] + characters[randomNum12] + characters[randomNum13] + characters[randomNum14]
}
