
// Books sera un array con todos mis objetos de libro.
const books = []

// Se necesita entonces un constructor para esos book.
class Book{
    constructor(title, author){
        this.title = title
        this.author = author
        this.readed = undefined
    }
}

// Una funcion qu permita recibir los input del usuario y crea un book, 
// lo envia al array de books
const formBook = document.getElementById("newBookForm")

formBook.addEventListener("submit", function(event){
    event.preventDefault()
    let newBookFormTitle = document.getElementById("userTitle").value
    let newBookFormAuthor = document.getElementById("userAuthor").value
    let newBook = new Book(newBookFormTitle, newBookFormAuthor)
    books.push(newBook)
})

const boxLibrary = document.querySelector(".box-library")


// Una funcion que haga un loop sobre el array de libros y 
// lo muestre en pantalla. 

// Agrega un boton en cada libro que esta en pantalla para remover ese libro 

// agrega un boton que cambia el estado del libro de leido. 



