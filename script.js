const searchInput = document.querySelector("#searchInput")
const searchButton = document.querySelector("#searchButton")
const closeButton = document.querySelector("#closeButton")
const foundItems = document.querySelector("#foundElements")


let listElements = ""

function foundOpacity(opa) {
    foundItems.style.opacity = opa
}



searchButton.addEventListener("click", function (event) {
    listElements = document.querySelectorAll(".item")
    let foundElements = []
    let currentValue = searchInput.value
    foundItems.innerHTML = ""
    foundOpacity(1)
    listElements.forEach(element => {
        if (element.textContent.indexOf(currentValue) != -1 && searchInput.value != "") {
            foundElements.push(element)
            let item = document.createElement("span")
            item.textContent = element.textContent
            item.classList += "found__item"
            foundItems.appendChild(item)
        }
    });

})

closeButton.addEventListener("click", function (event) {
    searchInput.value = ""
    let foundElements = []
    let currentValue = searchInput.value
    foundItems.innerHTML = ""
    foundOpacity(0)
})