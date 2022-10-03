function maxKivalasztas(){
    let max = tomb[0];

    for(let i=1; i<tomb.length; i++)
        if(tomb[i] > max)
            max = tomb[i];

    document.getElementById("max").innerHTML = max;
}

function kivalasztas(szam){
    let index = -1;

    for(let i=0; i<tomb.length && index==-1; i++)
        if(tomb[i] == szam)
            index = i;

    document.getElementById("index").innerHTML = index;
}