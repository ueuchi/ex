const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('#list')

addButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li')
    const newImg = document.createElement('img')
    const newText = document.createElement('span')
    const listNumber = list.childElementCount
    newImg.src = "http://placehold.it/64x64"
    newImg.alt = `アイテム${listNumber + 1}`;
    newText.textContent = `アイテム${listNumber + 1}`
    list.appendChild(newItem)
    newItem.appendChild(newImg)
    newItem.appendChild(newText)
})
removeButton.addEventListener('click', (event) => {
  list.removeChild(list.lastElementChild)
})
