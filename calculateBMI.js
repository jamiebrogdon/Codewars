function bmi(weight, height) {
  let total = weight / height * 2
  if (total <= 18.5){
    return "Underweight"
  }else if (total <= 25.5){
    return "Normal"
  }else if (total <= 30.0){
     return "Overweight"
    }else if (total > 30){
      return "Obese"
  }
}
