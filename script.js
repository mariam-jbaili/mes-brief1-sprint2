// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.


afficher();
const button_ajout = document.getElementById("button_ajouter");
   button_ajout.addEventListener("click", function () {
          ajout(p)
    });
    function afficher() {
  const liste = document.getElementById("liste-produits");
  liste.innerHTML = "";

  produits.forEach(function (p) {
    const produit = document.createElement("li");
    produit.classList.add("produit");
    const div_produit = document.createElement("div");
    const nom_prod = document.createElement("strong");
    nom_prod.classList.add("nom-produit");
    nom_prod.textContent = p.nom;
    const prix = document.createElement("span");
    prix.classList.add("prix-produit");
    prix.textContent = p.prix + " DH";
    const button = document.createElement("button");
    button.classList.add("supprimer");
    button.textContent = "Retirer";
    div_produit.append(nom_prod, prix);
    produit.append(div_produit, button);
    liste.append(produit);
  });
}

afficher();
// ajouter 
function ajout() {
  const champNom = document.getElementById("nom");
  const champPrix = document.getElementById("prix");
  const nom = champNom.value.trim();
  const prix = Number(champPrix.value);
  if (nom === "" || champPrix.value.trim() === "" || prix <= 0) {
    return;
  }
  produits.push({ id: idprochin, nom: nom, prix: prix });
  idprochin++;
  afficher();
  champNom.value = "";
  champPrix.value = "";
}
const b
// 3. Gérer le retrait du produit cliqué.
 
// 4. Bonus : compteur, état vide et total.
