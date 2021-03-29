const newItem1 = document.createElement('h1')
newItem1.textContent = 'DOM'
document.body.appendChild(newItem1)

const newItem2 = document.createElement('p')
newItem2.textContent = 'JavaScriptからHTMLを扱うための仕組み'
document.body.appendChild(newItem2)

const newItem3 = document.createElement('h2')
newItem3.textContent = '印象に残っているトピック'
document.body.appendChild(newItem3)

const newItem4 = document.createElement('ul')
document.body.appendChild(newItem4)

const newItem5 = document.createElement('li')
newItem5.textContent = 'documentオブジェクト'
document.querySelector('ul').appendChild(newItem5)

const newItem6 = document.createElement('li')
newItem6.textContent = 'getElementById'
document.querySelector('ul').appendChild(newItem6)

const newItem7 = document.createElement('li')
newItem7.textContent = 'イベントリスナ'
document.querySelector('ul').appendChild(newItem7)

    