//GLOBAL VARIABLES
var cities = {"lyon": 0, "paris" : 0, "marseille" : 0, "toulouse" : 0, "lille" : 0, "bordeaux" : 0};

// FUNCTIONS

var displayTags = () => {
  const arrayOfWords = $(".enterZone").val().toLowerCase().split(" ");
  var updateText = "";
  arrayOfWords.forEach(word => {
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