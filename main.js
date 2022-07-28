

computerguess = Math.floor(Math.random() * 5) + 1;
console.log(computerguess);

function  reveal(){
    alert("You are a cheat, the number is " + computerguess)
}


function show(){
    userguess = document.getElementById("inputId").value;
    b = document.getElementById("label2").textContent = "Your Guess is "+ userguess;
    if (computerguess > userguess){
        alert("Sorry, too low")
    } else if (computerguess < userguess){
        alert("Sorry, too high")
    } else{
        alert("Yuppie, You got it right!!!")
    }
}


function reset(){
    location.reload()
}
