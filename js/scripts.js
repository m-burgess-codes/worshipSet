$(document).ready(function() {
  //--clipboard.js instantiation--//
  new ClipboardJS(".btn");

  $("#autoBuild").click(function() {
    const oneSong = [
      "Planetshakers - Come Right now - Ab - https://www.youtube.com/watch?v=VX9mIDqul1M;",
      "Planetshakers - Heaven on Earth - https://www.youtube.com/watch?v=omR-OjF0-z8",
      "Elevation - Echo - https://www.youtube.com/watch?v=sbszEOO_K5w"
    ];
    var randomOneSong = oneSong[Math.floor(Math.random() * oneSong.length)];

    const twoSong = [
      "Bethel - Ain't No Grave - Bm - https://www.youtube.com/watch?v=Kf9ed6qwlaI",
      "Elevation - Call upon the Lord - C - https://www.youtube.com/watch?v=e7iKmka651U",
      "Elevation - Echo - https://www.youtube.com/watch?v=sbszEOO_K5w"
    ];
    var randomTwoSong = twoSong[Math.floor(Math.random() * twoSong.length)];

    const threeSong = [
      "Eleventh Hour Worship - How Great Thou Art - https://www.youtube.com/watch?v=INTU-pfeJHg",
      "Passion - Worthy of your Name - https://www.youtube.com/watch?v=fcedMbopknM",
      "Passion - Hallelujah, Our God Reigns - https://www.youtube.com/watch?v=68Uv__48K-Q"
    ];
    var randomThreeSong =
      threeSong[Math.floor(Math.random() * threeSong.length)];

    if (randomOneSong === randomTwoSong) {
      randomTwoSong = twoSong[Math.floor(Math.random() * twoSong.length)];
    }
    if (randomTwoSong === randomThreeSong) {
      randomThreeSong = threeSong[Math.floor(Math.random() * twoSong.length)];
    }

    $("#song1").val(randomOneSong);
    $("#song2").val(randomTwoSong);
    $("#song3").val(randomThreeSong);
  });
});
