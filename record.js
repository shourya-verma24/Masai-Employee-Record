// fill in javascript code here
// Role should be given dynamically based on input (make sure role is written in same format, it is case sensitive)
// Senior, if experience > 5 years
// Junior, if experience is between 2 and 5 years
// Fresher, if experience is less than or equal to 1 year

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    
    
    let nam = document.getElementById("name").value
    let employeeID = document.getElementById("employeeID").value
    let department = document.getElementById("department").value
    let experience = document.getElementById("exp").value
    let email = document.getElementById("email").value
    let mobile = document.getElementById("mbl").value
    console.log(nam,employeeID,department,experience,email,mobile)

    //append the data on table body by making row//
    let tbody = document.getElementById("table_body")
    
    let tr = document.createElement("tr")
    tr.id = "table_row"

    ///data 

    let tname  = document.createElement("td")
    tname.textContent= nam
    let temployeeID =  document.createElement("td")
    temployeeID.textContent = employeeID
    let tdepartment = document.createElement("td")
    tdepartment.textContent = department
    let texperience = document.createElement("td")
    texperience.textContent = experience
    let temail = document.createElement("td")
    temail.textContent = email
    let tmobile = document.createElement("td")
    tmobile.textContent = mobile
    let trole = document.createElement("td")
    if(experience>5){
        trole.textContent = "Senior"
    }
    else if(experience>2 && experience<5){
        trole.textContent = "Junior"
    }
    else{
        trole.textContent = "Fresher"
    }
    let tdel = document.createElement("button")
    tdel.textContent= "Delete Button"
    tdel.addEventListener("click", function() {
        this.closest('tr').remove();   ////Important to be observed
    });

    tr.append(tname,temployeeID,tdepartment,texperience,temail,tmobile,trole,tdel)
    tbody.append(tr)


})


