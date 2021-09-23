/** GLOBAL VARIABLES */
var cities = {"Lyon": 0, "Paris" : 0, "Marseille" : 0, "Toulouse" : 0, "Lille" : 0, "Bordeaux" : 0};

/** FUNCTIONS */

var displayTags = () => {
  const arrayOfWords = $(".enterZone").val().toLowerCase().split(" ");
  arrayOfWords.forEach(word => {
    var wordProperNoun = word.charAt(0).toUpperCase() + word.slice(1);
    addTag(wordProperNoun);
  });
  updateTextZone();
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
  }
};

var updateTextZone = () => {
  var finalText = Object.keys(cities).filter( c => cities[c] === 1).toString();
  $(".enterZone").val(finalText);
};

var displayForm = () => {
  $('.addForm').show();
}

var calculateFromString = () => {
  var stringToCalculate = $('.calculateInput').val().replace(/[^-()\d/*+.]/g, '');
  var result = eval(stringToCalculate);
  $('.calculateInput').val(result);
  $('.priceValue').val(result);
};

/** BUTTONS */
$(".enterZoneButton").on('click',() => displayTags());

$('.tagZone').on('click', 'a.tag', function() {
  var divTag= $(this).closest('div.control');
  var cityToDelete = divTag.context.previousElementSibling.innerText;
  cities[cityToDelete] = 0;
  divTag.remove();
  updateTextZone();
});

$('.addProductButton').on('click', () => displayForm());

$('.calulateInputButton').on('click', () => calculateFromString() );

/** EXPORT */
export {
  cities
}