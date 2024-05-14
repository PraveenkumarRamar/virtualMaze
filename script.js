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

        // console.log(this.data);
        // console.log(this.fetching_data);
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


    // getData() {
    //     let tbody = document.createElement('tbody');

    //     this.fetching_data.forEach((data, index) => {
    //         let tr = document.createElement("tr");
    //         tr.setAttribute("id", `row${index}`);

    //         this.data.forEach((item) => {
    //             let td = document.createElement("td");
    //             td.style.textAlign = "center";
    //             td.setAttribute("class", `data${index}`);

    //             if (item.keyId !== "action") {
    //                 td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
    //                 tr.append(td);
    //             } else {
    //                 let buttonsCell = document.createElement("td");
    //                 buttonsCell.appendChild(this.getActionButton(item.action, index)); // Pass data.id as row ID
    //                 tr.appendChild(buttonsCell);
    //             }
    //         });

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
                    // td.innerText = data[item.keyId] !== undefined ? data[item.keyId] : "-";
                    if (data[item.keyId] !== undefined) {
                        if (item.type == "checkbox") {
                            // console.log(data[item.keyId]);
                            let len = data[item.keyId].length;
                            for (let i = 0; i < len; i++) {
                                // if()
                                // console.log(data[item.keyId][i]);
                                let input = document.createElement("input");
                                input.setAttribute("type", item.type);
                                input.classList.add(`input_select_data${index}`)
                                input.setAttribute("name", data[item.keyId][i].status);
                                input.setAttribute("value", data[item.keyId][i].status);
                                input.checked = data[item.keyId][i].isSelected ? true : false;
                                // input.style.display = data[item.keyId][i].isSelected ? "inline" : "none"
                                td.appendChild(input);
                                let label = document.createElement("label");
                                label.innerText = data[item.keyId][i].status;
                                // label.style.display = data[item.keyId][i].isSelected ? "inline" : "none"
                                td.appendChild(label);
                            }


                            // td.innerHTML = `  
                            // <input type="${item.type}" ${data.isChecked ? "checked" : ""} class="text_data${index}" id="text-input-data${index}" name="${data[item.keyId]}"  value="${data[item.keyId]}">
                            // <label for="text-input-data${index}">${data[item.keyId]}</label>`
                        } 
                        
                        else if (item.type == "radio") {
                            let len = data[item.keyId].length;
                            for (let i = 0; i < len; i++) {
                                // if()
                                // console.log(data[item.keyId][i]);
                                let input = document.createElement("input");
                                input.setAttribute("type", item.type);
                                input.classList.add(`input_radio_data${index}`)
                                input.setAttribute("name", `data${index}`);
                                input.setAttribute("value", data[item.keyId][i].gender);
                                input.checked = data[item.keyId][i].isChecked ? true : false;
                                // console.log(data[item.keyId][i].isChecked);
                                // input.style.display = data[item.keyId].isChecked ? "inline" : "none"
                                td.appendChild(input);
                                let label = document.createElement("label");
                                label.innerText = data[item.keyId][i].gender;
                                // label.style.display = data[item.keyId][i].isChecked ? "inline" : "none"
                                td.appendChild(label);
                            }
                        } else if (item.type == "select") {

                            let selectElement = document.createElement("select");
                            selectElement.setAttribute("name", "table");
                            selectElement.classList.add(`select_data${index}`)
                            selectElement.setAttribute("id", "table-select-element");
                            td.appendChild(selectElement)

                            let len = data.selectValue.length
                            // console.log(len);
                            for (let i = 0; i < len; i++) {
                                let option = document.createElement("option");
                                option.setAttribute("value", data.selectValue[i]);
                                option.innerText = data.selectValue[i]
                                selectElement.appendChild(option);
                            }
                        }
                        else {
                            td.innerHTML = data[item.keyId]
                        }
                    } else {
                        td.innerHTML = '-'
                    }
                    tr.append(td);
                } else {
                    let buttonsCell = document.createElement("td");
                    buttonsCell.appendChild(this.getActionButton(item.action, index)); // Pass data.id as row ID
                    tr.appendChild(buttonsCell);
                }
            });

            tbody.appendChild(tr);
        });

        let id = this.fetching_data.length
        // console.log(id);

        // Add a new row for adding data
        let newRow = document.createElement("tr");
        newRow.setAttribute("id", `row${id}`);
        this.data.forEach((item) => {
            let td = document.createElement("td");
            td.style.textAlign = "center";
            td.setAttribute("class", `data${id}`)

            if (item.keyId !== "action") {
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("class", `text_data${id}`);
                input.setAttribute("placeholder", item.label);
                td.appendChild(input);
                newRow.appendChild(td);
            } else {
                let addButton = document.createElement("button");
                addButton.id = id
                addButton.classList.add('row-action-btn')
                addButton.innerText = "Add";
                td.appendChild(addButton);

                newRow.appendChild(td);
            }
        });
        id++;

        tbody.appendChild(newRow);

        return tbody;
    }



    addData(id) {
        // let data =  document.querySelectorAll(".data0")
        // // for(let d of data){
        // //     i++
        // //     console.log(d.innerHTML);
        // // }


        // let addRowBtn = document.getElementById(`row${id}`)
        // console.log(addRowBtn);

        // addRowBtn.style.display = "block"
        let inputElements = document.querySelectorAll(`.text_data${id}`);
        console.log(inputElements);
        let newData = {};

        // console.log(inputElements, 'inputElements');

        inputElements.forEach((input, index) => {
            let keyId = this.data[index].keyId;
            // console.log(keyId, 'keyy');
            newData[keyId] = input.value;
            console.log(input.value);
        });

        this.fetching_data.push(newData);
        this.tableStructure();


        // const title = prompt("Enter title:");
        // const description = prompt("Enter description:");
        // if ((title.length || description.length) < 0) {
        //     alert('Fields cannot be empty')
        //     return
        // } else {
        //     this.fetching_data.push({ title: title, description: description });
        // }
        // this.tableStructure();

        // console.log(data);
        // // return data
    }

    // addDataButton() {

    //     let id = this.fetching_data.length

    //     let addBtn = document.createElement("button")
    //     addBtn.innerHTML = "Add";
    //     addBtn.style.textAlign = "center"
    //     addBtn.addEventListener("click",()=>this.addData())
    //     // console.log(addRowBtn);
    //     // addBtn.style.display = "none"

    //     return addBtn
    // }

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
        appBody.append(table); // Append the table
        // console.log(table);

        // let add_btn =  this.addDataButton() 

        // appBody.append(add_btn)


        let add_btn_event = document.querySelector('.row-action-btn')
        add_btn_event?.addEventListener('click', () => {

            this.addData(add_btn_event.id)
        })
    }

    editData(id) {

        let data = document.querySelector(`#row${id}`)
        let td_cells = data.querySelectorAll(`.data${id}`)
        // console.log(td_cells);

        for (let i = 0; i < td_cells.length; i++) {


        }


        // for (let i = 0; i < data.length; i++) {
        //     data[i].innerHTML = `<input type='text' id='text_data${id}' value='${data[i].innerHTML}'/>`
        // }

        let editBtn = document.querySelector(`#Edit_${id}`)
        editBtn.style.display = "none"

        // console.log(editBtn);

        let saveBtn = document.querySelector(`#Save_${id}`)
        saveBtn.style.display = "inline"


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


        let newData = {};

        // Assuming input_data and table_data have the same length
        input_data.forEach((input, index) => {
            let keyId = this.data[index].keyId;
            // console.log(keyId, 'keyy');
            newData[keyId] = input.value;
            table_data[index].innerHTML = input.value;
        });
        // this.tableStructure();
        this.fetching_data.push(newData);

        // this.closeForm(id)
    }


    formData() {
        let div = document.createElement("div")
        div.setAttribute("class", "forms-section")

        let form = document.createElement("form")
        form.setAttribute("class", "form-container")
        div.append(form)
        return div
    }



    // closeForm(id) {

    //     let editBtn = document.querySelector(`#Edit_${id}`)
    //     editBtn.style.display = "inline"

    //     // console.log(editBtn);

    //     let saveBtn = document.querySelector(`#Save_${id}`)
    //     saveBtn.style.display = "none"

    //     // let form = document.querySelector(".forms-section")
    //     this.formContainer.style.display = "none";

    // }
}



