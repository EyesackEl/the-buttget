const newCatForm = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#newCat').value.trim();

    console.log(name)

    if (name) {
        const response = await fetch('/api/category/add', {
          method: 'POST',
          body: JSON.stringify({ name }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to create category');
        }
      }
}


document.querySelector('#addCatButton').addEventListener('click', newCatForm);