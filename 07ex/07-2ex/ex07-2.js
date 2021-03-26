// 1.find(テスト関数を満たす最初の要素の値を返す)
const array1 = [10, 23, 4, 33, 27];
const found = array1.find(element => element > 25);
console.log(found);

// 2.join(配列の前要素を順に連結した文字列を新たに作成して返す)
const array2 = ["red", "blue", "green"];
console.log(array2);
console.log(array2.join());
console.log(array2.join(''));
console.log(array2.join('-'));

// 3.fill(指定の値を変更させる)
const array3 = [1, 2, 3, 4];
console.log(array3.fill(5, 2));