// var totalBooks = 0;
// var totalIssuedBooks =0;
// document.getElementById('totalBooks').innerHTML = "Total Books :"+localStorage.getItem("totalBooks");
// document.getElementById('allIssuedBooks').innerHTML = "Issued Books :"+localStorage.getItem("totalIssues");

// localStorage.setItem("totalBooks", totalBooks);
// localStorage.setItem("totalIssues", totalIssuedBooks);

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 
//     let formData = new FormData(this);
  
//     let formDataObj = {};
//     formData.forEach(function(value, key){
//       formDataObj[key] = value;
//     });
//     totalBooks = parseInt(formDataObj.books);
//     localStorage.setItem("totalBooks", totalBooks);
//     document.getElementById('totalBooks').innerHTML = "Total Books :"+totalBooks- totalIssuedBooks;

//   });


//   var numOfIssues = document.getElementById('issuedBooks').addEventListener('submit',function(){
//     totalIssuedBooks+=1;
//     totalBooks = parseInt(localStorage.getItem("totalBooks"))-totalIssuedBooks;
//     console.log(totalIssuedBooks);
//     localStorage.setItem("totalIssues", totalIssuedBooks);
//     document.getElementById('allIssuedBooks').innerHTML = "Issued Books :"+(totalIssuedBooks) ;
//     document.getElementById('totalBooks').innerHTML = "Total Books :"+(totalBooks) ;
//     localStorage.setItem("totalBooks", totalBooks);
//   })



// //   document.getElementById("issuedBooks").addEventListener("submit", function(event) {
// //     event.preventDefault(); 
// //     let data = new FormData(this);
  
// //     let allIssues = {};
// //     data.forEach(function(value, key){
// //         allIssues[key] = value;
// //     });
// //     totalIssuedBooks = allIssues.issue;
// //     console.log("hello");
// //     console.log(allIssues.issue);
// //     localStorage.setItem("totalIssues", totalIssuedBooks);
// //     document.getElementById('totalBooks').innerHTML = "Total Books :"+totalIssuedBooks;

// //   });


var totalBooks = localStorage.getItem("totalBooks") || 0;
        var totalIssuedBooks = localStorage.getItem("totalIssues") || 0;

        document.getElementById('totalBooks').innerHTML = "Total Books : " + totalBooks;
        document.getElementById('issuedBooks').innerHTML = "Issued Books : " + totalIssuedBooks;

        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); 
            let formData = new FormData(this);
          
            let formDataObj = {};
            formData.forEach(function(value, key){
              formDataObj[key] = value;
            });
            totalBooks = formDataObj.books;
            localStorage.setItem("totalBooks", totalBooks);
            document.getElementById('totalBooks').innerHTML = "Total Books : " + totalBooks;
        });

        document.getElementById("issuedBooksForm").addEventListener("submit", function(event) {
            event.preventDefault(); 
            let data = new FormData(this);
          
            let allIssues = {};
            data.forEach(function(value, key){
                allIssues[key] = value;
            });
            let issuedCount = allIssues.issue;
            if(issuedCount>totalBooks){
                alert("Not possible");
                return;
            }
            if(totalBooks!=0){

                totalIssuedBooks = parseInt(totalIssuedBooks) + parseInt(issuedCount);
            }
            if(totalBooks>0){

                totalBooks -= issuedCount;
            }
            localStorage.setItem("totalIssues", totalIssuedBooks);
            localStorage.setItem("totalBooks", totalBooks);
            document.getElementById('issuedBooks').innerHTML = "Issued Books : " + totalIssuedBooks;
            document.getElementById('totalBooks').innerHTML = "Total Books : " + totalBooks;
        });