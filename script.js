document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const reason = document.getElementById('reason').value;
    const experience = document.getElementById('experience').value;
    const promise = document.getElementById('promise').value;

    const webhookURL = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with your Discord webhook URL

    const data = {
        embeds: [{
            title: "New Staff Application",
            fields: [
                { name: "Name", value: name, inline: true },
                { name: "Age", value: age, inline: true },
                { name: "Reason", value: reason },
                { name: "Experience", value: experience },
                { name: "Promise", value: promise }
            ],
            color: 5814783 // Optional: You can set a color for the embed
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').innerText = 'Application submitted successfully!';
            document.getElementById('applicationForm').reset();
        } else {
            document.getElementById('responseMessage').innerText = 'Error submitting application.';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = 'Error submitting application.';
        console.error('Error:', error);
    });
});
