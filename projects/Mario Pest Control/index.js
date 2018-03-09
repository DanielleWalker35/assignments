document.pricing.addEventListener("submit", multiplyNum);

function multiplyNum(event) {
    event.preventDefault();
    var x = document.getElementById("goombaNumber").valueAsNumber;
    var y = document.getElementById("bobombNumber").valueAsNumber;
    var z = document.getElementById("cheepcheepNumber").valueAsNumber;
    var p = document.getElementById("totalPrice");

    answer = ((x * 5) + (y * 7) + (z * 11));
    p.innerHTML = answer;
}