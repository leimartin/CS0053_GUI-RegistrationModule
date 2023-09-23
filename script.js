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

    // validating form fields
    var name = document.getElementById('name').value;
    var course = document.getElementById('course').value;
    var year = document.getElementById('year').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;

    //  checking if all of the required fields are not empty
    if ( name === '' || course === '' || year === '' || !gender || 
        address === '' || email === '' || contact === '' ) {
        alert('Please complete all required fields.');
        return;
    } else {
        var participant = {
            name : name,
            course :course,
            year : year,
            gender : gender,
            address : address,
            email : email,
            contact : contact
        }    
            participantData.push(participant);

            // displays data in the console & returns a confirmation message
            console.log("Participant Data:\n", participantData); 
            alert('Thank you!\nYour registration has been sent.');

            registrationForm.reset(); 
        
    }
    
});

function clearButton() {
    registrationForm.reset();
}
