var tomb = [99, 18, 25, 3, 8, 110, 37, 26, 112];

function tombKiir(){
    let span = document.getElementById("tomb-elemei");

    for(let i=0; i<tomb.length; i++)
        span.innerHTML += tomb[i] + ", ";
}