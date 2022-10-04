//Válogassuk ki egy új tömbbe a páros számokat
function kivalogatas(){
    let paros = [];

    for(let i=0; i<tomb.length; i++)
        if(tomb[i] % 2 == 0)
            paros.push(tomb[i]);

    let span = document.getElementById("parosak");
    for(let i=0; i<paros.length; i++)
        span.innerHTML += paros[i] + ", ";
}