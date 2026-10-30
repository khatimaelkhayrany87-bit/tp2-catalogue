console.log("TP2: catalogue de produits");
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5},
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8},
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0},
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3},
];
console.log(produits);
for(const p  of produits){
    console.log(`Nom: ${p.nom}, Prix: ${p.prix} MAD`);
}
const p=produits.filter(
  p=> p.stock>0
);
console.log(`nombre: ${p.length}`);
const sommeTotal = produits.reduce( 
  (somme, p) => somme + p.prix * p.stock, 0);
console.log(`valeur de stock: ${sommeTotal} MAD`);
if (p.length===0){
  console.log("Aucun produit disponible.");
}
else {
  const produitMoinsCher = p.reduce((min, p) => p.prix < min.prix ? p : min);
  const { nom, prix } = produitMoinsCher;
  console.log(`produit moins cher: Nom: ${produitMoinsCher.nom} , Prix: ${produitMoinsCher.prix} MAD`);
}
const resume = produits.map(p =>
    `${p.nom} - ${p.prix} MAD - ${p.stock} unités`
);

console.log("Résumé du catalogue :");
for (const ligne of resume) {
    console.log(ligne);
}
function estValide(produit) {
    return Number.isFinite(produit.prix) &&
           produit.prix >= 0 &&
           Number.isFinite(produit.stock) &&
           produit.stock >= 0;
}
console.log(estValide(produits[0]));

