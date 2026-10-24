let tarif1 = 1500
let tarif2 = 2500
let nbremoins16 = 0
let nbreplus16 = 0
let recettetotale = 0

// affichez age et prix pour chaque personne
for( age=11;age<=20;age++){
    if(age<16){
        console.log(`age est : ${age} , prix est : ${tarif1} fcfa`);
        nbremoins16++;
        recettetotale +=tarif1;
    }
    else{
        console.log(`age est : ${age} , prix est : ${tarif2} fcfa`);
        nbreplus16++;
        recettetotale +=tarif2;
    }
}
// la recette totale
console.log(`la recette totale est : ${recettetotale} fcfa`)

// le nombre de ticket par tarif
console.log(`lenombre de billet de 1500 : ${nbremoins16}`)
console.log(`lenombre de billet de 2500 : ${nbreplus16}`)

