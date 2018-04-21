var homeScreen = document.getElementById('first');
var screenA = document.getElementById('q1');
var screenB = document.getElementById('q2');
var screenC = document.getElementById('q3');
var screenD = document.getElementById('q4');
var screenE = document.getElementById('q5');
var screenF = document.getElementById('q6');
var screenG = document.getElementById('q7');
var screenH = document.getElementById('q8');
var screenI = document.getElementById("q9");
var screenJ = document.getElementById('q10');

var home = document.getElementById('home');
var result = document.getElementById('result');
var totalPoints = 0;

var b0 = document.getElementById('b0');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var b6 = document.getElementById('b6');
var b7 = document.getElementById('b7');
var b8 = document.getElementById('b8');
var b9 = document.getElementById('b9');
var b10 = document.getElementById('submit');

b0.addEventListener('click', function() {
  homeScreen.classList.add('hidden');
  screenA.classList.remove('hidden');
});

b1.addEventListener('click', function() {
  screenA.classList.add('hidden');
  screenB.classList.remove('hidden');
});

b2.addEventListener('click', function() {
  screenB.classList.add('hidden');
  screenC.classList.remove('hidden');
});

b3.addEventListener('click', function() {
  screenC.classList.add('hidden');
  screenD.classList.remove('hidden');
});

b4.addEventListener('click', function() {
  screenD.classList.add('hidden');
  screenE.classList.remove('hidden');
});

b5.addEventListener('click', function() {
  screenE.classList.add('hidden');
  screenF.classList.remove('hidden');
});

b6.addEventListener('click', function() {
  screenF.classList.add('hidden');
  screenG.classList.remove('hidden');
});

b7.addEventListener('click', function() {
  screenG.classList.add('hidden');
  screenH.classList.remove('hidden');
});

b8.addEventListener('click', function() {
  screenH.classList.add('hidden');
  screenI.classList.remove('hidden');
});

function answered(){
  document.getElementById("b3").style.display = "block";
}

document.getElementById('f-option').addEventListener('click', answered);
document.getElementById('s-option').addEventListener('click', answered);
document.getElementById('t-option').addEventListener('click', answered);
document.getElementById('l-option').addEventListener('click', answered);
document.getElementById('g-option').addEventListener('click', answered);

function bckBtn(){
   window.history.back();
}

function info(){
    var slider = document.getElementById("myRange").value;

    document.getElementById("b1").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer').textContent = "Never";
      document.getElementById('description').textContent = "Vegan";
      totalPoints +=  1;
    }
    else if (slider <= 40) {
      document.getElementById('answer').textContent = "Infrequently";
      document.getElementById('description').textContent = "Vegetarian (Occasional eggs and dairy. No meat.)";
      totalPoints +=  1;
    }
    else if (slider <= 60) {
      document.getElementById('answer').textContent = "Occasionally";
      document.getElementById('description').textContent ="Mostly veggies. Occasional meat, dairy, eggs." ;
      totalPoints +=  2.1;
    }
    else if (slider <= 80) {
      document.getElementById('answer').textContent = "Often";
      document.getElementById('description').textContent = "Meat once or twice a week. Eggs and dairy daily.";
      totalPoints +=  3.75;
    }
    else {
      document.getElementById('answer').textContent = "Very Often";
      document.getElementById('description').textContent = "Meat daily";
      totalPoints += 5.8;
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}

document.getElementById('myRange').addEventListener('input', info);
document.getElementById('bck').addEventListener('click', bckBtn);

function info2(){
    var slider = document.getElementById("myRange2").value;

    document.getElementById("b2").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer2').textContent = "Never";
      document.getElementById('description2').textContent = "Never means never..";
    }
    else if (slider <= 40) {
      document.getElementById('answer2').textContent = "Rarely";
      document.getElementById('description2').textContent = "once a month";
    }
    else if (slider <= 60) {
      document.getElementById('answer2').textContent = "Occasionally";
      document.getElementById('description2').textContent = "once a week";
    }
    else if (slider <= 80) {
      document.getElementById('answer2').textContent = "Often";
      document.getElementById('description2').textContent = "2 - 4 times a week";
    }
    else {
      document.getElementById('answer2').textContent = "Always";
      document.getElementById('description2').textContent = "DAILY";
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}

document.getElementById('myRange2').addEventListener('input', info2);

function info3(){
    var slider = document.getElementById("myRange3").value;

    document.getElementById("b3").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer3').textContent = "Never";
      document.getElementById('description3').textContent = "Never means never..";
    }
    else if (slider <= 40) {
      document.getElementById('answer3').textContent = "Rarely";
      document.getElementById('description3').textContent = "once a month";
    }
    else if (slider <= 60) {
      document.getElementById('answer3').textContent = "Occasionally";
      document.getElementById('description3').textContent = "once a week";
    }
    else if (slider <= 80) {
      document.getElementById('answer3').textContent = "Often";
      document.getElementById('description3').textContent = "2 - 4 times a week";
    }
    else {
      document.getElementById('answer3').textContent = "Always";
      document.getElementById('description3').textContent = "DAILY";
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}


