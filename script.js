document.getElementById("add_button").addEventListener("click", () => {
  let user_task = document.getElementById("task_input").value;
  // when input had a value
  if (user_task) {
    //call the getinputvalue function to get value and store in userinputvalue
    let userInputValue = getInputValue();
    // send output for showInDom function
    showInDOM(userInputValue);
    //and in the end i reset input
    resetInput();
  }
});


// when call this function , it's create the complitly dom element in main tag
function showInDOM(task) {
  // create nodeElement
  let main = document.getElementById("main");
  let section = document.createElement("section");
  let todo_content_div = document.createElement("div");
  let todo_container = document.createElement('input');
  let todo_action_div = document.createElement("div");
  let edit_button = document.createElement("button");
  let edit_button_img = document.createElement("img");
  let trash_button = document.createElement("button");
  let trash_button_img = document.createElement("img");
  let complite_button = document.createElement("button");
  let complite_button_img = document.createElement("img");


  // append section in main
  main.appendChild(section);
  // append contentDiv in section
  section.appendChild(todo_content_div);
  // add section classlist
  section.classList.add("todo_area");
  // add todo_content_div classlist
  todo_content_div.classList.add("todo_content");
  // task container 
  todo_content_div.appendChild(todo_container);
  todo_container.classList.add('task');
  todo_container.setAttribute('readonly' , 'readonly')
  todo_container.value = task
  // append actionDiv to section
  section.appendChild(todo_action_div);
  todo_action_div.classList.add("todo_actions");

  
  appendButton(section , todo_action_div ,'edit' , edit_button , "edit_button" , edit_button_img , "edit" , "./assets/icons/edit/pencil.svg", todo_container)
  appendButton(section , todo_action_div ,'delete', trash_button , "trash_button" , trash_button_img , "trash" , "./assets/icons/trash/trash.svg" )
  appendButton(section , todo_action_div ,'complite', complite_button , "check_button" , complite_button_img , "complite" , "./assets/icons/check/check-square.svg" , todo_container)

}


// append buttons in dom
function appendButton(todoSection , parent , type , buttonElement , buttonClass , child , childClass , childSrc , todo_container){
  // dynamic ;)
  parent.appendChild(buttonElement);
  buttonElement.classList.add(buttonClass);
  buttonElement.appendChild(child);
  child.classList.add(childClass);
  child.src = childSrc;

  // buttons eventListener
  buttonElement.addEventListener('click' , () => {

    if(type === 'delete'){
      todoSection.remove()

    }else if(type === 'edit'){
      child.src = './assets/icons/edit_complited/check2-all.svg';
      todo_container.removeAttribute('readonly','readonly');
      todo_container.focus();
      todo_container.classList.add('focus');

      buttonElement.addEventListener('click' , () => {
        todo_container.classList.remove('focus');
        todo_container.setAttribute('readonly' , 'readonly');
        child.src = childSrc;

      })  

    }else if(type === 'complite'){
      todo_container.classList.add('complited')
    }
  })
}


// when call this function , it's return input value
function getInputValue() {
  let user_task = document.getElementById("task_input").value;
  return user_task;
}


// when call this function , it's reset input (make it empty)
function resetInput() {
  document.getElementById("task_input").value = "";
}






