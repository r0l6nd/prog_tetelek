// Van-e negatív szám a tömbben?
function eldontes(){
    let van = false;

    for(let i=0; i<tomb.length && !van; i++)
        if(tomb[i]<0)
            van = true;

    document.getElementById("eldont").innerHTML = van?"Van ilyen elem":"Nincs ilyen elem";
}