let deploy = new Table([
    {
        keyId: "title",
        label: "Title",
        type: "select",
        // formate() {

        // }
    },
    {
        keyId: "status",
        label: "Status",
        type: "checkbox",
        // formate() {

        // }
    }
    , {
        keyId: "gender",
        label: "Gender",
        type: "radio",

        // action: ["Edit", "Delete", "Save"]

        // formate() {

        // }
    }, {
        keyId: "date",
        label: "Date",
        type: "number"
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
            title: "title 1",
            selectValue: ["Title-1", "Heading-1"],
            status: [{
                status: true,
                isSelected: false
            }, {
                status: false,
                isSelected: true
            }],

            gender: [{
                gender: "male",
                isChecked: false,
            },{
                gender: "female",
                isChecked: true,
            }],
            date: 122001
        },
        {
            title: "title 2",
            selectValue: ["Title-2", "Heading-2"],
            status: [{
                status: true,
                isSelected: true
            }, {
                status: false,
                isSelected: false
            }],

            gender: [{
                gender: "male",
                isChecked: true,
            }, {
                gender: "female",
                isChecked: false,
            }],
            date: 123002
        },
        {
            title: "title 3",
            selectValue: ["Title-3", "Heading-3"],
            status: [{
                status: true,
                isSelected: false
            }, {
                status: false,
                isSelected: true
            }],

            gender: [{
                gender: "male",
                isChecked: false,
            }, {
                gender: "female",
                isChecked: true,
            }],
            date: 125001
        },
        {
            title: "title 4",
            selectValue: ["Title-4", "Heading-4"],
            status: [{
                status: true,
                isSelected: true
            }, {
                status: false,
                isSelected: false
            }],

            gender: [{
                gender: "male",
                isChecked: true,
            }, {
                gender: "female",
                isChecked: false,
            }],
            date: 112001
        }

    ])

deploy.tableStructure()
export default Table