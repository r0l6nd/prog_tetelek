// Hány db 70 vagy annál nagyobb szám van a tömbben?
function megszamol(){
    let db = 0;

    for(let i=0; i<tomb.length; i++)
        if(tomb[i] >= 70)
            db++;
    
    document.getElementById("db").innerHTML = db + " db";
}