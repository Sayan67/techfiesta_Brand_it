
var totalBooks =0 
var totalIssuedBooks = 0

document.getElementById('totalBooks').innerHTML = "Total Books :"+localStorage.getItem("totalBooks");
document.getElementById('issuedBooks').innerHTML = "Issued Books :"+localStorage.getItem("totalIssues");

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let formData = new FormData(this);
  
    let formDataObj = {};
    formData.forEach(function(value, key){
      formDataObj[key] = value;
    });
    totalBooks = formDataObj.books;
    localStorage.setItem("totalBooks", totalBooks);
    document.getElementById('totalBooks').innerHTML = "Total Books :"+totalBooks;

  });


  document.getElementById("issuedBooks").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let data = new FormData(this);
  
    let allIssues = {};
    data.forEach(function(value, key){
        allIssues[key] = value;
    });
    totalIssuedBooks = allIssues.books;
    console.log("hello");
    console.log(allIssues.issue);
    localStorage.setItem("totalIssues", totalIssuedBooks);
    document.getElementById('totalBooks').innerHTML = "Total Books :"+totalIssuedBooks;

  });


