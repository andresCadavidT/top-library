// Books sera un array con todos mis objetos de libro.
const books = []
// Se necesita entonces un constructor para esos book.
class Book{
    constructor(title, author, read){
        this.title = title
        this.author = author
        this.read = read
    }
    createCardWithBooknDisplay(){
        let boxTitle = document.createElement("p")
        boxTitle.setAttribute("class", "title")
        boxTitle.textContent = this.title

        let boxAuthor = document.createElement("p")
        boxAuthor.setAttribute("class", "author")
        boxAuthor.textContent = this.author

        let boxRead = document.createElement("div")
        boxRead.setAttribute("class", "read")
        console.log("AQUI: " + this.read + typeof(this.read))
        boxRead.textContent = this.read == true ? "Read" : "Unread";

        let cardWithBook = document.createElement("div")
        cardWithBook.setAttribute("class", "cardWithBook")
        cardWithBook.appendChild(boxTitle)
        cardWithBook.appendChild(boxAuthor)
        cardWithBook.appendChild(boxRead)

        let displayCard = document.getElementById("displayCard")
        displayCard.appendChild(cardWithBook)

        this.createDeleteButton(cardWithBook, displayCard)
        this.createToggleReadButton(cardWithBook, boxRead)
        dialog.close()
    }
    createDeleteButton(cardWithBook, displayCard){
        let buttonDelete = document.createElement("button")
        cardWithBook.appendChild(buttonDelete)
        buttonDelete.setAttribute("type", "button")
        buttonDelete.textContent = "x"
        buttonDelete.addEventListener("click", ()=>{
            displayCard.removeChild(cardWithBook)
            books.splice((books.indexOf(this)),1)
        })
    }
    createToggleReadButton(cardWithBook, boxRead){
        let buttonToggleRead = document.createElement("button")
        buttonToggleRead.setAttribute("type", "button")
        buttonToggleRead.textContent = this.read ==  true ? "Mark as Unread" : "Mark as Read"
        buttonToggleRead.addEventListener("click", (event)=>{
            this.read = this.read == true? false : true;
            boxRead.textContent = this.read == true? "Read": "Unread";
            buttonToggleRead.textContent = this.read == true ? "Mark as Unread" : "Mark as Read"
        })
        cardWithBook.appendChild(buttonToggleRead)
    }
}

// permita recibir los input del usuario y crea un book, 
// lo envia al array de books

const formBook = document.getElementById("newBookForm")
formBook.addEventListener("submit", function(event){
        event.preventDefault()
        let inputFormTitle = document.getElementById("userTitle").value
        let inputFormAuthor = document.getElementById("userAuthor").value
        let inputFormRead = document.querySelector('input[name="read"]:checked').value
        let inputReadBoolean = inputFormRead == "true"? true : false;
        // crea libro nuevo
        let aBook = new Book(inputFormTitle, inputFormAuthor, inputReadBoolean)
        console.log(aBook.read)
        aBook.createCardWithBooknDisplay()
        books.push(aBook)
        let inputTitle = document.getElementById("userTitle")
        let inputAuthor = document.getElementById("userAuthor")
        inputTitle.value = ""
        inputAuthor.value = ""
})

// Genera un dialog para el anterior form
let dialog = document.querySelector("#idDialog")
let openDialog = document.querySelector(".openDialog")
let closeDialog = document.querySelector(".closeDialog")

openDialog.addEventListener("click", ()=>{
    dialog.showModal()
})

closeDialog.addEventListener("click", ()=>{
    dialog.close()
})


