// Fetch todos from the server
fetch('/api/todos')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched todos:', data);
    // Now you can work with the todos array here
    let todolist = document.querySelector('.todolist');
    let li = document.createElement('li');
    li.innerHTML = data;
    todolist.appendChild(li);
  })
  .catch(error => console.error('Error fetching todos:', error));
