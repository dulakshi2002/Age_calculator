function calculateAge(){
    //get input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) -1;
    const year = parseInt(document.getElementById("year").value);

    //check if inputs are valid
    if(!day || !month || !year) {
        document.getElementById("result").textContent = "Please enter a valid date.";
        return;
    }

    //get the current date
    const today = new Date();
    const birthDate = new Date(year, month, day);

    //calculate the age 
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDate() - birthDate.getDate();

    //adjust age if birth date hasn't occured yet this year
    if(m<0 || (m == 0 && d<0)) {
        age--;
    }

    //display result
    document.getElementById("result").textContent = `You are ${age} years old.`;

}