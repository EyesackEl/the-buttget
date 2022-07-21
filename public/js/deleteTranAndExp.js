const delAction = async (event) => {
    console.log(1);

    const id = event.target.dataset.id

    console.log(id)
    if (event.target.classList.contains('delTranBtn')){
        const response = await fetch(`/api/transaction/${id}`, {
            method: 'DELETE'
          });
      
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to delete transaction');
        } 
    } else if (event.target.classList.contains('delExpBtn')){
        const response = await fetch(`/api/expense/${id}`, {
            method: 'DELETE'
        });
      
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to delete transaction');
        } 
    }
   
};

const delBtn = document.querySelectorAll('.delBtn');

delBtn.forEach(delBtn => {
  delBtn.addEventListener('click', delAction)
});











// const delTransaction = async (event) => {
//     console.log(1);

//     const id = event.target.dataset.id

//     console.log(id)

//     const response = await fetch(`/api/transaction/${id}`, {
//       method: 'DELETE'
//     });

//     if (response.ok) {
//       location.reload();
//     } else {
//       alert('Failed to delete transaction');
//     }    
// };

// const delTranBtn = document.querySelectorAll('.delTranBtn');

// delTranBtn.forEach(delBtn => {
//   delBtn.addEventListener('click', delTransaction)
// });