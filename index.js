// Add your code here


function submitData(userName, userEmail) {
    const userData = {
        name: `${userName}`,
        email: `${userEmail}`,
      };
      const data = {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(userData),
      }
    return fetch('http://localhost:3000/users', data)
      .then(function(response) {
        return response.json()
      })
      .then(function(object){
        console.log(object)
      })
      .catch(function(error) {
        alert('Error')
        console.log(error)
      })
    }
    submitData('John', 'john@email.com')