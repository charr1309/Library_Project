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
class Library extends Book{
    constructor(bookCount, books,){
        super(Title, Author, Read);
        this.bookCount = bookCount;
        this.books = books;
    }
    markRead(checkbox, id){
        for(id in books);
            if(book.id == id){
                book.read = true;
                checkbox = true;
                checkbox.disabled = true;
            }
    }
    addBook(){
        const title = document.getElementsByTagName("title").value;
        const author = document.getElementsByTagName("author").value;
        const read = document.getElementsById("readLibraryCheckbox").value;
        const tbody = document.getElementsByTagName("tbody");
        
        }   

        newBook = new Book("title", "author", "read");
             newRow = document.createElement("tr");
             newTitle = document.createElement("td");
             newAuthor = document.createElement("td");
             newRead = document.createElement("td");
             checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "read";
                checkbox.value = read;
            newTitle.append(title);
            newAuthor.append(author);
            newRead.append(checkbox);
            newRow.append(newTitle,newAuthor,newRead);
            tbody.append(newRow);
            bookCount++;
        }    
        removeBook(id){
            index = 1;
            for(id in books);
                if(book.id == id){
                    books.splice(index, 1,);
                }else {
                    index++;
                }   
        }
        
    
    
    addBook = document.getElementById("addBook").addEventListener("click", addBook());
    removeBook = document.getElementById("removeBook").addEventListener("click", removeBook());