function info4(){
    var slider = document.getElementById("myRange4").value;

    document.getElementById("b4").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer4').textContent = "Never";
      document.getElementById('description4').textContent = "Never means never..";
    }
    else if (slider <= 40) {
      document.getElementById('answer4').textContent = "Rarely";
      document.getElementById('description4').textContent = "once a month";
    }
    else if (slider <= 60) {
      document.getElementById('answer4').textContent = "Occasionally";
      document.getElementById('description4').textContent = "once a week";
    }
    else if (slider <= 80) {
      document.getElementById('answer4').textContent = "Often";
      document.getElementById('description4').textContent = "2 - 4 times a week";
    }
    else {
      document.getElementById('answer4').textContent = "Always";
      document.getElementById('description4').textContent = "DAILY";
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}

document.getElementById('myRange4').addEventListener('input', info4);

function info5(){
    var slider = document.getElementById("myRange5").value;

    document.getElementById("b5").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer5').textContent = "Never";
      document.getElementById('description5').textContent = "Never means never..";
    }
    else if (slider <= 40) {
      document.getElementById('answer5').textContent = "Rarely";
      document.getElementById('description5').textContent = "once a month";
    }
    else if (slider <= 60) {
      document.getElementById('answer5').textContent = "Occasionally";
      document.getElementById('description5').textContent = "once a week";
    }
    else if (slider <= 80) {
      document.getElementById('answer5').textContent = "Often";
      document.getElementById('description5').textContent = "2 - 4 times a week";
    }
    else {
      document.getElementById('answer5').textContent = "Always";
      document.getElementById('description5').textContent = "DAILY";
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}

document.getElementById('myRange5').addEventListener('input', info5);

function info6(){
    var slider = document.getElementById("myRange6").value;

    document.getElementById("b6").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer6').textContent = "Never";
      document.getElementById('description6').textContent = "Never means never..";
    }
    else if (slider <= 40) {
      document.getElementById('answer6').textContent = "Rarely";
      document.getElementById('description6').textContent = "once a month";
    }
    else if (slider <= 60) {
      document.getElementById('answer6').textContent = "Occasionally";
      document.getElementById('description6').textContent = "once a week";
    }
    else if (slider <= 80) {
      document.getElementById('answer6').textContent = "Often";
      document.getElementById('description6').textContent = "2 - 4 times a week";
    }
    else {
      document.getElementById('answer6').textContent = "Always";
      document.getElementById('description6').textContent = "DAILY";
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}

document.getElementById('myRange6').addEventListener('input', info6);

function info7(){
    var slider = document.getElementById("myRange7").value;

    document.getElementById("b7").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer7').textContent = "Never";
      document.getElementById('description7').textContent = "Never means never..";
    }
    else if (slider <= 40) {
      document.getElementById('answer7').textContent = "Rarely";
      document.getElementById('description7').textContent = "once a month";
    }
    else if (slider <= 60) {
      document.getElementById('answer7').textContent = "Occasionally";
      document.getElementById('description7').textContent = "once a week";
    }
    else if (slider <= 80) {
      document.getElementById('answer7').textContent = "Often";
      document.getElementById('description7').textContent = "2 - 4 times a week";
    }
    else {
      document.getElementById('answer7').textContent = "Always";
      document.getElementById('description7').textContent = "DAILY";
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}

document.getElementById('myRange7').addEventListener('input', info7);

function info8(){
    var slider = document.getElementById("myRange8").value;

    document.getElementById("b8").style.display = "block";

    if (slider <= 20) {
      document.getElementById('answer8').textContent = "Never";
      document.getElementById('description8').textContent = "Never means never..";
    }
    else if (slider <= 40) {
      document.getElementById('answer8').textContent = "Rarely";
      document.getElementById('description8').textContent = "once a month";
    }
    else if (slider <= 60) {
      document.getElementById('answer8').textContent = "Occasionally";
      document.getElementById('description8').textContent = "once a week";
    }
    else if (slider <= 80) {
      document.getElementById('answer8').textContent = "Often";
      document.getElementById('description8').textContent = "2 - 4 times a week";
    }
    else {
      document.getElementById('answer8').textContent = "Always";
      document.getElementById('description8').textContent = "DAILY";
    }
// document.getElementById("myRange").slider.style.backgroundColor = "#bab500";
}

document.getElementById('myRange8').addEventListener('input', info8);

function info9(){
    document.getElementById("b3").style.display = "block";
}
