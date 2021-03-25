const json =` 
{
  "total": 2,
  "items": [{
      "name": "Item 123",
      "id": 123
    },
    {
      "name": "Item 456",
      "id": 456
    }
  ],
  "next": {
    "id": 789
  }
}`



const obj = JSON.parse(json)
console.log(obj.total) // => 2
console.log(obj.items[0].name) //=> Item 123
console.log(obj.items[0].id) //=> 123
console.log(obj.items[1].name) //=> Item 456
console.log(obj.items[1].id) //=> 456
console.log(obj.next.id) //=> 789