const signe = ["ciseaux", "pierre", "feuille"];
let playerScore = 0;
let computerScore = 0;

function signe_ordi() {
    const index = Math.floor(Math.random() * signe.length);
    return signe[index];
}

function afficherResultat(message) {
    document.getElementById("resultat").textContent = message;
    document.getElementById("score").textContent = "Score - Vous: " + playerScore + " | Ordinateur: " + computerScore;
}

function afficherFin(message) {
    document.getElementById("fin").textContent = message;
}

function resultat(playerSigne, computerSigne) {
    if (playerSigne === computerSigne) {
        return "Égalité ! L'ordinateur a choisi : " + computerSigne;
    } else if (
        (playerSigne === "ciseaux" && computerSigne === "feuille") ||
        (playerSigne === "pierre" && computerSigne === "ciseaux") ||
        (playerSigne === "feuille" && computerSigne === "pierre")
    ) {
        playerScore++;
        return "Vous gagnez cette manche ! L'ordinateur a choisi : " + computerSigne;
    } else if (
        (playerSigne === "ciseaux" && computerSigne === "pierre") ||
        (playerSigne === "pierre" && computerSigne === "feuille") ||
        (playerSigne === "feuille" && computerSigne === "ciseaux")
    ) {
        computerScore++;
        return "L'ordinateur gagne cette manche ! Il avait choisi : " + computerSigne;
    } else {
        return "Choix invalide. Veuillez choisir entre ciseaux, pierre ou feuille.";
    }
}

function jouer(playerSigne) {
    if (playerScore >= 3 || computerScore >= 3) return;
    const computerSigne = signe_ordi();
    const message = resultat(playerSigne, computerSigne);
    afficherResultat(message);

    if (playerScore === 3) {
        afficherFin("Félicitations ! Vous avez gagné la partie !");
    } else if (computerScore === 3) {
        afficherFin("L'ordinateur a gagné la partie. Bonne chance pour la prochaine fois !");
    }
}
