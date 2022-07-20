// Login button logic
const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log(1)
    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    console.log(email, password)

    const bodyJson = JSON.stringify({ email, password })



    if (email && password) {
        console.log(2)
        const response = await fetch('/api/user/login', {
        method: 'POST',
        body: bodyJson,
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/');
        } else {
        alert(response.statusText);
        console.log(3)

        }
    }
};

document.querySelector('#signInButton').addEventListener('click', loginFormHandler);

