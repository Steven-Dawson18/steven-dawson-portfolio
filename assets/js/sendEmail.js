function sendMail(contactForm) {
    var templateParams = {
        from_email: document.getElementById("emailaddress").value,
        message: document.getElementById("projectsummary").value,
        from_name: document.getElementById("fullname").value
    };

    emailjs.send('service_evux4oc', 'Rosie', templateParams)

        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
        return false;
}