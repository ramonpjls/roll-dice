
function draw(){ 
    let num = document.getElementById("diceFace").value;
    let result = Math.ceil(Math.random()*num);
    function displayDice(result){
        document.getElementById("diceOne").innerHTML = result;
    } 
    drawOne();
    /*console.log(num);
    console.log(result);*/
    return displayDice(result);
    }

function drawOne(){ 
    let num = document.getElementById("diceFace").value;
    let resultOne = Math.ceil(Math.random()*num);
    function displayDice(resultOne){
        document.getElementById("diceTwo").innerHTML = resultOne;
        } 
        /*console.log(num);
        console.log(resultOne);*/
    return displayDice(resultOne);
    }
    
    


document.getElementById("toDraw").addEventListener("click", draw);