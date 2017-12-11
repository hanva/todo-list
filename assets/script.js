window.onload = function () {

    var count = 0;
    var addARow = document.querySelector('#addRow');

    addARow.onclick = function () {
        AddRow();
    };
    function AddRow() {
        count++;
        var main = document.querySelector('main');
        var tasks = document.createElement('button');
        var croix = document.createElement('div');
        var row = document.createElement('div');
        var titleTask = document.createElement('span');
        var text = 'Row' + count;
        row.className += 'row';
        titleTask.innerHTML = "New task " + count;
        croix.innerHTML = "&times";
        croix.className += 'croix';
        tasks.innerHTML = "Add Task";
        tasks.className += 'task';
        row.appendChild(titleTask);
        row.appendChild(croix);
        main.appendChild(row);


        var titledescription = document.createElement('input');
        var title = document.createElement('div');

        row.appendChild(title);
        row.appendChild(tasks);


        var message = document.createElement('textarea');
        var textMessage = document.createElement('text');
        var textTask = document.createElement('text');
        var task = document.createElement('input');
        var cancel = document.createElement('button');
        var create = document.createElement('button');
        var flex = document.createElement('div');

        tasks.onclick = function () {
            textTask.innerHTML = "Title task :";
            task.style.margin = "20px";
            textTask.className += 'textTask';
            titledescription.className += 'task';
            textMessage.innerText = " Description of the task : ";
            flex.className += 'flex';
            message.className = 'message';
            cancel.className += 'cancel';
            create.className += 'create';
            cancel.innerHTML = "CANCEL";
            create.innerHTML = "CREATE";

            row.appendChild(title);
            row.appendChild(textTask);
            row.appendChild(task);
            row.appendChild(textMessage);
            row.appendChild(message);
            row.appendChild(flex);
            row.appendChild(create);
            row.appendChild(cancel);

        };
        cancel.onclick = function canceltask() {
            row.removeChild(task);
            row.removeChild(textTask);
            row.removeChild(textMessage);
            row.removeChild(message);
            row.removeChild(flex);
            flex.appendChild(cancel);
            flex.appendChild(create);
        };
        croix.onclick = function () {
            main.removeChild(row);
        };

        create.onclick = function createtask() {
            var createMessage = document.querySelector('.message').value;
            var taskdiv = document.createElement('div');
            taskdiv.innerText = task.value + "\n" + createMessage;
            taskdiv.className += 'taskdiv';

            row.appendChild(taskdiv);
            flex.appendChild(cancel);
            row.removeChild(task);
            row.removeChild(textTask);
            row.removeChild(textMessage);
            row.removeChild(message);
            row.removeChild(flex);
            flex.appendChild(cancel);
            flex.appendChild(create);

            taskdiv.onclick = function () {
                for (var items = document.querySelectorAll('.taskdiv'), len = items.length, i = 0; i < len; i++) {
                    items[i].setAttribute('draggable', 'true');
                }
            }

        }
        titleTask.onclick = function renameTitle() {
            var Newtextitle = document.createElement('input');

            Newtextitle.className += 'Newtextitle';
            row.replaceChild(Newtextitle, titleTask);

            Newtextitle.onchange = function () {
                var titleTask = document.createElement('div');
                titleTask.className += 'titleTask';
                titleTask.innerText = Newtextitle.value;
                row.replaceChild(titleTask, Newtextitle);
            }
        }

    };
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData(".taskdiv", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData(".taskdiv");
    ev.target.appendChild(document.getElementById(".taskdiv"));
}