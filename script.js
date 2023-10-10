
// Books sera un array con todos mis objetos de libro.
const books = []

// Se necesita entonces un constructor para esos book.
class Book{
    constructor(title, author, read){
        this.title = title
        this.author = author
        this.read = read
    }
}

handerListernerForm()

// Una funcion qu permita recibir los input del usuario y crea un book, 
// lo envia al array de books

function handerListernerForm(){
    const formBook = document.getElementById("newBookForm")

    formBook.addEventListener("submit", function(event){
        event.preventDefault()
        let newBookFormTitle = document.getElementById("userTitle").value
        let newBookFormAuthor = document.getElementById("userAuthor").value
        let newBookFormRead = document.querySelector('input[name="read"]:checked').value
        // crea libro nuevo
        let newBook = new Book(newBookFormTitle, newBookFormAuthor, newBookFormRead)
        books.push(newBook)
        createBookAndDisplay(newBook)
        let inputTitle = document.getElementById("userTitle")
        let inputAuthor = document.getElementById("userAuthor")
        inputTitle.value = ""
        inputAuthor.value = ""
    })
}


// Crea e inserta en el DOM el libro nuevo 

function createBookAndDisplay(newBook){
        let divMain = document.createElement("div")
        let divTitle = document.createElement("div")
        let divAuthor = document.createElement("div")
        let divRead = document.createElement("div")
        let toggleReadButton = document.createElement("button")
        let deleteButton = document.createElement("button")

        divMain.classList.add("bookMain")
        divTitle.classList.add("bookTitle")
        divAuthor.classList.add("bookAuthor")
        divRead.classList.add("bookRead")    

        divTitle.textContent = newBook.title
        divAuthor.textContent = newBook.author
        divRead.textContent = newBook.read == "true" ? "Leido" : "No leido";
        deleteButton.textContent = "x"
        toggleReadButton.textContent = newBook.read == "true"? "Marcar como No leido": "Marcar como leido";

        divMain.appendChild(divTitle)
        divMain.appendChild(divAuthor)
        divMain.appendChild(divRead)
        divMain.appendChild(deleteButton)
        divMain.appendChild(toggleReadButton)

        deleteButton.addEventListener("click", ()=>{
            divMain.remove()
        })

        toggleReadButton.addEventListener("click", ()=>{
            newBook.read = newBook.read == "true"? "false": "true";
            toggleReadButton.textContent = newBook.read === "true"? "Marcar como No leido": "Marcar como leido";
            divRead.textContent = newBook.read == "true" ? "Leido" : "No leido";
        })

        const boxLibrary = document.querySelector(".box-library")
        boxLibrary.appendChild(divMain)
}


let dialog = document.querySelector("#idDialog")
let openDialog = document.querySelector(".openDialog")
let closeDialog = document.querySelector(".closeDialog")

openDialog.addEventListener("click", ()=>{
    dialog.showModal()
})

closeDialog.addEventListener("click", ()=>{
    dialog.close()
})


