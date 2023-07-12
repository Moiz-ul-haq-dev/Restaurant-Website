document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');
        const taskTitleInput = document.getElementById('taskTitle');
        const taskDescInput = document.getElementById('taskDesc');
        const taskDueDateInput = document.getElementById('taskDueDate');

        const taskTitle = taskTitleInput.value;
        const taskDesc = taskDescInput.value;
        const taskDueDate = taskDueDateInput.value;

        if (taskTitle.trim() === '' || taskDesc.trim() === '' || taskDueDate.trim() === '') {
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.classList.add('mb-2', 'p-2', 'bg-gray-900', 'rounded-md');

        const taskTitleElement = document.createElement('h2');
        taskTitleElement.classList.add('text-xl', 'font-semibold', 'text-white');
        taskTitleElement.textContent = taskTitle;

        const taskDescElement = document.createElement('p');
        taskDescElement.textContent = taskDesc;

        const taskDueDateElement = document.createElement('p');
        taskDueDateElement.textContent = taskDueDate;

        taskItem.appendChild(taskTitleElement);
        taskItem.appendChild(taskDescElement);
        taskItem.appendChild(taskDueDateElement);

        taskList.appendChild(taskItem);

        taskTitleInput.value = '';
        taskDescInput.value = '';
        taskDueDateInput.value = '';
    });
});
