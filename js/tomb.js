var tomb = [99, 18, 25, 3, 8, 110, 37, 26, 112, -2];

function tombKiir(){
    let span = document.getElementById("tomb-elemei");
    span.innerHTML = "";

    for(let i=0; i<tomb.length; i++)
        span.innerHTML += tomb[i] + ", ";
}