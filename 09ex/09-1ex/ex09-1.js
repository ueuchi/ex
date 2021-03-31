const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('#list')

addButton.addEventListener('click', (event) => {
  const newItem = document.createElement('li')
  list.appendChild(newItem)
  newItem.textContent = `アイテム${list.children.length}`
})
removeButton.addEventListener('click', (event) => {
  if(list.children.length > 0) {
    list.removeChild(list.lastElementChild)
  } else {
    console.log('要素がありません')
  }
})
