const Aoijs = require("aoi.js")
const express = require("express");
 
const app = express();
 
app.get("/", (req, res) => {
  res.send("AdventureMinou launch system !");
});
 
app.listen(300, () => {
  console.log("Express server");
});
const bot = new Aoijs.Bot({
  token: process.env.token,
  prefix: ["ad!"], 
  autoUpdate: true
})
bot.variables({
  coins: "0",
  poids: " ",
  taille: " ",
  ak47: "❌",
  epeefer: "❌",
  nourriture: "75",
  eau: "75",
  munition: "0",
  start: "0",
  soupe: "0",
  bouteilleeau: "0",
  vie: "100",
  maladie: "Aucune",
  started: "Non",
  epeebois: "❌",
  age: " ",
  sexe: " ",
  viande: "0",
  sleep: "0",
  viandecuite: "0",
  animalhunt: " ",
  bouteillevide: "0"
})
bot.onMessage()
bot.loadCommands(`./commands/`)
bot.command({
  name: "inventory",
  aliases: ["inv"],
  code: `$title[Voici l'inventaire de $username[$mentioned[1;yes]] :] $description[ACoins : **$getGlobalUserVar[coins;$mentioned[1;yes]]** <:acoin:853319096656330762>
  
Soupes : **(X$getGlobalUserVar[soupe;$mentioned[1;yes]])**

Viandes : **(X$getGlobalUserVar[viande;$mentioned[1;yes]])**

Viandes cuites : **(X$getGlobalUserVar[viandecuite;$mentioned[1;yes]])**
  
Bouteilles d'eau : **(X$getGlobalUserVar[bouteilleeau;$mentioned[1;yes]])**

Bouteilles vides : **(X$getGlobalUserVar[bouteillevide;$mentioned[1;yes]])**

Épée en bois : **($getGlobalUserVar[epeebois;$mentioned[1;yes]]%/30%)**]
$onlyIf[$getGlobalUserVar[sleep]==0;{title: Oups !} {description: Tu ne peux pas effectuer cette action pendant que tu dors !}]
$onlyIf[$getGlobalUserVar[started;$mentioned[1;yes]]==Oui;{title: Oups !} {description: L'aventure de **$username[$mentioned[1;yes]]** n'est pas encore commencée !}]
  `
})
bot.command({
  name: "use",
  aliases: ["u"],
  code: `$if[$message==soupe]
  $title[Tu as mangé une soupe !] $description[Tu as mangé une soupe et passé à : **100%** de nourriture !]
  $setGlobalUserVar[nourriture;100]
  $setGlobalUserVar[soupe;$sub[$getGlobalUserVar[soupe];1]]
  $setGlobalUserVar[poids;$sum[$getGlobalUserVar[poids];0.5]]
  $onlyIf[$getGlobalUserVar[nourriture]<100;{title: Oups !} {description: Ta nourriture est déjà à **100%** !}]
  $onlyIf[$getGlobalUserVar[soupe]>0;{title: Oups !} {description: Tu n'as pas de soupe !}]
  $endif
  $if[$message==viande cuite]
  $title[Tu as mangé une viande cuite !] $description[Tu as mangé une viande cuite et passé à : **100%** de nourriture !]
  $setGlobalUserVar[nourriture;100]
  $setGlobalUserVar[viandecuite;$sub[$getGlobalUserVar[viandecuite];1]]
  $setGlobalUserVar[poids;$sum[$getGlobalUserVar[poids];1]]
  $onlyIf[$getGlobalUserVar[nourriture]<100;{title: Oups !} {description: Ta nourriture est déjà à **100%** !}]
  $onlyIf[$getGlobalUserVar[viandecuite]>0;{title: Oups !} {description: Tu n'as pas de viande cuite !}]
  $endif
  $if[$message==bouteille]
  $title[Tu as bu une bouteille d'eau !] $description[Tu as bu une bouteille d'eau et passé à : **100%** d'eau !]
  $setGlobalUserVar[eau;100]
  $setGlobalUserVar[bouteilleeau;$sub[$getGlobalUserVar[bouteilleeau];1]]
  $setGlobalUserVar[bouteillevide;$sum[$getGlobalUserVar[bouteillevide];1]]
  $setGlobalUserVar[poids;$sum[$getGlobalUserVar[poids];0.25]]
  $onlyIf[$getGlobalUserVar[eau]<100;{title: Oups !} {description: Ton eau est déjà à **100%** !}]
  $onlyIf[$getGlobalUserVar[bouteilleeau]>0;{title: Oups !} {description: Tu n'as pas de bouteille d'eau !}]
  $endif
  $onlyIf[$getGlobalUserVar[sleep]==0;{title: Oups !} {description: Tu ne peux pas effectuer cette action pendant que tu dors !}]
  $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]`
})
bot.command({
  name: "shop",
  code: `$if[$message==nourriture]
  $title[Voici toutes les nourritures que tu peux acheter :]
  $description[Soupe : **50** <:acoin:853319096656330762>
  
Bouteille d'eau : **50** <:acoin:853319096656330762>]
  $endif
  $if[$message==armes]
  $title[Voici toutes les armes que tu peux acheter :]
  $description[Épée en bois : **40** <:acoin:853319096656330762>
  
Épée en fer : **100** <:acoin:853319096656330762>
  
AK47 : **500** <:acoin:853319096656330762>
  
Munitions : **10** <:acoin:853319096656330762>]
  $endif
  $if[$message==] 
  $title[Voici toutes les catégories du shop :]
  $description[**NOURRITURE**
  ad!shop nourriture
  
  **ARMES**
  ad!shop armes]
  $endif 
  $onlyIf[$getGlobalUserVar[sleep]==0;{title: Oups !} {description: Tu ne peux pas effectuer cette action pendant que tu dors !}]
  $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]`
})
bot.command({
  name: "hunt",
  code: `$title[Tu es parti à la chasse !]
  $if[$random[1;5]==1]
  $editIn[5s;{description: Tu as trouvé un sanglier !!!} $setGlobalUserVar[animalhunt;sanglier]] $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}] $onlyIf[$getGlobalUserVar[sleep]==0; ]
  $else
  $editIn[5s;{description: Tu n'as rien trouvé !!!}]
  $endif
  $onlyIf[$getGlobalUserVar[sleep]==0;{title: Oups !} {description: Tu ne peux pas effectuer cette action pendant que tu dors !}]
  $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]`
})
bot.command({
  name: "hunt",
  code: `$wait[15s]
  $if[$getGlobalUserVar[animalhunt]==sanglier] 
  $description[Tu as attrapé le sanglier et perdu : **$random[0;90]PV**, **$random[1;10]%** de nourriture, **$random[20;40]%** d'eau et **$random[0;1].$random[1;99]kg** et tu as gagné **$random[10;25]** ACoins et **$random[1;5]** de viande] 
  $setGlobalUserVar[vie;$sub[$getGlobalUserVar[vie];$random[0;90]]]
  $setGlobalUserVar[nourriture;$sub[$getGlobalUserVar[nourriture];$random[1;10]]]
  $setGlobalUserVar[eau;$sub[$getGlobalUserVar[eau];$random[20;40]]]
  $setGlobalUserVar[poids;$sub[$getGlobalUserVar[poids];$random[0;1].$random[1;99]]]
  $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins];$random[10;25]]]
  $setGlobalUserVar[viande;$sum[$getGlobalUserVar[viande];$random[1;5]]]
  $setGlobalUserVar[animalhunt; ]
  $endif
  $editIn[0.01s;$if[$getGlobalUserVar[started]==Oui]
  $if[$getGlobalUserVar[vie]<1]
  {description: Tu es mort !}
  $setGlobalUserVar[started;Non]
  $endif
  $endif]
  $onlyIf[$getGlobalUserVar[started]==Oui;]
  $onlyIf[$getGlobalUserVar[sleep]==0;]
  `
})
bot.command({
  name: "sleep",
  code: `$title[Tu t'endors pour régenérer tes PV !] $description[Tu te réveilleras dans 3m] $setGlobalUserVar[sleep;1] $editIn[3m;{title: Tu te réveilles !}{description: Pour sortir de ton lit fais **ad!exitbed**} $setGlobalUserVar[vie;100] $setGlobalUserVar[nourriture;$sub[$getGlobalUserVar[nourriture];$random[20;50]]] $setGlobalUserVar[eau;$sub[$getGlobalUserVar[eau];$random[20;50]]] $setGlobalUserVar[sleep;0]] $onlyIf[$getGlobalUserVar[nourriture]>49;{title: Oups !}{description: Tu dois avoir au minimum **50%** de nourriture pour t'endormir !}] $onlyIf[$getGlobalUserVar[eau]>49;{title: Oups !}{description: Tu dois avoir au minimum **50%** d'eau pour t'endormir !}] $onlyIf[$getGlobalUserVar[sleep]==0;{title: Oups !} {description: Tu dors déjà !}]
  $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]`
})
bot.command({
  name: "cook",
  code: `$if[$message==viande]
  $title[Tu fais cuire ta viande...] $description[Elle sera prête dans 10s !] $setGlobalUserVar[viande;$sub[$getGlobalUserVar[viande];1]] $editIn[10s;{title: Ta viande est cuite !} {description: Ta viande a été cuite et placée dans ton inventaire ! (-1 viande crue, +1 viande cuite)} $setGlobalUserVar[viandecuite;$sum[$getGlobalUserVar[viandecuite];1]]]
  $onlyIf[$getGlobalUserVar[viande]>0;{title: Oups !} {description: Tu n'as pas de viande cuite !}] $endif $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]`
})
bot.command({
  name: "buy",
  code: `$if[$message==bouteille]
  $title[Objet acheté !] $description[Tu as acheté une bouteille d'eau pour **50 ACoins** !] $setGlobalUserVar[bouteilleeau;$sum[$getGlobalUserVar[bouteilleeau];1]]$setGlobalUserVar[coins;$sub[$getGlobalUserVar[coins];50]] $onlyIf[$getGlobalUserVar[coins]>49;{title: Oups !} {description: Tu n'as pas assez d'argent pour acheter cet objet !}]
  $endif
  $onlyIf[$getGlobalUserVar[sleep]==0;{title: Oups !} {description: Tu ne peux pas effectuer cette action pendant que tu dors !}]
  $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]
  `
})
bot.command({
  name: "exitbed",
  code: `Tu es sorti de ton lit ! $setGlobalUserVar[sleep;0] $onlyIf[$getGlobalUserVar[sleep]==1;{title: Oups !} {description: Tu ne dors pas !}]`
})
bot.command({
  name: "fill",
  code: `$if[$message==bouteille]
  $title[Tu remplis une bouteille !]
  $description[Elle sera plein dans 2s !]
  $editIn[2s;{title: Ta bouteille est pleine !} {description: Ta bouteille a été remplie et placée dans ton inventaire (-1 bouteille vide, +1 bouteille d'eau)} $setGlobalUserVar[bouteilleeau;$sum[$getGlobalUserVar[bouteilleeau];1]]
  $setGlobalUserVar[bouteillevide;$sub[$getGlobalUserVar[bouteillevide];1]]] 
  $onlyIf[$getGlobalUserVar[bouteillevide]>0;{title: Oups !} {description: Tu n'as pas de bouteille vide !}] $endif $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]`
})
bot.status({
  text: "ad!help",
  type: "WATCHING",
  time: 12
})
bot.status({
  text: "ad!start",
  type: "LISTENING",
  time: 12
})
bot.status({
  text: "CodeNHack Foundation : https://discord.gg/BDqQW2hvc9",
  type: "COMPETING",
  time: 12
})