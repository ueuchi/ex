const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('#list')

addButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li')
    const newImg = document.createElement('img')
    const newText = document.createElement('span')
    newImg.src = "http://placehold.it/64x64"
    list.appendChild(newItem)
    newItem.appendChild(newImg)
    newItem.appendChild(newText)
    newImg.alt = `アイテム${list.children.length}`;
    newText.textContent = `アイテム${list.children.length}`
})
removeButton.addEventListener('click', (event) => {
  if(list.children.length > 0) {
    list.removeChild(list.lastElementChild)
  } else {
    console.log('要素がありません')
  }
})
