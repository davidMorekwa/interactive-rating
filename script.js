var rating = null;
function handleNum(e){
    rating = "You have selected "+e+" out of 5";
}
function submission(){
    document.getElementById("ratingText").innerHTML = rating;
    document.getElementById("card1").style.display = 'none';
    document.getElementById("thanks").style.display = 'flex';
}