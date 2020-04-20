$(document).ready(function () {
  //--clipboard.js instantiation--//
  new ClipboardJS(".btn");
  let songs = [];
  let matches = 0;
  let clicks = 0;

  //import JSON data file
  $(function load() {
    $.getJSON("public/data/songs.JSON").then(function (data) {
      songs = data.songs;
    });
  });

  //click button to build set
  $("#autoBuild").click(function () {
    buildSet(songs);
    $("#clicks").val((clicks += 1));
  });

  function buildSet() {
    //array of songs with category of 1
    let oneSongs = songs.filter((song, index) => song.category === 1);
    //select a random song from category 1 song pool
    let randomOneSong =
      oneSongs[Math.floor(Math.random() * Math.floor(oneSongs.length))];

    //array of songs with category of 2
    let twoSongs = songs.filter(
      (song, index) => song.category === 1 || song.category === 2
    );
    //select a random song from category 2 song pool
    let randomTwoSong =
      twoSongs[Math.floor(Math.random() * Math.floor(twoSongs.length))];

    //ensure the selection isn't already on the list
    while (`${randomTwoSong.title}` === `${randomOneSong.title}`) {
      randomTwoSong =
        twoSongs[Math.floor(Math.random() * Math.floor(twoSongs.length))];
    }

    //array of songs with category of 3
    let threeSongs = songs.filter((song, index) => song.category === 2);
    //select a random song from category 3 song pool
    let randomThreeSong =
      threeSongs[Math.floor(Math.random() * Math.floor(threeSongs.length))];

    //ensure the selection isn't already on the list
    while (`${randomThreeSong.title}` === `${randomTwoSong.title}`) {
      randomThreeSong =
        threeSongs[Math.floor(Math.random() * Math.floor(threeSongs.length))];
    }

    //place results into the textboxes

    //song 1
    $("#song1").val(
      `${randomOneSong.title} - ${randomOneSong.artist} - Key: ${randomOneSong.key} - Video: ${randomOneSong.video} - Chords: ${randomOneSong.chords}`
    );
    $("#s1t").html(`<strong>Title</strong>: ${randomOneSong.title}`);
    $("#s1a").html(`<strong>Artist</strong>: ${randomOneSong.artist}`);
    $("#s1k").html(`<strong>Key</strong>: ${randomOneSong.key}`);
    $("#s1v").html(
      `<a href="${randomOneSong.video}"><strong>Video</strong></a>`
    );
    $("#s1c").html(
      `<a href="${randomOneSong.chords}"><strong>Chords</strong></a>`
    );
    $("#1res").removeClass("invisible");

    //Song 2
    $("#song2").val(
      `${randomTwoSong.title} - ${randomTwoSong.artist} - Key: ${randomTwoSong.key} - Video: ${randomTwoSong.video} - Chords: ${randomTwoSong.chords}`
    );
    $("#s2t").html(`<strong>Title</strong>: ${randomTwoSong.title}`);
    $("#s2a").html(`<strong>Artist</strong>: ${randomTwoSong.artist}`);
    $("#s2k").html(`<strong>Key</strong>: ${randomTwoSong.key}`);
    $("#s2v").html(
      `<a href="${randomTwoSong.video}"><strong>Video</strong></a>`
    );
    $("#s2c").html(
      `<a href="${randomTwoSong.chords}"><strong>Chords</strong></a>`
    );
    $("#2res").removeClass("invisible");

    //Song 3
    $("#song3").val(
      `${randomThreeSong.title} - ${randomThreeSong.artist} - Key: ${randomThreeSong.key} - Video: ${randomThreeSong.video} - Chords: ${randomThreeSong.chords}`
    );
    $("#s3t").html(`<strong>Title</strong>: ${randomThreeSong.title}`);
    $("#s3a").html(`<strong>Artist</strong>: ${randomThreeSong.artist}`);
    $("#s3k").html(`<strong>Key</strong>: ${randomThreeSong.key}`);
    $("#s3v").html(
      `<a href="${randomThreeSong.video}"><strong>Video</strong></a>`
    );
    $("#s3c").html(
      `<a href="${randomThreeSong.chords}"><strong>Chords</strong></a>`
    );
    $("#3res").removeClass("invisible");

    //Song 4
    $("#song4").val(`${randomFourSong.title} - ${randomFourSong.artist}`);
    $("#song5").val(`${randomFiveSong.title} - ${randomFiveSong.artist}`);
    $("#song6").val(`${randomSixSong.title} - ${randomSixSong.artist}`);
    $("#song7").val(`${randomSevenSong.title} - ${randomSevenSong.artist}`);
  }
});
