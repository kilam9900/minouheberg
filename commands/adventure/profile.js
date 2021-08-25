module.exports = {
  name: "profile",
  aliases: ["profil","stats"],
  code: `$title[Voici le profil de $username[$mentioned[1;yes]] :] $description[Nom : **$username[$mentioned[1;yes]]**

Sexe : **$getGlobalUserVar[sexe;$mentioned[1;yes]]**
  
Taille : **$getGlobalUserVar[taille;$mentioned[1;yes]]m**
    
Poids : **$getGlobalUserVar[poids;$mentioned[1;yes]]kg**

Âge : **$getGlobalUserVar[age;$mentioned[1;yes]] ans**
 
Santé : **$getGlobalUserVar[vie;$mentioned[1;yes]]%**
 
Faim : **$getGlobalUserVar[nourriture;$mentioned[1;yes]]%**
 
Soif : **$getGlobalUserVar[eau;$mentioned[1;yes]]%**
 
Maladie : **$getGlobalUserVar[maladie;$mentioned[1;yes]]**] 
$onlyIf[$getGlobalUserVar[sleep]==0;{title: Oups !} {description: Tu ne peux pas effectuer cette action pendant que tu dors !}]
$onlyIf[$getGlobalUserVar[started;$mentioned[1;yes]]==Oui;{title: Oups !} {description: L'aventure de **$username[$mentioned[1;yes]]** n'est pas encore commencée !}]
  `
}