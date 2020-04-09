$(document).ready(function () {
  //--clipboard.js instantiation--//
  new ClipboardJS(".btn");
  var songs = [];

  $(function () {
    $.getJSON("data/songs.JSON").then(function (data) {
      songs = data.songs;
    });
  });

  $("#autoBuild").click(function () {
    buildSet(songs);
  });

  function buildSet(songs) {
    var oneSongs = songs.filter((song, index) => song.category === 1);
    console.log(oneSongs);
    randomOneSong = Math.floor(Math.random() * Math.floor(oneSongs.length));

    var twoSongs = songs.filter(
      (song, index) => song.category === 1 || song.category === 2
    );
    console.log(twoSongs);
    randomTwoSong = Math.floor(Math.random() * Math.floor(twoSongs.length));

    while (randomTwoSong == randomOneSong) {
      randomTwoSong = Math.floor(Math.random() * Math.floor(twoSongs.length));
    }

    var threeSongs = songs.filter((song, index) => song.category === 2);
    console.log(threeSongs);
    randomThreeSong = Math.floor(Math.random() * Math.floor(threeSongs.length));

    while (
      randomThreeSong == randomTwoSong ||
      randomThreeSong == randomOneSong
    ) {
      randomThreeSong = Math.floor(
        Math.random() * Math.floor(threeSongs.length)
      );
    }

    $("#song1").val(
      `${songs[randomOneSong].title} - ${songs[randomOneSong].artist}`
    );
    $("#song2").val(
      `${songs[randomTwoSong].title} - ${songs[randomTwoSong].artist}`
    );
    $("#song3").val(
      `${songs[randomThreeSong].title} - ${songs[randomThreeSong].artist}`
    );
  }
});
// //place song results into the textboxes
// $("#song1").val(randomOneSong);
// $("#song2").val(randomTwoSong);
// $("#song3").val(randomThreeSong);
