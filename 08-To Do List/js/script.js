$(document).ready(function () {

    let addInput = $('.add-row');
    let addBtn = $('.add-btn');
    let taskList = $('.tasks');

    // ADD TASK
    addBtn.on('click', function () {
        let elem = ` <li class="task">
        <div class="task-checked col-1">
            <input type="checkbox">
        </div>
        <div class="task-text col-2">${addInput.val()}</div>
        <div class="task-remove col-3"></div>
    </li>`;
        taskList.append(elem);
        addInput.val('');
    })

    // REMOVE TASK
    // this uses event delegation by using an element that is always going 
    //to be present, and adding and additiona; parameter which specified the 
    //button that will be clicked
    taskList.on('click', '.task-remove', function () {
        $(this).parent().remove();
    })

    // CHECKED TASK
    // let checkboxes = $('.task-checked input');
    // checkboxes.on('change', function () {
    //     $(this).parent().next().toggleClass('line-through');
    // })
    // this uses event delegation
    taskList.on('change', '.task-checked input', function () {
        $(this).parent().next().toggleClass('line-through');
    })

})


