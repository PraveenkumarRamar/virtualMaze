
// let screen1 = document.createElement("button");
// screen1.innerText = "Screen1"
// screen1.addEventListener("click", () => {
//     test.tableStructure();
// })

// let screen2 = document.createElement("button");
// screen2.innerText = "Screen2"
// screen2.addEventListener("click", () => {
//     deploy.tableStructure();
// })


// document.body.append(screen1, screen2);

class Table {
    constructor(
        data = [],
        fetching_data = []) {

        this.data = data;
        this.fetching_data = fetching_data
        this.formContainer = null
    }

    getHeader() {
        let thead = document.createElement("thead")
        let tr = document.createElement("tr")
        tr.style.textAlign = "center"


        this.data.forEach((data, index) => {
            let th = document.createElement("th");
            th.innerText = data.label ? data.label : "-";
            tr.append(th)
        })
        // Object.keys(this.fetching_data[index]).forEach((key)=>{
        //     console.log(key);
        // })
        // this.data.map((datas, index) => {
        //     // if (data.label === undefined) {
        //     //     // d
        //     //     return data.label = "-";
        //     // }
        //     console.log(this.data[index]);
        //     // if(this.data[index].keyId == Object.keys(this.fetching_data[index])){
        //     //     console.log(this.data[index].keyId);
        //     // }



        //     // let th = document.createElement("th");
        //     // th.setAttribute("id", `headerId${index}`)
        //     // th.innerHTML = data.label
        // })

        thead.append(tr)
        // console.log(thead);
        return thead
    }


    // getActionButton(actions,id) {
    //     let button_data = document.createElement("td");
    //     button_data.style.textAlign = "center";

    //     actions.forEach((action,index) => {
    //         let button = document.createElement("button");
    //         button.style.margin = "10px";
    //         button.setAttribute("id",id)
    //         button.innerText = action;
    //         // button.addEventListener("click", () => {
    //         //     deploy.`${action}Data`(id)})
    //         button_data.appendChild(button);
    //     });

    //     return button_data;
    // }
    // getData() {
    //     let tbody = document.createElement('tbody');

    //     this.fetching_data.forEach((data,index) => {
    //         let tr = document.createElement("tr");
    //         tr.setAttribute("id", `row${index}`);

    //         this.data.forEach((item) => {
    //             let td = document.createElement("td");
    //             td.style.textAlign = "center";
    //             td.setAttribute("class", `data${index}`)

    //             td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
    //             // data[item.keyId] == "action" ? return : "-";

    //             tr.append(td)

    //         });

    //         if (Array.isArray(data.action)) {
    //             let buttons = this.getActionButton(data.action,index);
    //             tr.appendChild(buttons);
    //         }
    //         else {
    //             let emptyCell = document.createElement("td");
    //             tr.appendChild(emptyCell);
    //         }
    //         console.log(tr);
    //         tbody.appendChild(tr);
    //     });

    //     return tbody;
    // }


    getData() {
        let tbody = document.createElement('tbody');

        this.fetching_data.forEach((data, index) => {
            let tr = document.createElement("tr");
            tr.setAttribute("id", `row${index}`);

            this.data.forEach((item) => {
                let td = document.createElement("td");
                td.style.textAlign = "center";
                td.setAttribute("class", `data${index}`);

                if (item.keyId !== "action") {
                    td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
                    tr.append(td);
                } else {
                    let buttonsCell = document.createElement("td");
                    buttonsCell.appendChild(this.getActionButton(item.action, index)); // Pass data.id as row ID
                    tr.appendChild(buttonsCell);
                }
            });

            tbody.appendChild(tr);
        });

        return tbody;
    }

    getActionButton(actions, id) {
        let buttonContainer = document.createElement("div"); // Create a container for buttons
        buttonContainer.style.display = "flex"; // Align buttons horizontally
        buttonContainer.style.justifyContent = "center"

        actions.forEach((action) => {
            let button = document.createElement("button");
            button.style.margin = "5px";
            button.setAttribute("id", `${action}_${id}`); // Unique ID for each button based on row ID
            button.innerText = action;

            // Add event listener based on action type
            switch (action) {
                case "Edit":
                    button.addEventListener("click", () => this.editData(id));
                    break;
                case "Delete":
                    button.addEventListener("click", () => this.deleteData(id));
                    break;
                case "Save":
                    button.style.display = "none"; // Hide the Save button initially
                    button.addEventListener("click", () => this.saveData(id));
                    break;
                default:
                    break;
            }

            buttonContainer.appendChild(button);
        });

        return buttonContainer;
    }

    tableStructure() {
        let table = document.createElement("table");
        let headingTable = this.getHeader();
        let dataTable = this.getData();
        table.append(headingTable, dataTable);

        // console.log(table);
        let appBody = document.getElementById("app");
        appBody.innerHTML = ''; // Clear previous content
        appBody.append(table, this.addDataButton()); // Append the table
        console.log(table);
    }

