let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let msg = document.getElementById("msg");
let bodyInput = document.getElementById("bodyInput");
let colorInput = document.getElementById("colorInput");
let notes = document.getElementById("notes");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () =>{
    if(titleInput.value === "")
    {
        console.log("Failure!!");
        msg.innerHTML = "Title cannot be blank";
    }
    else
    {
        console.log("Success!!");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["title"] = titleInput.value;
    data["body"] = bodyInput.value;
    data["color"] = colorInput.value;

    console.log(data)
    createNotes();
};

let createNotes = () => {
    notes.innerHTML += `
    <div>
        <span class="fw-bold">${data.title}</span>
        <p>${data.body}</p>
        <span class="options">
        <button name="edit" type="button">Edit</button>
        <button name="delete" type="button">Delete</button> 
        </span>
    </div>
    `;
};