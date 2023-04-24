export const sendEmail=(to,subject,text)=> {
    const data = {
      to: to, // replace with the recipient's email address
      subject: subject, // replace with the email subject
      text: text, // replace with the email body
      from:'gocha.berulava@gmail.com'
    };
      const token = localStorage.getItem('token'); // replace with your own token retrieval method
      fetch('https://studenthunt.herokuapp.com/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          alert('Email sent successfully!');
        })
        .catch(error => {
          console.error(error);
          alert('Failed to send email. Please try again later.');
        });
    }

  