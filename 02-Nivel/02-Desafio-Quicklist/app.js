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
        allListItems.push(inputValue)
        // createListItem(inputValue)
        updateList()
        saveList()
        listFormInput.value = ""
    }
    
    console.log(allListItems)
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
    // itemLI.innerText = item
    
    itemLI.innerHTML = `
        <div class="check-box">
            <input type="checkbox" id="${chkID}">
        </div>
        <label for="${chkID}">
            ${item}
        </label>
        <a href="#">
            <img src="assets/icons/garbage.svg" alt="garbage">
        </a>
    `
    
    const deleteButton = itemLI.querySelector("a")
    deleteButton.addEventListener("click", () => {
        deleteItem(itemIndex)
    })

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
