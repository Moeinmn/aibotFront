let token = document.querySelector('script[id="example-script"]').getAttribute('data-test');
localStorage.setItem('chat-bot-token', token);

console.log({token});