
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

// Una funcion qu permita recibir los input del usuario y crea un book, 
// lo envia al array de books
const formBook = document.getElementById("newBookForm")

formBook.addEventListener("submit", function(event){
    event.preventDefault()
    let newBookFormTitle = document.getElementById("userTitle").value
    let newBookFormAuthor = document.getElementById("userAuthor").value
    let newBookFormRead = document.querySelector('input[name="read"]:checked').value
    let newBook = new Book(newBookFormTitle, newBookFormAuthor, newBookFormRead)
    books.push(newBook)
    display()
})

// Una funcion que haga un loop sobre el array de libros y 
// lo muestre en pantalla. 

function display(){
    const boxLibrary = document.querySelector(".box-library")
    boxLibrary.innerHTML = ""
    books.forEach((elem, index)=>{
        let readStatus = elem.read == "true" ? "Leido" : "Pendiente";
        let divMain = document.createElement("div")
        let divTitle = document.createElement("div")
        let divAuthor = document.createElement("div")
        let divRead = document.createElement("div")
        divMain.classList.add("bookMain")
        divTitle.classList.add("bookTitle")
        divAuthor.classList.add("booAuthor")
        divRead.classList.add("bookRead")

            // Agrega un boton en cada libro que esta en pantalla para remover ese libro 
            let deleteButton = document.createElement("button")
            deleteButton.classList.add(`bookDelete`)
            deleteButton.addEventListener("click", (event)=>{
                event.preventDefault()
                divMain.remove()     
                books.splice(index,1)        
            })
            deleteButton.textContent = "x"
    
            // Agrega un boton para indicar si esta leido o no
            let toggleReadButton = document.createElement("button")
            toggleReadButton.classList.add(`toggleReadButton`)
                toggleReadButton.addEventListener("click", (event)=>{
                    event.preventDefault()
                    readStatus = readStatus == "Pendiente" ? "Leido" : "Pendiente";
                    divRead.textContent = readStatus
                    elem.read = elem.read == "true" ? "false" : "true";
                })
            toggleReadButton.textContent = "read?"
    

        divTitle.textContent = elem.title
        divAuthor.textContent = elem.author
        divRead.textContent = readStatus

        divMain.appendChild(divTitle)
        divMain.appendChild(divAuthor)
        divMain.appendChild(divRead)
        divMain.appendChild(deleteButton)
        divMain.appendChild(toggleReadButton)

        boxLibrary.appendChild(divMain)
    })
}





