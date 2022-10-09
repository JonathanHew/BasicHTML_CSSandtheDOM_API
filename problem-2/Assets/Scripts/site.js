let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let msg = document.getElementById("msg");

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
    }
};

let data = {};

let acceptData = () => {
    
};