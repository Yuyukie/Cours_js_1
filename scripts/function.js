function afficherResultat(score, nbMotsProposes) {
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nbMotsProposes}` 
    spanScore.innerText = affichageScore
}


function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}


function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}


function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error("Le nom est trop court.")
    }  
}


function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide.")
    }
    
}

function afficherMessageErreur(message) {
    
    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"
        
        popup.append(spanErreurMessage)
    }
    
    spanErreurMessage.innerText = message
}


function gererFormulaire(scoreEmail) {
    try {
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        validerNom(nom)
    
        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        validerEmail(email)
        afficherMessageErreur("")
        afficherEmail(nom, email, scoreEmail)

    } catch(erreur) {
        afficherMessageErreur(erreur.message)
    }
    
}


function lancerJeu() {
    initAddEventListenerPopup()
    let score = 0
    let i = 0
    let listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    afficherProposition(listeProposition[i])

    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listeProposition[i]) {
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value = ''
        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeProposition[i])
        }
    })

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {


            if (event.target.value === "1") {
                listeProposition = listeMots
            } else {

                listeProposition = listePhrases
            }

            afficherProposition(listeProposition[i])
        })
    }


    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)
    })

    afficherResultat(score, i)
}
// Exercice 1 Decouvrir les conditions "if else" "switch case"

/* 
// code fonctionel mais peu pratique

  if (user_word === computer_word) {
        console.log ("Bravo, vous avez correctement tapé le mot")
    }  else {
            if (user_word === "Gredin") {
                console.log("Restez correct !")
            } else {
                if (user_word === "Mécréant") {
                    console.log("Restez correct !")
                } else {
                    if (user_word === "Vilain") {
                        console.log("Soyez gentil !")
                    } else {
                        console.log ("Zut, le mot n'est pas correct")
                    }
            }
        }
    }

// code fonctionel plus pratique que le précédent

    switch (user_word) {
    case computer_word:
        console.log("Bravo ! ")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}
*/

// Exercice 2 Utilisation du prompt

/*
    let user_word = prompt("Entrez le mot suivant :" + list_word[0])
    console.log(user_word)

    if (user_word === list_word[0]) {
        console.log("Bravo vous marqué 1 point")
        score ++
        console.log("Votre score :" + score)
    } else {
        console.log("essaye encore !")
    }

    user_word = prompt("Entrez le mot suivant :" + list_word[1]) // la variable user-word etant deja declaré il n'est pas nécessaire de remettre let
    console.log(user_word)

    if (user_word === list_word[1]) {
        console.log("Bravo vous marqué 1 point")
        score ++
        console.log("Votre score :" + score)
    } else {
        console.log("essaye encore !")
    }

    user_word = prompt("Entrez le mot suivant :" + list_word[2])
    console.log(user_word)

    if (user_word === list_word[2]) {
        console.log("Bravo vous marqué 1 point")
        score ++
        console.log("Votre score :" + score)
    } else {
        console.log("essaye encore !")
    }
*/

// Exercice 3 Decouverte des boucles "For" et "While"

/*
const listeMots = ['Bonjour', 'Salut', 'Coucou']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']

let Score = 0

let userChoice = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
while (userChoice !=="mots" && userChoice !=="phrases") {
    userChoice = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if(userChoice === "mots") {
    for  (let i = 0; i < listWord.lenght; i++) {
        let userWord = prompt("Entrez le mot suivant :" + listWord[i])
        if (userWord === listWord[i]) {
            Score++
        }  
     }     
    console.log("Votre score est de " + Score + "sur " + listWord.lenght)
   
} else {
    for  (let i = 0; i < listSentence.lenght; i++){
        let userWord = prompt("Entrez le mot suivant :" + listSentence[i])
        if (userWord === listSentence[i]) {
            Score++
        }  
    }  
    console.log("Votre score est de " + Score + "sur " + listSentence.lenght)    
}
*/

// Exercice 4 Rajouter les fonctions

/*
const listWord = ["Bonjour", "Salut", "Coucou"]
const listSentence = ["Bonjour, comment allez-vous ?", "Salut, ça va ?", "Coucou, ça va ?"]

function giveScore (score, numberWord ){
    console.log ("Votre score est de" + score + "sur" + numberWord)
}

function gameChoice () {
    let userChoice = prompt("Avec quelle liste désirez-vous jouer : mots ou phrases ?")
    while (userChoice !=="mots" && userChoice !=="phrases") {
        userChoice = prompt("Avec quelle liste désirez-vous jouer : mots ou phrases ?")
    } 
    return userChoice
}

function game (listPropositions) {
    let score = 0
    for  (let i = 0; i < listPropositions.length; i++) {
        let userWord = prompt("Entrez le mot suivant :" + listPropositions[i])
        if (userWord === listPropositions[i]) {
            score++
        }  
    }
    return score
}

function startGame () {
    let userChoice = gameChoice()
    let score = 0
    let numberWord = 0
    if (userChoice === "mots"){
        score = game(listWord)
        numberWord = listWord.length
    }else {
        score = game(listSentence)
        numberWord = listSentence.length
    }
        
    giveScore (score, numberWord)
}

startGame ()

*/

/* Exercice 5
function giveScore (score, numberWord ){
    let scoreDisplay = document.querySelector (".zoneScore span")
    let scoreCounter = `${score}/${numberWord}`
    scoreDisplay.innerHTML = scoreCounter
}

function gameChoice () {
    let userChoice = prompt("Avec quelle liste désirez-vous jouer : mots ou phrases ?")
    while (userChoice !=="mots" && userChoice !=="phrases") {
        userChoice = prompt("Avec quelle liste désirez-vous jouer : mots ou phrases ?")
    } 
    return userChoice
}

function game (listPropositions) {
    let score = 0
    for  (let i = 0; i < listPropositions.length; i++) {
        let userWord = prompt("Entrez le mot suivant :" + listPropositions[i])
        if (userWord === listPropositions[i]) {
            score++
        }  
    }
    return score
}

function startGame () {
    let userChoice = gameChoice()
    let score = 0
    let numberWord = 0
    if (userChoice === "mots"){
        score = game(listWord)
        numberWord = listWord.length
    }else {
        score = game(listSentence)
        numberWord = listSentence.length
    }
        
    giveScore (score, numberWord)
}
*/