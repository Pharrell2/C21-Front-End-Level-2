let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ___omdat dat word gezegd___________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype _integer___________ waarom? ___het zorgt ervoor dat de waarde behoud maar alleen op de achtergrond_________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? __het laat je de variablen niet opnieuw gebruiken__________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _regel 17_____________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P_parameter__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _parameter___________ de waarde noemen we een Attribute__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _alert______ op het scherm met de tekst vul je naam in hier, echt doen_________ deze tekst staan op regel _regel 17______ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _nee__________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _er wordt iets verborgen__regel23________________ en waar wordt deze in je HTML aangeroepen? ____________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _ regel 23__________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _dit laat meedere id's bestaan in het document en met het eerste opgegeven id zet hij in de broncode_________________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _er wordt iets laten zien dus een verstopte foto komt terug__________________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen __regel 32____________ en wanneer wordt deze aangeroepen _als je een getal erin typt__________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _van het getal_____________ en waar komt de waarde van getal vandaan? _mtint___________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _neemt een string als parameter die hetzelfde is met de CSS selector dus het is geschikt om een element te zoeken of te selecteren__________________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _word het antwoord gegeven van de som____________________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ____andere optel som_________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen __regel 38____________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ___de kleur___________ en waar komt de waarde van kleur vandaan? __style.color__________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? __style.fontsize__________ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? __de fontsize groote word bepaald___________________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven je moet je naam zetten__________ en wanneer gebeurt dat __als je op de klik op mij button klikt_______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _je krijgt ee melding maar met je eigen naam__________________ vul je antwoord in op de lijn.