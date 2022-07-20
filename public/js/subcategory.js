const newSubCatForm = async (event) => {
    event.preventDefault();

    console.log(1)

    const name = document.querySelector('#newSub').value.trim();

    console.log(name)

    if (name) {
        const response = await fetch(`/api/subcategory/add`, {
          method: 'POST',
          body: JSON.stringify({ name }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to create subcategory');
        }
      }
}


// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to delete Subcategory');
//       }
//     }
// };

document.querySelector('#subCatButton').addEventListener('click', newSubCatForm);