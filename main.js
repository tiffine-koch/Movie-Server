'use strict';

$(function() {
  $('#submit').click(sendRequest);
});

function sendRequest() {
  var title = $('#movieInput').val().trim();
  var type = $('#catDropDown').text();
  var year = $('#yearInput').val();
  $('#alert').empty();
  $('#movieDisplay').empty();

  $.ajax({

    url: "http://www.omdbapi.com/?s=" + title + "&type=" + type + "&yr=" + year + "&r=json",

    type: "GET",
    success: function(data) {
      var movieList = data.Search;

      if(data.Response === 'True') {
        var $movie = movieList.map(function(movie) {
          // var $title = $('<div>').text(movie.Title).addClass('title');
          // var $year = $('<div>').text(movie.Year).addClass('year');
          var $image= '<img class="col-xs-4"' + 'src=' + movie.Poster + '>'
          var $imdb = 'http://www.imdb.com/title/' + movie.imdbID;
          // $('#movieDisplay').append($title);
          // $('#movieDisplay').append($year);
          $('#movieDisplay').append('<a href=' + $imdb + '>' + $image + '</a>').addClass('card');
        });

      } else if(data.Response === 'False') {
          var $message = $('<div>').text('You are drunk. Less Chill and more Netflix. Try again').addClass('message'); //create bootstrap alert
          $('#alert').append($message);
          console.error('error', err);
        }
      }
  });
}
