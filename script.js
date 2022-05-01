var rating = null;
function handleNum(e){
    rating = "You have selected "+e+" out of 5";
    if(e == 1){
        document.getElementById("numValue1").style.backgroundColor = 'hsl(217, 12%, 63%)';
        document.getElementById("numValue1").style.color = 'white';
    } else {
        document.getElementById("numValue1").style.backgroundColor = 'hsl(215, 18%, 21%)';
        document.getElementById("numValue1").style.color = 'hsl(217, 12%, 63%)';
    }
    if(e == 2){
        document.getElementById("numValue2").style.backgroundColor = 'hsl(217, 12%, 63%)';
        document.getElementById("numValue2").style.color = 'white';
    } else {
        document.getElementById("numValue2").style.backgroundColor = 'hsl(215, 18%, 21%)';
        document.getElementById("numValue2").style.color = 'hsl(217, 12%, 63%)';
    }
    if(e == 3){
        document.getElementById("numValue3").style.backgroundColor = 'hsl(217, 12%, 63%)';
        document.getElementById("numValue3").style.color = 'white';
    } else {
        document.getElementById("numValue3").style.backgroundColor = 'hsl(215, 18%, 21%)';
        document.getElementById("numValue3").style.color = 'hsl(217, 12%, 63%)';
    }
    if(e == 4){
        document.getElementById("numValue4").style.backgroundColor = 'hsl(217, 12%, 63%)';
        document.getElementById("numValue4").style.color = 'white';
    } else {
        document.getElementById("numValue4").style.backgroundColor = 'hsl(215, 18%, 21%)';
        document.getElementById("numValue4").style.color = 'hsl(217, 12%, 63%)';
    }
    if(e == 5){
        document.getElementById("numValue5").style.backgroundColor = 'hsl(217, 12%, 63%)';
        document.getElementById("numValue5").style.color = 'white';
    } else {
        document.getElementById("numValue5").style.backgroundColor = 'hsl(215, 18%, 21%)';
        document.getElementById("numValue5").style.color = 'hsl(217, 12%, 63%)';
    }
}
function submission(){
    document.getElementById("ratingText").innerHTML = rating;
    document.getElementById("card1").style.display = 'none';
    document.getElementById("thanks").style.display = 'flex';
}