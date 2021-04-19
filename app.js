console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
    constructor(Title, Author, Read){
        this.Title = Title;
        this.Author = Author;
        this.Read = Read;
    }
}
class Library {
    constructor(bookCount, books){
        this.bookCount = bookCount;
        this.books = books;
        
    }
    markRead(checkbox, id){
        for(let book of books){
            if(book.id == id){
                book.read = true;
                checkbox = true;
                checkbox.disabled = true;
            }
        }
    }

    addBook(){
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const read = document.getElementById("readLibraryCheckbox").value;
        const tbody = document.getElementByTagName("tbody");

             const newBook = new Book(title, author, read);
             this.books.push(newBook);
             const newRow = document.createElement("tr");
             const newTitle = document.createElement("td");
             const newAuthor = document.createElement("td");
             const newRead = document.createElement("td");
             const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "name";
                checkbox.id = "id";
            newTitle.textContent = title;
            newAuthor.textContent = author;
            checkbox.checked = read;
            newRead.append(checkbox);
            newRow.append(newTitle,newAuthor,newRead);
            tbody.append(newRow);
            bookCount++;
    }   
        removeBook(id){
            index = 0;
            for(let book in books){
                if(book.id == id){
                    books.splice(index, 1,);
                }else {
                    index++;
                }   
            }
        }
    
}
    addBook = document.getElementById("addBook").addEventListener("click", addBook());
    removeBook = document.getElementById("removeBook").addEventListener("click", removeBook());

