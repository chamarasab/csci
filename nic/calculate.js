function calculateAndDisplayBirthDate() {
    var nicNumber = document.getElementById('nic').value;

    function calculateBirthDate(nicNumber) {
      // Extract birth year
      var birthYear = "19" + nicNumber.substr(0, 2);

      // Extract gender identifier
      var genderIdentifier = parseInt(nicNumber.substr(2, 3));

      // Check if the second three digits are greater than 500
      if (genderIdentifier > 500) {
        genderIdentifier -= 500;
      }

      // Table of months with static numbers
      var monthTable = [
        { month: 'January', days: 31, static_number: 31 },
        { month: 'February', days: 29, static_number: 60 },
        { month: 'March', days: 31, static_number: 91 },
        { month: 'April', days: 30, static_number: 121 },
        { month: 'May', days: 31, static_number: 152 },
        { month: 'June', days: 30, static_number: 182 },
        { month: 'July', days: 31, static_number: 213 },
        { month: 'August', days: 31, static_number: 244 },
        { month: 'September', days: 30, static_number: 274 },
        { month: 'October', days: 31, static_number: 305 },
        { month: 'November', days: 30, static_number: 335 },
        { month: 'December', days: 31, static_number: 366 }
      ];

      // Find the nearest value in the table for gender identifier
      var nearestStaticNumber = monthTable.find(function(month) {
        return month.static_number > genderIdentifier;
      });

      // Subtract the nearest static number to get the birth date
      var birthDate = genderIdentifier - nearestStaticNumber.static_number + nearestStaticNumber.days;

      // Find the corresponding birth month
      var birthMonth = monthTable.find(function(month) {
        return month.static_number === nearestStaticNumber.static_number;
      }).month;

      // Return the calculated birth date in the format: YYYY-MM-DD
      return birthYear + "-" + birthMonth + "-" + birthDate;
    }

    var birthDate = calculateBirthDate(nicNumber);

    // Display the calculated birth date
    document.getElementById('result').innerText = "Birth Date: " + birthDate;
  }