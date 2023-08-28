const starContainer = document.querySelector(".star-container");

for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    starContainer.appendChild(star);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const contact = document.getElementById("contact1").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    const webhookURL = "https://discord.com/api/webhooks/1145861574297403392/MQ4M-sR77pcBPkhtzliIuz7x6LaMFxrcIxw8xe6Ixjvfly9RY53_fQQJ5QuU63GtuFBK"; // Replace with your actual webhook URL

    // Create an embed object for the message
    const embed = {
        username: 'application',
        embeds: [{
            title: "New Contact Form Submission",
            fields: [
                { name: "Name", value: name },
                { name: "Email", value: email },
                { name: "Message", value: message },
                { name: "Contact", value: contact}
            ],
            color: 16737792 // You can customize the color here
        }]
    };

    // Send the form data using Fetch API
    fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(embed),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Form submission failed.");
        }
    })
    .then(data => {
        console.log("Response:", data);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
