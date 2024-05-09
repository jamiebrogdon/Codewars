function past(h, m, s){
  let hourToMil =  h * 3600 / 0.001
  let minuteToMil = m * 60 / 0.001
  let secondToMil = s * 1 / 0.001
  return hourToMil + minuteToMil + secondToMil
}
