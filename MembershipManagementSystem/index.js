const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "form.html");
});

app.post('/submit', (req, res) => {
    const formData = req.body;

    let mamount = 0;
    let iamount = 0;

    if (formData.mtype === 'New') {
        mamount = 1000;
    } else if (formData.mtype === 'Renew') {
        mamount = 750;
    } else {
        mamount = 0;
    }

    const selectedInterests = Array.isArray(formData.interest) ? formData.interest : [formData.interest];
    for (const interest of selectedInterests) {
        if (interest === 'Presentation') {
            iamount += 3000;
        } else if (interest === 'Publication') {
            iamount += 5000;
        } else if (interest === 'Presentation/Publication') {
            iamount += 7000;
        } else if (interest === 'Reviewer') {
            iamount += 2000;
        } else if (interest === 'Organizer') {
            iamount += 500;
        } else {
            iamount += 0;
        }
    }

    const tamount = mamount + iamount;

    res.send(`
        <h1>Form Submission Received</h1>
        <p>Member ID: ${formData.ID}</p>
        <p>Fullname: ${formData.fullname}</p>
        <p>Gender: ${formData.gender}</p>
        <p>Status: ${formData.status}</p>
        <p>Religion: ${formData.religion}</p>
        <p>Citizenship: ${formData.citizenship}</p>
        <p>Type of Membership: ${formData.membership_type}</p>
        <p>Year of Membership: ${formData.year_of_membership}</p>
        <p>School Affiliated: ${formData.school_affiliated}</p>
        <p>Interest: ${selectedInterests.join(', ')}</p>
        <p>Total Amount: ${tamount}</p>
    `); 
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});