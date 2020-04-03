$(document).ready(function() {
  //--clipboard.js instantiation--//
  new ClipboardJS(".btn");

  $("#autoBuild").click(function() {
    const oneSong = [
      "Planetshakers - Come Right now - Ab - chords https://worshipchords.com/come-right-now-chords/ - video https://www.youtube.com/watch?v=VX9mIDqul1M",
      "Bethel - Ain't No Grave - Bm - chords https://tabs.ultimate-guitar.com/tab/bethel-music/aint-no-grave-chords-2719206 - video https://www.youtube.com/watch?v=Kf9ed6qwlaI",
      "Elevation - Echo - D - chords https://tabs.ultimate-guitar.com/tab/elevation-worship/echo-chords-2461184 - video https://www.youtube.com/watch?v=sbszEOO_K5w",
      "Planetshakers - Electric Atmosphere - C# - chords https://tabs.ultimate-guitar.com/tab/planetshakers/electric-atmosphere-chords-2571552 - video https://www.youtube.com/watch?v=KOCjXjjxMpM"
    ];
    var randomOneSong = oneSong[Math.floor(Math.random() * oneSong.length)];

    const twoSong = [
      "Bethel - Ain't No Grave - Bm - chords https://tabs.ultimate-guitar.com/tab/bethel-music/aint-no-grave-chords-2719206 - video https://www.youtube.com/watch?v=Kf9ed6qwlaI",
      "Elevation - Call upon the Lord - C - chords https://tabs.ultimate-guitar.com/tab/elevation-worship/call-upon-the-lordcall-chords-1840187 -  video https://www.youtube.com/watch?v=e7iKmka651U",
      "Elevation - Echo - D - chords https://tabs.ultimate-guitar.com/tab/elevation-worship/echo-chords-2461184 - video https://www.youtube.com/watch?v=sbszEOO_K5w",
      "Elevation - Do it Again - Bb - chords capo 3rd https://tabs.ultimate-guitar.com/tab/elevation-worship/do-it-again-chords-1873702 - video https://www.youtube.com/watch?v=0B_lnQIITxU",
      "Planetshakers - Electric Atmosphere - C# - chords https://tabs.ultimate-guitar.com/tab/planetshakers/electric-atmosphere-chords-2571552 - video https://www.youtube.com/watch?v=KOCjXjjxMpM",
      "Jesus Culture - Freedom - G - chords https://tabs.ultimate-guitar.com/tab/jesus-culture/freedom-chords-2426227 - video https://www.youtube.com/watch?v=f3f5dVlfMPY",
      "Passion - Glorious Day - D - chords https://tabs.ultimate-guitar.com/tab/passion/glorious-day-chords-1949913 - video https://www.youtube.com/watch?v=gklJ2XZwDHc",
      "Elevation - Grace Like a Wave - Db - chords https://tabs.ultimate-guitar.com/tab/elevation-worship/grace-like-a-wave-chords-1812322 - video https://www.youtube.com/watch?v=cNCjhVXFPqI",
      "Passion - Hallelujah, Our God Reigns - B - chords https://tabs.ultimate-guitar.com/tab/passion/hallelujah-our-god-reigns-chords-2340043 - video https://www.youtube.com/watch?v=68Uv__48K-Q"
    ];
    var randomTwoSong = twoSong[Math.floor(Math.random() * twoSong.length)];

    const threeSong = [
      "Elevation - Do it Again - Bb - chords https://tabs.ultimate-guitar.com/tab/elevation-worship/do-it-again-chords-1873702 - video https://www.youtube.com/watch?v=0B_lnQIITxU",
      "Jesus Culture - Freedom - G - chords https://tabs.ultimate-guitar.com/tab/jesus-culture/freedom-chords-2426227 - video https://www.youtube.com/watch?v=f3f5dVlfMPY",
      "Passion - Glorious Day - D - chords https://tabs.ultimate-guitar.com/tab/passion/glorious-day-chords-1949913 - video https://www.youtube.com/watch?v=gklJ2XZwDHc",
      "Elevation - Grace Like a Wave - Db - chords https://tabs.ultimate-guitar.com/tab/elevation-worship/grace-like-a-wave-chords-1812322 - video https://www.youtube.com/watch?v=cNCjhVXFPqI",
      "Passion - Hallelujah, Our God Reigns - B - chords https://tabs.ultimate-guitar.com/tab/passion/hallelujah-our-god-reigns-chords-2340043 - video https://www.youtube.com/watch?v=68Uv__48K-Q"
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
