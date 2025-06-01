const form = document.getElementById('addForm');
const list = document.getElementById('list');
const clear = document.getElementById('clear');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const div = document.createElement('div');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  const text = document.getElementById('text');
  const delBtn = document.createElement('button');

  //checkbox
  checkbox.type = 'checkbox';
  span.innerText = text.value;

  checkbox.addEventListener('change', function() {
    div.classList.toggle('strike');
  });

  //list
  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(delBtn);
  list.appendChild(div);

  //delBtn
  delBtn.addEventListener('click', function() {
    list.removeChild(div);
  });
});

clear.addEventListener('click', function() {
  list.innerText = '';
});
