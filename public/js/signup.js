// Sign Up button logic
const signupFormHandler = async () => {
    const name = document.querySelector('#uname-input').value.trim();
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#pword-input1').value.trim();
    const checkPword = document.querySelector('#pword-input2').value.trim();

    console.log(name, email, password, checkPword)
    if (password !== checkPword) {
        alert("Passwords do not match");
    } else {
        if (name && email && password && checkPword) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    }
};

document
  .querySelector('#signupBtn').addEventListener('click', signupFormHandler);
