//Növekvő sorrendbe rendezés
function rendez(){
    //tomb.sort();
    // Egyszerű cserés rendezés
    
    // Buborék rendezés
    for(let i=0; i<tomb.length-1; i++)
        for(let j=i+1; j<tomb.length; j++)
            if(tomb[j] < tomb[i])
            {
                let csere = tomb[i];
                tomb[i] = tomb[j];
                tomb[j] = csere;
            }
}