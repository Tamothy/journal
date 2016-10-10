var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var count = this.body.split(" ");
  return count.length;
}

Entry.prototype.vowelCount = function() {
  var vowel_results = [];
  var characters = this.body.split("");
  for (var i = 0; i < characters.length; i++) {
    if (vowels.includes(characters[i])) {
      vowel_results.push(characters[i]);
    }
  }
  return vowel_results.length;
}

Entry.prototype.consonantCount = function() {
  var consonant_results = [];
  var characters = this.body.split("");
  for (var i = 0; i < characters.length; i++) {
    if (consonants.includes(characters[i])) {
      consonant_results.push(characters[i]);
    }
  }
  return consonant_results.length;
}

Entry.prototype.getTeaser = function() {
  var count = this.body.split(" ");
  var teaser = [];
  for (var i = 0; i <= 7; i++) {
    teaser.push(count[i]);
    if (count[i].includes(".")) {
      break;
    }
  }
  return teaser;
}

exports.journalModule = Entry;

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