    editData(id) {
        // console.log(`Data edited successfully in  ${id}`);
        let data = document.querySelectorAll(`.data${id}`)

        let fContainer = this.formContainer || this.formData()
        let form = fContainer.querySelector('.form-container')
        // console.log(form);
        form.innerHTML = ''
        fContainer.style.display = "block";
        this.formContainer = fContainer


        let editBtn = document.querySelector(`#Edit_${id}`)
        editBtn.style.display = "none"

        // console.log(editBtn);

        let saveBtn = document.querySelector(`#Save_${id}`)
        saveBtn.style.display = "inline"


        for (let datas of data) {
            // console.log(typeof datas.innerHTML);
            let inputs = datas.innerHTML
            form.innerHTML += `<input type='text' id='text_data${id}' value='${inputs}'/><br><br>`;
            // inputs.setAttribute("type" , "text")
        }
        let ele = document.getElementById("app")
        ele.append(fContainer)
        // document.body.appendChild(fContainer)
    }

    deleteData(id) {
        console.log(id);
        if (confirm("Are you sure you want to delete this item?")) {
            this.fetching_data.splice(id, 1);
            this.tableStructure();
        }
    }

    saveData(id) {
        let input_data = document.querySelectorAll(`#text_data${id}`);
        let table_data = document.querySelectorAll(`.data${id}`);

        // Assuming input_data and table_data have the same length
        input_data.forEach((input, index) => {
            table_data[index].innerHTML = input.value;
        });
        this.closeForm(id)
    }


    formData() {
        let div = document.createElement("div")
        div.setAttribute("class", "forms-section")

        let form = document.createElement("form")
        form.setAttribute("class", "form-container")
        div.append(form)
        return div
    }

    addData() {
        // let data =  document.querySelectorAll(".data0")
        // // for(let d of data){
        // //     i++
        // //     console.log(d.innerHTML);
        // // }


        const title = prompt("Enter title:");
        const description = prompt("Enter description:");
        if ((title.length || description.length) < 0) {
            alert('Fields cannot be empty')
            return
        } else {
            this.fetching_data.push({ title: title, description: description });
        }
        this.tableStructure();

        // console.log(data);
        // // return data
    }
    addDataButton() {
        let addBtn = document.createElement("button")
        addBtn.innerHTML = "Add";
        addBtn.style.textAlign = "center"
        addBtn.addEventListener("click", () => this.addData())
        return addBtn
    }

    closeForm(id) {

        let editBtn = document.querySelector(`#Edit_${id}`)
        editBtn.style.display = "inline"

        // console.log(editBtn);

        let saveBtn = document.querySelector(`#Save_${id}`)
        saveBtn.style.display = "none"

        // let form = document.querySelector(".forms-section")
        this.formContainer.style.display = "none";

    }
}



let deploy = new Table([
    {
        keyId: "title",
        label: "Title",
        // formate() {

        // }
    },
    {
        keyId: "description",
        label: "Description",
        // formate() {

        // }
    }
    , {
        keyId: "reason",
        label: "Reason",
        // action: ["Edit", "Delete", "Save"]

        // formate() {

        // }
    }, {
        keyId: "date",
        label: "Date",
        // action: ["Edit", "Delete", "Save"]
        // formate() {

        // }
    },
    {
        keyId: "action",
        label: "Action",
        action: ["Edit", "Delete", "Save"]

        // formate() {

        // }

    }
],
[
    {
        id: "1",
        title: "title 1",
        description: "Direct",
        reason: "nothing",
        date: 122001
    },
    {
        id: "2",
        title: "title 2",
        description: "Legacy",
        reason: "no reason",
        date: 123002
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "only reason",
        date: 125001
    },
    {
        id: "3",
        title: "title 3",
        description: "Direct",
        reason: "yes yes",
        date: 112001
    }

])

// deploy.getData()
// deploy.tableStructure();


// class Table2 extends Table {
//     constructor(data = [], fetching_data = []) {
//         super(data, fetching_data)
//     }
// }


// let test = new Table([
//     {
//         keyId: "title",
//         label: "Title",
//         // formate() {

//         // }
//     },
//     {
//         keyId: "description",
//         label: "Description",
//         // formate() {

//         // }
//     },
//     {
//         keyId: "action",
//         label: "Action",
//         action: ["Edit", "Delete", "Save"]

//         // formate() {

//         // }
//     }
// ], [
//     {
//         id: "1",
//         title: "title 1",
//         description: "Direct-message",
//     },
//     {
//         id: "2",
//         title: "title 2",
//         description: "Legacy",
//     },
//     {
//         id: "3",
//         title: "title 3",
//         description: "Direct-message",
//     }
// ])
export default Table