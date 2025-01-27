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
    const itemLi = document.createElement("li")
    // itemLi.innerText = item
    
    itemLi.innerHTML = `
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
    
    // listUL.append(itemLi)
    return itemLi
}

function saveList(){
    const allListItemsJSON = JSON.stringify(allListItems)
    localStorage.setItem("lists", allListItemsJSON)
}

function getList(){
    const lists = localStorage.getItem("lists") || "[]"
    return JSON.parse(lists)
}
