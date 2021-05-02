const add = document.querySelector('#add');
add.addEventListener('click', function () {
    const todo = document.getElementById('todo');
    let newTodo = document.getElementById('new_todo');
    let forTodo = "<li><span class='mr-2' onclick='toggle(this)' style='cursor: pointer;'>" + newTodo.value + "</span>" + "<button onclick='removeTodo(this)'  style='cursor: pointer;' class='btn btn-danger btn-sm'>" + " Delete" + "</button></li>";
    todo.className = 'p-3 ml-4';
    todo.insertAdjacentHTML('afterbegin', forTodo);
});

function toggle(e) {
    e.classList.toggle('done')
}

function removeTodo(e) {
    e.parentElement.remove()
}

function startTime() {
    let nowTime = document.getElementById('nowTime');
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    nowTime.innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}