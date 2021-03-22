const array = [1, 2, 3]

array.splice(0, 1)

console.log(array) //=> [2, 3]

array.push(5)

console.log(array) //=> [2, 3, 5]

array.splice(1, 2)

console.log(array) //=> [2]

array[0] = 100

console.log(array) //=> [100]