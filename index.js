console.log('connected 🔥');
// Object oriented programming
//  APIE





class Book {
    constructor(bookname, bookauthor, category) {
        // Com
        this.bookname = bookname
        this.bookauthor = bookauthor
        this.category = category
    }
}
class BookDisplay {
    constructor(book) {
        this.book = book
    }

    addbook() {
        const tbody = document.getElementById('tbody');
        const newbook = document.createElement('tr');
        newbook.innerHTML = `<th scope="row">1</th>
                                <td> ${this.book.bookname} </td>
                                <td>${this.book.bookauthor}</td>
                                <td>${this.book.category}</td>
                                <td> <button class="btn btn-danger"> 📖 </button> </td>
                            `
        tbody.append(newbook);

    }
}


const form = document.getElementById('form');
form.addEventListener('submit', library_data);
function library_data(e) {
    e.preventDefault();
    const bookname = document.getElementById('bookname').value;
    const bookauthor = document.getElementById('bookauthor').value;
    const cooking = document.getElementById('cooking');
    const gaming = document.getElementById('gaming');
    const coding = document.getElementById('coding');
    const alerts = document.getElementById('alert');
    var category = ''

    if (cooking.checked) category = cooking.value;
    else if (gaming.checked) category = gaming.value;
    else category = coding.value;

    if (bookauthor != "" && bookname != '') {
        const book = new Book(bookname, bookauthor, category)
        console.log(book);
        const newbook1 = new BookDisplay(book);
        newbook1.addbook();
        alerts.innerHTML = `<div class="alert alert-success" role="alert">
        A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>`
      
    }
    else {
        alerts.innerHTML = `<div class="alert alert-danger" role="alert">
        A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>`
    }

setTimeout(()=>{
        alerts.innerHTML = ``
    },2000)
    
}
