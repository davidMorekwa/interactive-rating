var rate = null;
function handleNum(e){
    rate = "You have selected "+e+ " out of 5";

}
function submission(){
    document.getElementById("ratingText").innerHTML = rate;
    document.getElementById("card1").style.display = "none";
    document.getElementById("thanks").style.display = "flex";
}