var Entry = require('./../js/business-logic.js').journalModule;

$(document).ready(function() {
  $("#journal-entry").submit(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var word_result = entry.wordCount();
    var vowel_result = entry.vowelCount();
    var consonant_result = entry.consonantCount();
    var teaser_info = entry.getTeaser();
    console.log("Words: " + word_result);
    console.log("Vowels: " + vowel_result);
    console.log("Consonants: " + consonant_result);
    console.log("Teaser: " + teaser_info);
  });
});
