const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('#list')

addButton.addEventListener('click', (event) => {
  const newItem = document.createElement('li')
  const listNumber = list.childElementCount
  newItem.textContent = `アイテム${listNumber + 1}`
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => {
  list.removeChild(list.lastElementChild)
})
