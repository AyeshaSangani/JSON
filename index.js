    //  ==============IN TEXT FORM (like abdullah)  ============

// let name = "Abdullah"
// console.log(name);

    //   ============IN STRING FORM (like "addullah")===========

// let name2 = JSON.stringify(name);
// console.log(name2)


function submitdata(){

    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let password = document.getElementById("password").value 

    let name1 = JSON.stringify(name)
    console.log(name1);

    let email1 = JSON.stringify(email)
    console.log(email1);

    let password1 = JSON.stringify(password)
    console.log(password1);
}

