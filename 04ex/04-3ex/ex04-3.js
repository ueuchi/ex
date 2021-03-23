const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
    if (score >= 90) {
      console.log('秀')
    } else if (score >= 75) {
      console.log('優')
    } else if (score >= 60) {
      console.log('良')
    } else if (score >= 30) {
      console.log('可')
    } else {
      console.log('不可')
    }
}
scores.forEach((score) => {
    console.log(scoring(score));
})
