/** GLOBAL VARIABLES */
var cities = {"Lyon": 0, "Paris" : 0, "Marseille" : 0, "Toulouse" : 0, "Lille" : 0, "Bordeaux" : 0};

/** FUNCTIONS */

var displayTags = () => {
  const arrayOfWords = $(".enterZone").val().toLowerCase().split(" ");
  var updateText = "";
  arrayOfWords.forEach(word => {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    if(addTag(word))
      updateText = updateText + " " + word;
  });
  updateTextZone(updateText);
};

var addTag = (wordChecked) => {
  if(Object.keys(cities).includes(wordChecked) && cities[wordChecked] === 0) {
    var tag = "\
    <div class='control "+ wordChecked+"Tag'>\
      <div class='tags has-addons'>\
        <span class='tag is-danger'>"+wordChecked+"</span>\
        <a class='tag is-delete' onclick></a>\
      </div>\
    </div>";
    $(".tagZone").append(tag);
    cities[wordChecked] = 1;
    return true;
  }
  return false;
};

var updateTextZone = (newText) => {
  $(".enterZone").val(newText);
};

var displayForm = () => {
  $('.addForm').show();
}

/** BUTTONS */
$(".enterZoneButton").on('click',() => displayTags());

$('.tagZone').on('click', 'a.tag', function() {
  var divTag= $(this).closest('div.control');
  var word = divTag.context.previousElementSibling.innerText;
  var updateText = $(".enterZone").val().replace(word,'');
  cities[word] = 0;
  divTag.remove();
  updateTextZone(updateText);
});

$('.addProductButton').on('click', () => displayForm());

export {
  cities,
  addTag
}