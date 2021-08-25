module.exports = {
  name: "start",
  aliases: ["commencer"],
  code: `$title[Tu as commencé ton aventure et reçu :] $description[
  **__Objets :__** 
    
**100** ACoins <:acoin:853319096656330762> 
  
**1** soupe <:soop:853296633373392906>
  
**1** Bouteille d'eau <:waterbottle:853337984829095946>
  
**1** Épée en bois <:woodensword:853337963013472267>
  
  **__Tes infos :__** 
  
Nom : **$username**
  
Taille : **1.$random[60;99]m**
  
Poids : **$random[50;100]kg**
  
Âge : **$random[17;89] ans**
  
Sexe : **$randomText[Femme;Homme]**]

  $setGlobalUserVar[poids;$random[50;100]]
  $setGlobalUserVar[taille;1.$random[60;99]]
  $setGlobalUserVar[epeebois;30]
  $setGlobalUserVar[soupe;1]
  $setGlobalUserVar[bouteilleeau;1]
  $setGlobalUserVar[coins;100]
  $setGlobalUserVar[vie;100]
  $setGlobalUserVar[nourriture;75]
  $setGlobalUserVar[eau;75]
  $setGlobalUserVar[started;Oui]
  $setGlobalUserVar[age;$random[17;89]]
  $setGlobalUserVar[sexe;$randomText[Femme;Homme]]
  $onlyIf[$getGlobalUserVar[started]==Non;{title: Oups !} {description: Tu as déjà commencé ton aventure !}]
  `
}