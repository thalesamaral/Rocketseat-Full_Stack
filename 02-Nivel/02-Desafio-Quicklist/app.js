const listForm = document.querySelector("form")
const listFormInput = document.getElementById("list-input")
const listUL = document.querySelector("ul")

let allListItems = getList()
updateList()

listForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addItem()
})

function addItem() {
    const inputValue = listFormInput.value.trim()
    
    if(inputValue.length > 0) {
        const itemObject = {
            text: inputValue,
            completed: false
        }
        
        allListItems.push(itemObject)
        updateList()
        saveList()
        listFormInput.value = ""
    }
    
    // console.log(allListItems)
}

function updateList() {
    listUL.innerText = ""

    allListItems.forEach((item, itemIndex) => {
        newItem = createListItem(item, itemIndex)
        listUL.append(newItem)
    })
}

function createListItem(item, itemIndex) {
    const chkID = "chk-" + itemIndex
    const itemLI = document.createElement("li")
    const itemText = item.text
    
    itemLI.innerHTML = `
        <div class="check-box">
            <input type="checkbox" id="${chkID}">
        </div>
        <label for="${chkID}">
            ${itemText}
        </label>
        <a href="#">
            <img src="assets/icons/garbage.svg" alt="garbage">
        </a>
    `
    
    const deleteButton = itemLI.querySelector("a")
    deleteButton.addEventListener("click", () => {
        deleteItem(itemIndex)
    })
    
    const checkbox = itemLI.querySelector("input")
    checkbox.addEventListener("change", () => {
        allListItems[itemIndex].completed = checkbox.checked
        saveList()
    })
    checkbox.checked = item.completed

    return itemLI
}

function deleteItem(itemIndex) {
    // --- array.prototype.filter()
    allListItems = allListItems.filter((_, i) => i !== itemIndex)
    saveList()
    updateList()
}

function saveList(){
    const allListItemsJSON = JSON.stringify(allListItems)
    localStorage.setItem("lists", allListItemsJSON)
}

function getList(){
    const lists = localStorage.getItem("lists") || "[]"
    return JSON.parse(lists)
}
