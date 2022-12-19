
let todos = ['get groceries', 'wash car', 'make dinner'];

todos.forEach(function (todotitle) {
    let element = document.createElement('div');
    element.innerText = todotitle;
    document.body.appendChild(element);
});

function addTodo() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);
}

function toUpper(stringArr) {
    let result = [];

    stringArr.forEach(function (str) {
        result.push(str.toUpperCase());
    });

    console.log(result);
}

toUpper(['hello', 'world']);

function arrayDouble(stringArr) {
    let result = [];

    stringArr.forEach(function (str) {
        result.push(str);
        result.push(str);
    });

    console.log(result);
}

arrayDouble(['hello', 'world']);

function arraySum(numArray) {
    let total = 0;

    numArray.forEach(function (num) {
        total = total + num;
    });

    console.log(total);
}

arraySum([1, 2, 3]);