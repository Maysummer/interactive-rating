var numContainer = document.getElementById("rating");
var numbers = document.getElementsByClassName("number");
var submit = document.querySelector(".submit");

submit.addEventListener('click', thankYou);

for (let i = 0; i < numbers.length; i++){
    // console.log(ratings[i]);
    numbers[i].addEventListener('click', rate);

    function rate(e){
        var current = document.getElementsByClassName("active");
        console.log(current);
        // current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        var rating = e.target.innerHTML;
        console.log(rating);
        // rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
        // rating.style.color = 'hsl(0, 0%, 100%)';
        // console.log(rating[i]);
        var num = document.querySelector('#selectedNumber');
        // console.log(num);
        num.innerHTML = rating;
    }
}

//change screens when submit is clicked
function thankYou(e){
    var newDesign = document.querySelector('.thanks');
    newDesign.style.display = 'flex';

    var oldDesign = document.querySelector('.mainRating');
    oldDesign.style.display = 'none';
}

