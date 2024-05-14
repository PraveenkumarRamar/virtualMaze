// // Creating a class
// class CRUDTable {
//     // Create a Constructor

//     constructor(containerId) {
//         this.container = document.getElementById(containerId);
//         this.data = [
//             {
//                 name: "PraveenKumar",
//                 email: "praveen@gmail.com"
//             }, {
//                 name: "Ragul",
//                 email: "ragul@gmail.com"
//             }];
//         this.heading = [
//             {
//                 title: "Name"
//             }, {
//                 title: "Email"
//             }, {
//                 title: "Action"
//             }
//         ]
//         this.action = [{
//             title: "Edit",
//             act: "edit",
//             btn: "btn btn-primary"
//         }, {
//             title: "Delete",
//             act: "delete",
//             btn: "btn btn-danger"
//         }
//         ]
//     }
//     getHeader() {
//         return `<thead>
//         <tr>
//             ${this.heading.map((items, index) =>
//             `<th>${items.title}</th>`)}
//         </tr>
//     </thead>`
//     }

//     getRowData() {
//         return 
//         let tbody = document.createElement("tbody")
//         tbody.innerHTML = `${this.data.map((item, index) => `
//         <tr id="${index}">
//             <td id="name_row${index}">${item.name}</td>
//             <td id="email_row${index}">${item.email}</td>
//             <td>
//             ${this.action.map((actions) => `
//             <button class="${actions.btn} m-2" onclick="crudTable.${actions.act} (${index})">${actions.title}</button>
//             `).join(" ")}
//             </td>
//         </tr>
//     `).join('')}`
        
//     }

//     render() {

//         // let table = document.createElement('table')
//         // table.append(this.getHeaderData(), this.getRowData())
//         // return table
//         this.container.innerHTML = `<table class="table table-striped">
//                     ${this.getHeader,this.getRowData}
//                     </table>
//                     <div class=" text-center">    
//                             <button class="btn btn-warning" onclick="crudTable.create()">Add New</button>
//                     </div>
//                 `;
//     }

//     create() {
//         const name = prompt("Enter name:");
//         const email = prompt("Enter email:");
//         this.data.push({ name, email });
//         this.render();
//     }

//     edit(index) {

//         let name = document.getElementById("name_row" + index)
//         let email = document.getElementById("email_row" + index)

//         // let nameValue = c
//         // let emailValue = email.innerHTML

//         // console.log(nameValue,emailValue);

//         name.innerHTML = `<input type='text' id='name_text${index}' value=' ${this.data[index].name}'>`
//         email.innerHTML = `<input type='text' id='email_text${index}' value=' ${this.data[index].email}'>`

//         console.log(this.data[index].name);

//         // const newName = prompt("Enter new name:", this.data[index].name);
//         // const newEmail = prompt("Enter new email:", this.data[index].email);
//         // this.data[index] = { name: nameValue, email: emailValue };
//         this.render();
//     }

//     save(index) {
//         let nameInput = document.getElementById("name_text" + index).value
//         let emailInput = document.getElementById("email_text" + index).value

//         console.log(nameInput, emailInput);

//         document.getElementById("name_row" + index).innerHTML = nameInput
//         document.getElementById("email_row" + index).innerHTML = emailInput
//         // console.log(name,email);
//     }

//     delete(index) {
//         if (confirm("Are you sure you want to delete this item?")) {
//             this.data.splice(index, 1);
//             this.render();
//         }
//     }
// }

// const crudTable = new CRUDTable('app');
// crudTable.render();

// // export default CRUDTable

var selectedRow = null

var headingOne = document.getElementById('headingOne');
var headingTwo = document.getElementById('headingTwo');
var headingThree = document.getElementById('headingThree');
var headingFour = document.getElementById('headingFour');
var headingFive = document.getElementById('headingFive');

var ListHeadingOne = document.getElementById('ListHeadingOne');
var ListHeadingTwo = document.getElementById('ListHeadingTwo');
var ListHeadingThree = document.getElementById('ListHeadingThree');
var ListHeadingFour = document.getElementById('ListHeadingFour');
var ListHeadingFive = document.getElementById('ListHeadingFive');

headingOne.innerHTML = "Full Name";
headingTwo.innerHTML = "Staff Number";
headingThree.innerHTML = "Position";
headingFour.innerHTML = "Cell Number";
headingFive.innerHTML = "Email";

ListHeadingOne.innerHTML = headingOne.innerHTML;
ListHeadingTwo.innerHTML = headingTwo.innerHTML;
ListHeadingThree.innerHTML = headingThree.innerHTML;
ListHeadingFour.innerHTML = headingFour.innerHTML;
ListHeadingFive.innerHTML = headingFive.innerHTML;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fieldOne"] = document.getElementById("fieldOne").value;
    formData["fieldTwo"] = document.getElementById("fieldTwo").value;
    formData["fieldThree"] = document.getElementById("fieldThree").value;
    formData["fieldFour"] = document.getElementById("fieldFour").value;
    formData["fieldFive"] = document.getElementById("fieldFive").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tableList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fieldOne;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fieldTwo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fieldThree;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fieldFour;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fieldFive;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`
}

function resetForm() {
    document.getElementById("fieldOne").value = "";
    document.getElementById("fieldTwo").value = "";
    document.getElementById("fieldThree").value = "";
    document.getElementById("fieldFour").value = "";
    document.getElementById("fieldFive").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fieldOne").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fieldTwo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fieldThree").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fieldFour").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fieldFive").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fieldOne;
    selectedRow.cells[1].innerHTML = formData.fieldTwo;
    selectedRow.cells[2].innerHTML = formData.fieldThree;
    selectedRow.cells[3].innerHTML = formData.fieldFour;
    selectedRow.cells[4].innerHTML = formData.fieldFive;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex);
        resetForm();
    }
}