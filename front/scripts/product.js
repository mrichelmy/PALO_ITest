//GLOBAL VARIABLES
export var cities = {"Lyon": 0, "Paris" : 0, "Marseille" : 0, "Toulouse" : 0, "Lille" : 0, "Bordeaux" : 0};

// FUNCTIONS

var displayTags = () => {
  const arrayOfWords = $(".enterZone").val().toLowerCase().split(" ");
  var updateText = "";
  arrayOfWords.forEach(word => {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    if(Object.keys(cities).includes(word) && cities[word] === 0) {
      var tag = "\
      <div class='control "+ word+"Tag'>\
        <div class='tags has-addons'>\
          <span class='tag is-danger'>"+word+"</span>\
          <a class='tag is-delete' onclick></a>\
        </div>\
      </div>";
      $(".tagZone").append(tag);
      cities[word] = 1;
      updateText = updateText + " " + word;
    }
  });
  updateTextZone(updateText);
};

var updateTextZone = (newText) => {
  $(".enterZone").val(newText);
};

// BUTTONS
$(".enterZoneButton").on('click',() => displayTags());

$('.tagZone').on('click', 'a.tag', function() {
  var divTag= $(this).closest('div.control');
  var word = divTag.context.previousElementSibling.innerText;
  var updateText = $(".enterZone").val().replace(word,'');
  cities[word] = 0;
  divTag.remove();
  updateTextZone(updateText);
});