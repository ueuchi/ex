const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('.list') // ※既に書いている場合は省略

addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
  const newItem = document.createElement('li')
  newItem.textContent = '新しいアイテム'
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
  list.removeChild(list.lastElementChild)
})
