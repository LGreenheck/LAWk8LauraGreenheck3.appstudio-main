var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
    for (i = 0; i < exercises.length; i++) {
        selExercises.addItem(exercises[i])
    }
}

selExercises.onfocusout = function() {
        btnAboutChoices.onclick = function() {
            if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
                lblChoices.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]}.`
            } else {
                lblChoices.value = "You didn't pick two core exercises."
            }
        }


        btnNextPage3.onclick = function() {
            ChangeForm(mobileNav)
        }