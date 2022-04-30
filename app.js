var calculate = document.getElementById("calculate");
var back = document.getElementById("back");

calculate.addEventListener("click", calc);


function calc(){
    var sem1 = Number(document.getElementById("sem1").value);
    var sem2 = Number(document.getElementById("sem2").value);
    var sem3 = Number(document.getElementById("sem3").value);
    var sem4 = Number(document.getElementById("sem4").value);
    var sem5 = Number(document.getElementById("sem5").value);
    var sem6 = Number(document.getElementById("sem6").value);
    var sem7 = Number(document.getElementById("sem7").value);
    var sem8 = Number(document.getElementById("sem8").value);


    var pop_up = document.getElementById("pop_up");
    var pop_up_result = document.getElementById("result");

    
    var semister1 = (sem1 * 5) / 100;
    var semister2 = (sem2 * 5) / 100;
    var semister3 = (sem3 * 5) / 100;
    var semister4 = (sem4 * 10) / 100;
    var semister5 = (sem5 * 15) / 100;
    var semister6 = (sem6 * 20) / 100;
    var semister7 = (sem7 * 25) / 100;
    var semister8 = (sem8 * 15) / 100;


    var result = semister1 + semister2 + semister3 + semister4 + semister5 + semister6 + semister7 + semister8

    pop_up.style.opacity = "1";
    pop_up.style.zIndex = "1";
    pop_up.style.transform = "scale(1)"
    pop_up_result.innerHTML = `${result}`;
}


back.addEventListener("click", () => {
    var pop_up = document.getElementById("pop_up");
    pop_up.style.opacity = "1";
    pop_up.style.zIndex = "-1";
    pop_up.style.transform = "scale(0)";
})