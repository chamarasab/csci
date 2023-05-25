function findAge() {
    let userinput = document.getElementById("dob").value;
    let dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        document.getElementById("result").value = "**Choose a date please!";
        return false;
    } else {

        //calculate month difference from current date in time  
        let month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format  
        let age_dt = new Date(month_diff);

        //extract year from date      
        let year = age_dt.getUTCFullYear();

        //now calculate the age of the user  
        let age = Math.abs(year - 1970);

        //display the calculated age  
        return document.getElementById("result").value =
            "Age is: " + age + " years. ";
    }
}
