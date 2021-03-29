rdoPersonality.onchange=function(){
 
 let userChoice = $("input[name=rdoPersonality]:checked").prop("value")
  lblPersonality.value = `I would agree that you are a ${userChoice} person too!`
}

btnNextPage2.onclick=function(){
ChangeForm(favExercises)
}