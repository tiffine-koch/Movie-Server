'use strict';

var movieList = [], text;

$(function() {
  // $('#catDropDown').on('click', findCat);
  $('#submit').click(sendRequest);
});

function sendRequest() {
  var title = $('#movieInput').val().trim();
  var type = $('#catDropDown').text();
  var year = $('#yearInput').val();

  $.ajax({

    url: "http://www.omdbapi.com/?s=" + title + '&type=' + type + '&yr=' + year + "&r=json",
    type: "GET",
    success: function(data) {
      console.log('data', data);
      movieList = data;
      createList();
      console.log('movieList', movieList);
    },
    error: function(err) {
      console.error('error', err);
      var $message = $('<p>').text('You are drunk. Less Chill and more Netflix.'); //create bootstrap alert
      $('#alert').append($message);
    }
  });
}

function createList() {
  // // console.log('year:', year);
  //
  // var title = $('#movieInput').val().trim();
  // console.log("title", title);
  // // var title = $('movieInput').val().toLowerCase().trim();
  //
  // var filtered = movieList.filter(function(data) {
  //   return data.Title == title;
  // });
  //
  // var movie = filtered[0];
  console.log('create list');
  // if(data.Reponse === 'True') {
  //   console.log('inside if');
  //   for(var i = 0; i < movieList.length; i++) {
  //     var $card = makeMovieCard(data);
  //     $('#movieDisplay').append($card);
  //   }
  // }
  // if(data.Reponse === 'True') {
  //   $.get(data.Title, function(data) {
  //     for(var i = 0; i < movieList.length; i++) {
  //       var $card = makeMovieCard(data);
  //       $('#movieDisplay').append($card);
  //       }
  //     });
  //   } else {
  //     var $message = $('<p>').text('You are drunk. Less Chill and more Netflix.'); //create bootstrap alert
  //     $('#alert').append($message);
  //   }
  }

function makeMovieCard(data) {

  var $card = $('#template').clone();
  $card.removeAttr('id');
  console.log('hey everyone', movieList);

  $card.find('.title').text(data.Title);
  $card.find('.image').attr('src', data.Poster);
  $card.find('.link').attr('href', 'https://www.imdb.com/title/' + data.imdbID);
  $card.find('.year').text(data.Year);
  $card.find('.rated').text(data.Rated);

  return $card;
};

// function findCat(event) {
//   console.log('inside findCat');
//   event.preventDefault();
//   var text = $(this).text();
//
//   $('#catEntry').text(text).append('<span class="caret"></span>');
//   console.log(text);
// }
