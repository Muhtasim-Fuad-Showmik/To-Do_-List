var todos = [];

window.setTimeout(function() {
	var input = prompt("What would you like to do?");

		// Loop to keep prompting user to submit desired input
		while(input!=="quit"){
		if(input === "list"){
			listTodos();
		} else if(input === "new"){
			addTodo();
		} else if(input === "delete"){
			deleteTodo();
		}

		input = prompt("What would you like to do?");
	}

	console.log("OK, YOU QUIT THE APP");
}, 500);

// Function to list all items of the Todos list
function listTodos(){
	console.log("**********");
	todos.forEach( function(todo, i){
			console.log(i + ": " + todo);
		});
	console.log("**********");
}

// Function to add an item to the Todo List
function addTodo(){
	var newTodo = prompt("Enter new todo");

	todos.push(newTodo);
	console.log("Added Todo");
}

// Function to delete an item from the Todo List
function deleteTodo(){
	var index = prompt("Enter index of todo to delete");

	todos.splice(index, 1);
	console.log("Deleted Todo");
}