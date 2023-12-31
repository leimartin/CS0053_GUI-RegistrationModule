// CS0053 - Technical 2 Source Code for 1T AY 2023-2024
/*
    Program:        GUI-Based Registration Module
    Programmer(s): 
                    Vassili L. Inacay (L)
                    Katryna Lei V. Martin 
    Section:        AN31
    Start Date:     September 21, 2023
    End Date:       September 24, 2023
*/

const registrationForm = document.getElementById('registration-form');

// stores the participants' data
var participantData = [];

registrationForm.addEventListener('submit', function (event) {

    event.preventDefault(); 

    // declaration to be validated
    var name = document.getElementById('name').value;
    var program = document.getElementById('program').value;
    var year = document.getElementById('year').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;

    var participant = {
        name : name,
        program : program,
        year : year,
        gender : gender,
        address : address,
        email : email,
        contact : contact
    }

    //  checking if all of the required fields are not empty
    if ( name === '' || program === '' || year === '' || !gender || 
        address === '' || email === '' || contact === '' ) {
        alert('Please complete all required fields.');
        return;
    } else {    
        participantData.push(participant);

        // displays data in the console & returns a confirmation message
        console.log("Participant Data:\n", participantData); 
        alert('Thank you!\nYour registration has been sent.');
    }

    registrationForm.reset(); 
});

function clearButton() {
    registrationForm.reset();
}
