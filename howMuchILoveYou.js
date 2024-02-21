function howMuchILoveYou(nbPetals) {
    let arrayOfPetals = [ "not at all", "I love you", "a little", "a lot", "passionately", "madly" ];
        for (let i = 0; i <= nbPetals; i++){
        return arrayOfPetals[nbPetals % 6]
        }
}
