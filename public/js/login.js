// Login button logic
const loginFormHandler = async () => {

    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#pwordInput').value.trim();
    
    console.log(email, password)

    const bodyJson = JSON.stringify({ email, password })



    if (email && password) {
        const response = await fetch('/api/user/login', {
        method: 'POST',
        body: bodyJson,
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/');
        } else {
        alert(response.statusText);
        }
    }
};

document.querySelector('#signInButton').addEventListener('click', loginFormHandler);

