module.exports = {
  name: "reset",
  description: "réinitialise tes stats.",
  code: `$setGlobalUserVar[started;Non] $setGlobalUserVar[vie;100] $setGlobalUserVar[nourriture;75] $setGlobalUserVar[eau;75] Tes scores ont été reset !
  $onlyIf[$getGlobalUserVar[started]==Oui;{title: Oups !} {description: Ton aventure n'est pas encore commencée !}]`
}