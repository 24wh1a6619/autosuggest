const image = document.getElementById("user-img");
const nameText = document.getElementById("user-name");
const genderText = document.getElementById("user-gender");
const toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", function () {

    if (genderText.textContent === "Male") {

        image.src="../images/jane.png";
        nameText.textContent = "Jane Doe";
        genderText.textContent = "Female";

    } else {

        image.src = "../images/john.png";
        nameText.textContent = "John Doe";
        genderText.textContent = "Male";

    }

});







/*var users=[
    {

        "name" : "Jhon Doe",
        "gender" : "Male"
        "image" : "/images/jhon.png"

    },

    {

        "name" : "Jane Doe",
        "gender" : "Female"
        "image" : "/images/jane.png"

    }
]

var curId=0;
function toggle(){
    //toggle curId from 0 -> 1 & 1 -> 0
    curId=(curId+1)%2;

    var user=users[curId];
    document.getElementById("user-img").src=user.image;

    //updating gender and name
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
}*/