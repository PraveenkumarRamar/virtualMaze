class Table {
    constructor() {
        this.tableData = [
            {
                label: "Movie",
                name: "Vikram 2",
                year: 2022
            },
            {
                label: "Year",
                name: "KGF",
                year: 2019
            },
            {
                name: "Billa",
                year: 2010
            },
            {
                label: "Action",
                actions: ["Edit", "Delete", "Save"]
            }
        ];

        this.formContainer = this.formData();
        this.formContainer.style.display = "none"; // Hide form initially
    }

    getHeader() {
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");
        tr.style.textAlign = "center";

        this.tableData.forEach((data, index) => {
            if (data.label !== undefined) {
                let th = document.createElement("th");
                th.setAttribute("id", `headerId${index}`);
                th.innerHTML = data.label;
                tr.append(th);
            }
        });
        thead.append(tr);
        return thead;
    }

    getActionButton(id_value) {
        let button_data = document.createElement("td");
        button_data.style.textAlign = "center";

        this.tableData.forEach((data) => {
            if (data.actions !== undefined) {
                let edit_button = document.createElement("button");
                edit_button.style.margin = "10px";
                edit_button.innerText = data.actions[0];
                edit_button.className = `editBtn${id_value}`;
                edit_button.addEventListener("click", () => {
                    this.editData(id_value);
                });

                let delete_button = document.createElement("button");
                delete_button.style.margin = "10px";
                delete_button.innerText = data.actions[1];
                delete_button.className = `deleteBtn${id_value}`;
                delete_button.addEventListener("click", () => {
                    this.deleteData(id_value);
                });

                let save_button = document.createElement("button");
                save_button.style.margin = "10px";
                save_button.innerText = data.actions[2];
                save_button.className = `saveBtn${id_value}`;
                save_button.style.display = "none";
                save_button.addEventListener("click", () => {
                    this.saveData(id_value);
                });

                button_data.append(edit_button, delete_button, save_button);
            }
        });

        return button_data;
    }

    getData() {
        let tbody = document.createElement('tbody');
        this.tableData.forEach((data, index) => {
            if (data.name !== undefined) {
                let tr = document.createElement("tr");
                tr.setAttribute("id", `row${index}`);

                let movie_data = document.createElement("td");
                movie_data.style.textAlign = "center";
                movie_data.setAttribute("class", `data${index}`);
                movie_data.innerHTML = data.name;

                let year_data = document.createElement("td");
                year_data.style.textAlign = "center";
                year_data.setAttribute("class", `data${index}`);
                year_data.innerHTML = data.year || '-';

                let buttons = this.getActionButton(index);

                tr.append(movie_data, year_data, buttons);
                tbody.append(tr);
            }
        });
        return tbody;
    }

    tableStructure() {
        let table = document.createElement("table");
        let headingTable = this.getHeader();
        let dataTable = this.getData();
        table.append(headingTable, dataTable);

        let appBody = document.getElementById("app");
        appBody.innerHTML = ''; // Clear previous content
        appBody.append(table, this.formContainer); // Append the table and form container

        this.setupForm(); // Setup form event listeners
    }

    setupForm() {
        let form = this.formContainer.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let name = form.querySelector("#movieName").value;
            let year = form.querySelector("#movieYear").value;
            this.addNewRow(name, year);
        });

        let cancelBtn = this.formContainer.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", () => {
            this.closeForm();
        });
    }

    addNewRow(name, year) {
        if (name.trim() === "" || isNaN(year)) {
            alert("Please enter valid data.");
            return;
        }

        this.tableData.push({ name, year: parseInt(year) });
        this.tableStructure();
        this.closeForm();
    }

    editData(id) {
        // console.log(`Data edited successfully in  ${id}`);
        let data = document.querySelectorAll(`.data${id}`)

        let fContainer = this.formContainer || this.formData()
        let form = fContainer.querySelector('.form-container')
        form.innerHTML = ''
        this.formContainer = fContainer


        let editBtn = document.querySelector(`.editBtn${id}`)
        editBtn.style.display = "none"

        // console.log(editBtn);

        let saveBtn = document.querySelector(`.saveBtn${id}`)
        saveBtn.style.display = "inline"


        for (let datas of data) {
            // console.log(typeof datas.innerHTML);
            let inputs = datas.innerHTML
            form.innerHTML += `<input type='text' id='text_data${id}' value='${inputs}'/><br><br>`;
            // inputs.setAttribute("type" , "text")
        }
        let ele = document.getElementById("app")
        ele.append(fContainer)
    }

    deleteData(id) {
        if (confirm("Are you sure you want to delete this item?")) {
            this.tableData.splice(id, 1);
            this.tableStructure();
        }
    }

    saveData(id) {
        let input_name = this.formContainer.querySelector("#movieName").value;
        let input_year = this.formContainer.querySelector("#movieYear").value;

        if (input_name.trim() === "" || isNaN(input_year)) {
            alert("Please enter valid data.");
            return;
        }

        this.tableData[id].name = input_name;
        this.tableData[id].year = parseInt(input_year);
        this.tableStructure();
        this.closeForm();
    }

    closeForm() {
               
        let editBtn = document.querySelector(`.editBtn${id}`)
        editBtn.style.display = "inline"

        // console.log(editBtn);

        let saveBtn = document.querySelector(`.saveBtn${id}`)
        saveBtn.style.display = "none"

        let form = document.querySelector(".forms-section")
        form.style.display="none";
    }

    formData() {
        let div = document.createElement("div");
        div.setAttribute("class", "forms-section");

        let form = document.createElement("form");
        form.setAttribute("class", "form-container");
        form.innerHTML = `
            <input type="text" id="movieName" placeholder="Enter movie name">
            <input type="text" id="movieYear" placeholder="Enter year">
            <button type="submit">Add</button>
            <button type="button" id="cancelBtn">Cancel</button>
        `;
        div.append(form);
        return div;
    }
}

let deploy = new Table();
deploy.tableStructure();


editData(id) {
    // Get the form container or create a new one if it doesn't exist
    let fContainer = this.formContainer || this.formData();
    let form = fContainer.querySelector('.form-container');

    // Update the form container reference
    this.formContainer = fContainer;

    // Hide the edit button and show the save button
    let editBtn = document.querySelector(`.editBtn${id}`);
    let saveBtn = document.querySelector(`.saveBtn${id}`);
    editBtn.style.display = "none";
    saveBtn.style.display = "inline";

    // Get the data to edit
    let data = document.querySelectorAll(`.data${id}`);

    // Update existing input fields with data values
    let inputs = form.querySelectorAll('input[type="text"]');
    data.forEach((item, index) => {
        inputs[index].value = item.innerHTML;
    });

    // Append the form container to the app element
    let appElement = document.getElementById("app");
    appElement.append(fContainer);
}
