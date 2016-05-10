var Headlines_array = new Array();
Headlines_array['Rams'] = 'Aware that he was a significant contributor to that world, he asked himself an important question: is my design good design?'
Headlines_array['Vignelli'] = 'Linear Genius, Bold and Transformative ‘Design Is One’ Centers on the Vignelli Team'
Headlines_array['Bass'] = 'Saul Bass On His Approach To Title Sequences'
Headlines_array['Brockmann'] = 'I would advise young people to look at everything they encounter in a critical light … Then I would urge them at all times to be self-critical.'
// Headlines_array['Escher'] = "The ultimate mind-benders: MC Escher's incredible optical illusions are set to have fans questioning reality with his first major UK exhibition"

var Authors_array = new Array();
Authors_array['Rams'] = 'Dieter Rams via Vitsœ'
Authors_array['Vignelli'] = 'Lella & Massimo Vignelli via NYTimes'
Authors_array['Bass'] = 'Saul Bass via Medium'
Authors_array['Brockmann'] = 'Josef Müller-Brockmann via Coroflot'
// Authors_array['Escher'] = 'MC Escher via Dailymail'

var Archetypes_array = new Array();
Archetypes_array[0] = 'Rams';
Archetypes_array[1] = 'Vignelli';
Archetypes_array[2] = 'Bass';
Archetypes_array[3] = 'Brockmann';
// Archetypes_array[3] = 'Escher';

var section_h_padding = [
  'section-h-padding-none',
  'section-h-padding-xxsmall',
  'section-h-padding-xsmall',
  'section-h-padding-small',
  'section-h-padding-medium',
  'section-h-padding-large',
  'section-h-padding-xlarge'
]
var section_v_padding = [
  'section-v-padding-none',
  'section-v-padding-xsmall',
  'section-v-padding-small',
  'section-v-padding-medium',
  'section-v-padding-large',
  'section-v-padding-xlarge'
]

var CoverCenter_array = new Array();
CoverCenter_array['Rams'] = '40% 40%';
CoverCenter_array['Vignelli'] = '70% 43%';
CoverCenter_array['Bass'] = '43% 22%';
CoverCenter_array['Brockmann'] = '52% 29%';

var system = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
var system_el = document.querySelector('.System');
var covers = document.querySelectorAll('.Cover img');
var headlines = document.querySelectorAll('.Headline span');
var authors = document.querySelectorAll('.Author');

// CLASS LISTS
var section_size = [
  'section-size-fullscreen',
  'section-size-auto'
]
var flex = [
  'flex-row',
  'flex-col'
]
var title_size = [
  'title-size-xxsmall',
  'title-size-xsmall',
  'title-size-small',
  'title-size-medium',
  'title-size-large',
  'title-size-xlarge',
  // 'title-size-xxlarge'
]
var text_align = [
  'text-align-left',
  'text-align-center',
  'text-align-right',
  // 'text-align-justify'
]
var group_align = [
  'align-start',
  'align-center',
  'align-end',
  'align-stretch',
  'align-baseline'
]
var group_justify = [
  'justify-start',
  'justify-center',
  'justify-end',
  'justify-between',
  'justify-around'
]
var is_bg = [
  'is-bg',
  'no-bg',
  'both-bg'
]
var bg_fit = [
  'bg-fit-cover',
  'bg-fit-contain'
]
var bg_size = [
  'bg-size-full',
  'bg-size-half',
  'bg-size-third',
  'bg-size-quarter'
]
var bg_align = [
  'bg-align-top',
  'bg-align-center',
  'bg-align-bottom',
  'bg-align-stretch'
]
var bg_justify = [
  'bg-justify-left',
  'bg-justify-center',
  'bg-justify-right',
  'bg-justify-stretch'
]
var bg_color = [
  'bg-color-light',
  'bg-color-dark',
  'bg-color-neutral',
  'bg-color-none'
]
var bg_padding = [
  'bg-padding-xsmall',
  'bg-padding-small',
  'bg-padding-medium',
  'bg-padding-large'
]
var item_classes = [section_size, flex, title_size, text_align, group_align, group_justify, is_bg, bg_fit, bg_size, bg_color, bg_align, bg_justify, bg_padding]
var system_classes = [section_h_padding, section_v_padding]

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
  changePhotos();
  for (var i=0; i<sections.length; i++ ) {
    createItemClassList(i);
  }
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
