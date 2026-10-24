let tarif1 = 1500
let tarif2 = 2500
let tarif3 = 2000
let nbremoins16 = 0
let nbreplus16 = 0
let nbreadulte = 0
let recettetotale = 0

// affichez age et prix par personne
for(age=11;age<=20;age++){
    if(age<16){
        console.log(`age est : ${age} , prix est : ${tarif1}`);
        nbremoins16++;
        recettetotale +=tarif1;
    }
    else if(age>=16 && age>=18){
        console.log("age est : "+age+ ", prix est : "+tarif3+ "fcfa");
        nbreplus16++;
        recettetotale +=tarif3;
    }
    else{
        console.log(`age est : ${age} , prix est : ${tarif2} fcfa`);
        nbreadulte++;
        recettetotale +=tarif2;
    }
} 
// recette totale 
console.log(` la recette est : ${recettetotale}`)

// le nombre de tikets 
console.log(`le nombre de billet 1500 : ${nbremoins16}`)
console.log(`le nombre de billet 2000 : ${nbreadulte}`)
console.log(`le nombre de billet 2500 : ${nbreplus16}`)