var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            console.log("You did it! The dragon is gone for good!");
            if("You did it! The dragon is gone for good!"){
                alert("Dragon is dead you win! :)")
            }
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("The dragon burned you! You're toast.");
        if("The dragon burned you! You're toast."){
            alert("Game Over!")
            slaying = false
            //Makes the loop go forever and makes the computer run slow and crash, took a lot of battery from the computer unless force quit
        }
    }
}
