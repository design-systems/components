
var system = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
var system_el = document.querySelector('.System');
var covers = document.querySelectorAll('.Cover img');
var headlines = document.querySelectorAll('.Headline span');
var authors = document.querySelectorAll('.Author');

// MOVED TO COMPONENTS var item_classes = [section_size, flex, title_size, text_align, group_align, group_justify, is_bg, bg_fit, bg_size, bg_color, bg_align, bg_justify, bg_padding]

var sections = document.querySelectorAll('.Section');

document.querySelector('#System-input').addEventListener("change", function(){
  system = document.querySelector('#System-input').value;
  changeSystem()
});
document.querySelector('.Shuffle').addEventListener("click", shuffle);

function changeSystem() {
  document.querySelector('#System-input').value = system
  system_el.className = "System " + system;
  changePhotos();
  for (var i=0; i<system_classes.length; i++){
    var newClass = system_classes[i][Math.floor(Math.random()*system_classes[i].length)];
    system_el.classList.add(newClass);
  }
}
function changePhotos() {
  for (var i=0; i<covers.length; i++ ) {
    var myPhoto = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
    covers[i].style.objectPosition = CoverCenter_array[myPhoto]
    covers[i].setAttribute('src','ui/assets/images/'+myPhoto+'.jpg');
  }
  for (var i=0; i<headlines.length; i++ ) {
    authors[i].textContent = Authors_array[Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)]]
    headlines[i].textContent = Headlines_array[Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)]]
  }
}

system_el.className = "System "+ system

function init(){
  for (var i=0; i<sections.length; i++ ) {
    createItemClassList(i);
  }
  changeSystem()
}
function shuffle(){
  system = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
  changeSystem();
  for (var i=0; i<sections.length; i++ ) {
    shuffleItemClassList(i);
  }
}

function createItemClassList(num){
  var section = sections[num];

  var list = document.createElement('div');
  list.classList.add('Class-list');
  list.setAttribute('contenteditable',true);
  section.insertBefore(list,section.firstChild);

  for (var i=0; i<item_classes.length; i++){
    var listItem = document.createElement('li');
    var newClass = item_classes[i][Math.floor(Math.random()*item_classes[i].length)];
    listItem.innerHTML = newClass;
    list.appendChild(listItem);
    section.classList.add(newClass);
  }

  list.addEventListener('keypress',function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
      applyClasses(num);
    }
  })
}
function shuffleItemClassList(num){
  var section = sections[num];

  var list = section.querySelector('.Class-list')

  for (var i=0; i<item_classes.length; i++){
    var listItem = list.querySelectorAll('li')[i];
    var newClass = item_classes[i][Math.floor(Math.random()*item_classes[i].length)];
    listItem.innerHTML = newClass;
    section.classList.add(newClass);
  }
  applyClasses(num);
}
function applyClasses(num) {
  var section = sections[num];

  var list = section.querySelector('.Class-list')
  var items = list.querySelectorAll('li');
  var myClass = 'Section Section--components-' + section.querySelectorAll('.Component').length + " ";
  for (var i=0;i<items.length;i++){
    myClass += items[i].textContent;
    if(myClass.substr(myClass.length-1) != " "){
      myClass = myClass + ' '
    }
  }
  section.className = myClass;
}
init()
