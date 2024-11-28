var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// filter Event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
       e.preventDefault();

       // Get Input value
       var newItem = document.getElementById('item').value;

       // Create New li element
       var li = document.createElement('li');

       // Add class
       li.className = 'list-item';
       // Add text node with input value
       li.appendChild(document.createTextNode(newItem));

       // Create delete button element
       var delbtn = document.createElement('button');
       // Add className to delbtn
       delbtn.className = 'close delete';
       // Append text node
       delbtn.appendChild(document.createTextNode('X'));
       // Append button to li
       li.appendChild(delbtn);
       // Append button to list
       itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
       if (e.target.classList.contains('delete')) {
              if (confirm('Are You Sure?')) {
                     var li = e.target.parentElement;
                     itemList.removeChild(li);
              }
       }
}

// Filter item
function filterItems(e) {
       // convert text into lowercase
       var text = e.target.value.toLowerCase();
       // Get List
       var items = itemList.getElementsByTagName('li');
       // Convert to an array
       Array.from(items).forEach(function (item) {
              var itemName = item.firstChild.textContent;
              if (itemName.toLowerCase().indexOf(text) != -1) {
                     item.style.display = 'block';
              }
              else {
                     item.style.display = 'none';
              }
       }
       )
}

// Revision
// var addForm = document.getElementById('addform');
// var items = document.getElementById('items');

// addForm.addEventListener('submit', addItem);

// function addItem(e) {
//        e.preventDefault();

//        var newItem = document.getElementById('item').value;
//        var li = document.createElement('li');
//        li.className = 'list-item';
//        li.appendChild(document.createTextNode(newItem));

//        var delbtn = document.createElement('button');
//        delbtn.className = 'close';
//        delbtn.appendChild(document.createTextNode('X'));
//        li.appendChild(delbtn);
//        items.appendChild(li);
// }


