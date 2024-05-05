async function postData() {
    try {
        var token = document.getElementById('myScript').getAttribute('data-token');

        // Create the JSON payload
        var payload = {
            token: token
        };

        const response = await fetch('http://localhost:12000/widget/get-collection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        window.localStorage.setItem('chat-bot-token', data.collection);

        let container = document.createElement("div");
        container.id = "plotsetCustomId";
        container.style.direction = "ltr";
        document.body.appendChild(container);

        var cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'http://localhost:3000/scripts/main.1267c309.css';
        document.head.appendChild(cssLink);
        
        // Load JS
        var jsScript = document.createElement('script');
        jsScript.src = 'http://localhost:3000/scripts/main.b4c5a894.js';
        document.body.appendChild(jsScript);
        

    } catch (error) {
        console.error('Error:', error);
    }
}

postData();
