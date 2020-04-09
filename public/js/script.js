$(document).ready(function() {
  //--clipboard.js instantiation--//
  new ClipboardJS(".btn");

  //get JSON data - select random string from each array - if strings match rerun - if they don't match print data
  $("#autoBuild").click(function() {
    var oneSong = [];
    $(function() {
      $.getJSON("data/oneSong.json", function(data) {
        oneSong = data;
        console.log(oneSong);
        var randomOneSong = oneSong[Math.floor(Math.random() * oneSong.length)];
        console.log(randomOneSong);
      });

      //randomly select a song from the oneSong JSON

      // //randomly select a song from the medium/low/high energy category
      // var randomTwoSong = twoSong[Math.floor(Math.random() * twoSong.length)];

      // //randomly select a song from the low energy category
      // var randomThreeSong =
      //   threeSong[Math.floor(Math.random() * threeSong.length)];

      // //make sure a song doesn't occur twice in a set
      // if (randomOneSong === randomTwoSong) {
      //   randomTwoSong = twoSong[Math.floor(Math.random() * twoSong.length)];
      // }
      // if (randomTwoSong === randomThreeSong) {
      //   randomThreeSong =
      //     threeSong[Math.floor(Math.random() * twoSong.length)];
      // }

      // //place song results into the textboxes
      // $("#song1").val(randomOneSong);
      // $("#song2").val(randomTwoSong);
      // $("#song3").val(randomThreeSong);
    });
  });
});
