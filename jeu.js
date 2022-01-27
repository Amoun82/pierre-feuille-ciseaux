/* variable de test pour empecher les boublons dans l'affichage et pour l'affichage des scores */
let testAffichage = false ;
const affichage = document.createElement('p') ;
const score = document.createElement('p') ;
let testgagne = "" ;
let testscore = false ;
let gagne = 0 ;
let perdu = 0 ;

console.log(`vérifier le test d'affichage du premier <p> : ${testAffichage}`) ;
console.log(`vérifier le test d'affichage du score <p> : ${testscore}`) ;



/* fonction permant l'affichage et la gestion du joueur */
/* valeur pierre : 1 */
/* valeur feuille : 2 */
/* valeur ciseaux : 3 */
function jouer(element)
{
    let joueur = element ;
    let ordinateur = (getRandomIntInclusive(1,3)) ;

    const text = document.getElementById('resultat') ;

    console.log(`Joueur : ${joueur}`) ;
    console.log(`Ordinateur : ${ordinateur}`) ;

    /* text pour faire apparaitre le resultat du jeu */
    if( testAffichage == false)
    {
        testAffichage = true ;
        affichage.classList.add("egale") ;
        text.appendChild(affichage) ;
        console.log(affichage) ;
    }

    if( joueur == 1 && ordinateur == 1 )
    {
        testgagne = "egale" ;
        remplacerNomClass(testgagne) ;
        console.log("égalité") ;
        affichage.innerHTML = 'joueur et ordinateur ont fait la pierre<br>égalité' ;
    }
    else if(joueur == 1 && ordinateur == 2 )
    {
        testgagne = "perdu" ;
        perdu ++ ;
        remplacerNomClass(testgagne) ;
        affichagePerdu("pierre","feuille") ;
    }
    else if(joueur == 1 && ordinateur == 3)
    {
        testgagne = "gagne" ;
        gagne ++ ;
        remplacerNomClass(testgagne) ;
        affichageGagne("pierre","ciseaux") ;
    }
    else if(joueur == 2 && ordinateur == 1)
    {
        testgagne = "gagne" ;
        gagne ++ ;
        remplacerNomClass(testgagne) ;
        affichageGagne("feuille","pierre") ;
    }
    else if(joueur == 2 && ordinateur == 2)
    {
        testgagne = "egale" ;
        remplacerNomClass(testgagne) ;
        console.log("égalité") ;
        affichage.innerHTML = "joueur et ordinateur ont fait la feuille<br>égalité" ;
    }
    else if(joueur == 2 && ordinateur == 3)
    {
        testgagne = "perdu" ;
        perdu ++ ;
        remplacerNomClass(testgagne) ;
        affichagePerdu("feuille","ciseaux") ;
    }
    else if(joueur == 3 && ordinateur == 1)
    {
        testgagne = "perdu" ;
        perdu ++ ;
        remplacerNomClass(testgagne) ;
        affichagePerdu("ciseaux","pierre") ;
    }
    else if(joueur == 3 && ordinateur == 2)
    {
        testgagne = "gagne" ;
        gagne ++ ;
        remplacerNomClass(testgagne) ;
        affichageGagne("ciseaux","feuille")
    }
    else if(joueur == 3 && ordinateur == 3)
    {
        testgagne = "egale" ;
        remplacerNomClass(testgagne) ;
        console.log("égalité") ;
        affichage.innerHTML = "joueur et ordinateur ont fait les ciseaux<br>égalité" ;

    }
    
    /* text pour faire apparaitre le score */
    if( testscore == false)
    {
        testscore = true ;
        score.classList.add("score") ;
        text.appendChild(score) ;
        console.log(score) ;
    }

    console.log(gagne) ;
    console.log(perdu) ;

    score.innerHTML = `gagnée : ${gagne} | perdu : ${perdu}` ;
}

/* pour l'affichage du gagné */
function affichageGagne(valeurJoueur, valeurOrdinateur)
{
    affichage.innerHTML = `le joueur a fait : ${valeurJoueur}<br>l'odinateur a fait : ${valeurOrdinateur}<br>le joueur a gagné et l'ordinateur a perdu` ;
}

/* pour l'affichage du perdu */
function affichagePerdu(valeurJoueur,valeurOrdinateur)
{
    affichage.innerHTML = `le joueur a fait : ${valeurJoueur}<br>l'ordinateur a fait : ${valeurOrdinateur}<br>le joueur a perdu et l'ordinateur a gagné` ;
}

/* fonction testant et remplacant la class pour voir l'égalité, perdu ou gagné */
function remplacerNomClass(letest)
{

    if(affichage.classList.contains("egale") == true)
    {
        switch(letest)
        {
            case "gagne" :
                affichage.classList.replace("egale","gagne") ;
                break;
            case "perdu" :
                affichage.classList.replace("egale","perdu") ;
                break;
            default:
                console.log("on ne change pas la class") ;
        }
    }
    else if(affichage.classList.contains("gagne") == true)
    {
        switch(letest)
        {
            case "egale" :
                affichage.classList.replace("gagne","egale") ;
                break;
            case "perdu" :
                affichage.classList.replace("gagne","perdu") ;
                break;
            default:
                console.log("on ne change pas la class") ;
        }
    }
    else if(affichage.classList.contains("perdu") == true)
    {
        switch(letest)
        {
            case "egale" :
                affichage.classList.replace("perdu","egale") ;
                break;
            case "gagne" :
                affichage.classList.replace("perdu","gagne") ;
                break;
            default:
                console.log("on ne change pas la class") ;
        }
    }
}

/* le resultat de l'ordinateur */
function getRandomIntInclusive(min, max)
{
    return Math.floor(Math.random() * (max - min +1)) + min;
}