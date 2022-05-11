var numContainer = document.getElementById("rating");
var numbers = document.getElementsByClassName("number");
var submit = document.querySelector(".submit");

submit.addEventListener('click', thankYou);

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', rate);

    function rate(e){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        
        var before1 = document.getElementsByClassName('before');
        before1[0].className = before1[0].className.replace(" before", "");

        e.target.className += " active";
        e.target.previousElementSibling.className += ' before'

        var rating = e.target.innerHTML;
        var num = document.querySelector('#selectedNumber');
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

