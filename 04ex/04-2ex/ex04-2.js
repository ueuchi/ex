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

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(60)) //=> 良
console.log(scoring(13)) //=> 不可