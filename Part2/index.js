let cardValue = document.getElementById("cardId").value;

document.getElementById("setHand").addEventListener("click", setCard);

function setCard(){
    let cardValue = document.getElementById("cardId").value;
    let card = document.getElementById(cardValue);
    let color = document.getElementById("cardStyle").value;
    console.log(color);
    card.style.color = color;
}
document.getElementById("reset").addEventListener("click", function(){
    let cards = Array.from(document.querySelectorAll("section"));
    for (var i = 0; i < cards.length; i++){
        cards[i].style.color = "grey";
    }
})