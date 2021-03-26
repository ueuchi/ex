// 1.trim(両端の空白を削除)
const num1 = '   12345   ';
console.log(num1);
console.log(num1.trim());

// 2.padStart(指定の長さになるよう文字列を延長)
const num2 = '09012345678';
const num3 = num2.slice(-4);
const num4 = num3.padStart(num2.length, '*');
console.log(num4);

// 3.repeat(文字列を指定した数だけコピーして新しい文字列に結合)
const num5 = '123';
console.log(num5.repeat(3));
