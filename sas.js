const prompt = require('prompt-sync')();
let choix = "";

let candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "INP",
        age: 40,
        electeurs: []
    },
    {
        cin: "CD234567",
        nom: "Alaoui",
        prenom: "Yassine",
        partiPolitique: "PJD",
        age: 45,
        electeurs: []
    },
    {
        cin: "EF345678",
        nom: "Benali",
        prenom: "Sara",
        partiPolitique: "PI",
        age: 38,
        electeurs: []
    },
    {
        cin: "GH456789",
        nom: "El Idrissi",
        prenom: "Omar",
        partiPolitique: "RNI",
        age: 52,
        electeurs: ["h12345","ha12345"]
    },
    {
        cin: "IJ567890",
        nom: "Amrani",
        prenom: "Nadia",
        partiPolitique: "PAM",
        age: 41,
        electeurs: ["hk1234","b123456","hk12346","bE12345"]
    },
    {
        cin: "KL678901",
        nom: "Tazi",
        prenom: "Mehdi",
        partiPolitique: "USFP",
        age: 47,
        electeurs: ["hh1234","bb123456","hk12346","bE12345"]
    },
    {
        cin: "MN789012",
        nom: "Bennani",
        prenom: "Imane",
        partiPolitique: "MP",
        age: 35,
        electeurs: ["hh124","bb12","hk1","bE125","h12344555"]
    },
    {
        cin: "OP890123",
        nom: "Chraibi",
        prenom: "Ayoub",
        partiPolitique: "PPS",
        age: 43,
        electeurs: ["bb12","hk1","bE125","h12344555"]
    },
    {
        cin: "QR901234",
        nom: "Fassi",
        prenom: "Salma",
        partiPolitique: "PS",
        age: 39,
        electeurs: ["bb87654321","h12344555"]
    },
    {
        cin: "ST012345",
        nom: "Kabbaj",
        prenom: "Hamza",
        partiPolitique: "INP",
        age: 48,
        electeurs: []
    }
];




function ajouterCandidat(){
    
    let cin = prompt("CIN de candidat est :");
    for(let i = 0 ; i<candidats.length; i++){

        if (candidats[i].cin ===cin) {
            console.log("Cette CIN existe déjà");
    
            return;
        }
    }
    let candidat = {
        prenom :prompt("Entrer votre prénom : "),
        nom :prompt("Nom : "),
        age :Number(prompt("Entrer votre age ")),
        parti :prompt("Parti politique : "),
        electeurs:[]
    }
 
        candidats.push(candidat);
    console.log("Candidat ajouté avec succès.");
};
     
function ajouterPlusieursCandidats(){
    let nbr=Number(prompt("combier nbr de candida"));
    for (let i=0;i<nbr;i++){
        ajouterCandidat()
    }

} 
function aficherCandidats(listC){
    for(let i=0;i<listC.length;i++){
        console.log(listC[i]);
    }
    
}
function trierParNombreDeVote (){
                    let newlist=[]
                    for(let i of candidats){
                        newlist.push(i)
                           
                    }
                    for(let i=0;i<newlist.length ;i++){
                        for(let j=0;j<newlist.length-1;j++){
                            if (newlist[j].electeurs.length < newlist[j+1].electeurs.length) {
                                [newlist[j], newlist[j+1]] = [newlist[j+1], newlist[j]]
                            }
                        }
                    }
                    return newlist
            
}
function afficherListeCandidats(){
    console.log(`1.affichage tous les candidats:
            2.Trier par nombre de vote :
            3.Filter Politique
            0.quitter`)

        let choi=Number(prompt("choix: ?"));
        switch (choi){
            case 1 : 
                aficherCandidats()
                break
            case 2 : 
                    console.log("Candidats triés par nombre de vote : ");
                    let res=trierParNombreDeVote()
                    aficherCandidats(res)
                    break
            case 3 :
                let parti = prompt("Donner le Parti Politique : ");
                for (let i = 0; i < candidats.length; i++) {
                    if (candidats[i].partiPolitique === parti) {
                        console.log("CIN : " + candidats[i].cin);
                        console.log("Nom : " + candidats[i].nom);
                        console.log("Prénom : " + candidats[i].prenom);
                        console.log("Parti : " + candidats[i].partiPolitique);
                        console.log("Age : " + candidats[i].age);
                        console.log("Votes : " + candidats[i].electeurs.length);
                    }
                }
                break;
            default:
                console.log("Choix invalide");
        }
}


function voterPourCandidat(){
    let cn =prompt("Donner votre CIN : ")
    for(let i=0;i<candidats.length;i++){
        for (let j=0;j<candidats[i].electeurs.length;j++){
         if   (candidats[i].electeurs[j]=== cn){
            console.log( "cette electeur est deja existe ")
            return;

         }
        }
    }
    let cinCandidat =prompt("Donner CIN de candidat: ")
    
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin===cinCandidat){
            candidats[i].electeurs.push(cn);
            console.log("votre vote est succes  ");

    }

        }
}
function modifierCandidat(){
    
    let cin=prompt("donne cin pour modifier")
    for(let i of candidats){
        if(i.cin!==cin){
            console.log("no one with this cin")
            return
        }
    }
    let age=Number(prompt("donne age pour modifier"))
    let partierP=prompt("donne Partier pour modifier")
    for(let i of candidats){
        if(i.cin===cin){
            i.age=age
            i.partierP=partierP
            console.log("update is done")
        }
    }

}

function  supprimerCandidat(){
    let cin=prompt("entre candidat tu peux supprimer").toLocaleLowerCase()
    for(let i of candidats){
        if(i.cin.toLocaleLowerCase()===cin){
            
            let inde=candidats.indexOf(i)
            candidats.splice(inde,1)
            console.log("delete is done")
            return
        }

    }
    
        console.log("this condidat not exist")
    
}














function rechercherCandidat(){
    let nom=prompt("Entre name tu veux rechercher")
    for(let i of candidats){
        if (i.nom===nom){
            console.log(i);

        }
    }
}
function afficherStatistiques(){
    console.log(" le nombre total de candidats est : "+candidats.length)
    let somme=0
    for(let i=0;i<candidats.length;i++){

        somme+=candidats[i].electeurs.length
    }
    
    console.log("le nombre total de votes exprimés dans toute l'élection est :"+somme)
    let top3=trierParNombreDeVote()
    for(let i=0;i<3;i++){
        console.log(top3[i])
    }
    
        
    
}

while(choix !== "0"){
    console.log(`========================================
    MENU     ÉLECTIONS
========================================
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher un candidat par nom
8. Afficher les statistiques de l'élection
0. Quitter


========================================`)
    choix = prompt(`Votre choix:` );

        switch (choix) {
            case '1':
                ajouterCandidat();
                break;
            case '2':
                ajouterPlusieursCandidats();
                break;
            case '3':
                afficherListeCandidats();
                break;
            case '4':
                voterPourCandidat();
                break;
            case '5':
                modifierCandidat();
                break;
            case '6':
                supprimerCandidat();
                break;
            case '7':
                rechercherCandidat();
                break;
            case '8':
                afficherStatistiques();
                break;
            case '0':
                console.log('Au revoir !');
                break;
            default:
                console.log('Choix invalide, réessayez.');
        

    } 
}













































