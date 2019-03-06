console.log("hey");

$(document).ready(function() {
  // Sources for the iframes:
  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBWs0Ogad59sa1_ppmPRNDokDoI33at03Y",
//     authDomain: "div-it.firebaseapp.com",
//     databaseURL: "https://div-it.firebaseio.com",
//     projectId: "div-it",
//     storageBucket: "",
//     messagingSenderId: "305267327119"
// };
// firebase.initializeApp(config);

  var videoSources = [];

  var musicVideoArr = [
	"https://www.youtube.com/embed/xLNeZogTsK8?autoplay=1",
    "https://www.youtube.com/embed/dc89yyOS0Z8?autoplay=1",
    "https://www.youtube.com/embed/NhheiPTdZCw?autoplay=1",
    "https://www.youtube.com/embed/TIJraYqUZ5g?autoplay=1",
    "https://www.youtube.com/embed/5NlHYdxi85w?start=164",
    "https://www.youtube.com/embed/KoQy_p3vNb8?autoplay=1",
    "https://www.youtube.com/embed/Ev0jl6RS5Eo?autoplay=1",
    "https://www.youtube.com/embed/7SsAYhC9UuE?autoplay=1",
    "https://www.youtube.com/embed/rVeMiVU77wo?autoplay=1",
    "https://www.youtube.com/embed/2CG5XMuz_nY?start=45",
    "https://www.youtube.com/embed/6YzGOq42zLk?autoplay=1",
    "https://www.youtube.com/embed/EEMcd48UwMI?autoplay=1",
    "https://www.youtube.com/embed/vHb0ysdvs3Q?autoplay=1",
    "https://www.youtube.com/embed/2FdP0eS47ts?autoplay=1",
    "https://www.youtube.com/embed/aFUzvbkEvRk?autoplay=1",
    "https://www.youtube.com/embed/rkB5bM_54sc?autoplay=1",
    "https://www.youtube.com/embed/Nx94936Hl5Q?autoplay=1",
    "https://www.youtube.com/embed/KyZDvZmvhik?autoplay=1",
    "https://www.youtube.com/embed/_1gShXIO6pk?autoplay=1",
    "https://www.youtube.com/embed/IJWlBfo5Oj0?autoplay=1",
    "https://www.youtube.com/embed/qKax7euEM5Q?autoplay=1",
    "https://www.youtube.com/embed/8IV___Motnc?autoplay=1",
    "https://www.youtube.com/embed/A8tIuYwFcS0?autoplay=1",
    "https://www.youtube.com/embed/AqZceAQSJvc?autoplay=1",
    "https://www.youtube.com/embed/gtCcOGlGVT8?autoplay=1",
    "https://www.youtube.com/embed/eEfy3KkEkTE?autoplay=1",
    "https://www.youtube.com/embed/0Vkqx4nRLdc?autoplay=1"
  ];
  var randomVideoArr = [
    "https://www.youtube.com/embed/CRSsa2o6PDQ?autoplay=1",
    "https://www.youtube.com/embed/zvFQWPEuNJA?autoplay=1",
    "https://www.youtube.com/embed/mD4jp2HHu0g?autoplay=1",
    "https://www.youtube.com/embed/WPZfIKy7LWo?autoplay=1",
    "https://www.youtube.com/embed/6lI67K54qgQ?autoplay=1",
    "https://www.youtube.com/embed/nr5Pj6GQL2o?autoplay=1",
    "https://www.youtube.com/embed/lqTKup-wpEU?autoplay=1",
    "https://www.youtube.com/embed/_Ybm_ZNLu0w?autoplay=1",
    "https://www.youtube.com/embed/i0p1bmr0EmE?autoplay=1",
    "https://www.youtube.com/embed/jPEYpryMp2s?autoplay=1",
    "https://www.youtube.com/embed/hYirFqEc8Tg?autoplay=1",
    "https://www.youtube.com/embed/bsLk0NPRFAc?autoplay=1",
    "https://www.youtube.com/embed/-NIP2zgVsRY?autoplay=1",
    "https://www.youtube.com/embed/Ml9v3wHLuWI?autoplay=1",
    "https://www.youtube.com/embed/g-F3A9n9BLg?autoplay=1",
    "https://www.youtube.com/embed/RF-Mqs2qC-M?autoplay=1",
    "https://www.youtube.com/embed/CiFnp-oKZQc?autoplay=1",
    "https://www.youtube.com/embed/sjVqDg32_8s?autoplay=1",
    "https://www.youtube.com/embed/tG-IGNvfrg8?autoplay=1",
    "https://www.youtube.com/embed/v85VNXT0Euk?autoplay=1",
    "https://www.youtube.com/embed/CUNq2_VjRn4?autoplay=1",
    "https://www.youtube.com/embed/3lgcBZdMZxM?autoplay=1",
    "https://www.youtube.com/embed/bNcj9iR956M?autoplay=1",
    "https://www.youtube.com/embed/ET6XGZqOyjY?autoplay=1",
    "https://www.youtube.com/embed/Me8jYR9Q0kw?autoplay=1",
    "https://www.youtube.com/embed/CeCgsmTjHjk?autoplay=1",
    "https://www.youtube.com/embed/l9jZFwwZQJs?autoplay=1",
    "https://www.youtube.com/embed/PgNAmWjInGk?autoplay=1",
    "https://www.youtube.com/embed/oipLbJoV9pM?autoplay=1"
  ];

  // Different phrases for when you click the button

  var clickOptions = [
    "Keep Going",
    "Keep Clicking",
    "Keep It Real",
    "Move Foward",
    "Next Vid",
    "What's Next",
    "Click Here",
    "Press Button",
    "Enjoy Vid",
    "Raise Roof",
    "Rip It Hard",
    "Shorty McDangles",
    "WagWan",
    "Stay Chill",
    "Keep It Cool",
    "Remain Frosty",
    "Move It Along",
    "next"
  ];


  // Buttons randomly choose new video and push to iframe in html:

  $("#music-btn").on("click", function(e) {
    e.preventDefault();
    var video = musicVideoArr[Math.floor(Math.random() * musicVideoArr.length)];
    console.log(video);
    $("#lead").attr("src", video);
  });

  $("#random-btn").on("click", function(e) {
    e.preventDefault();
    var video = randomVideoArr[Math.floor(Math.random() * randomVideoArr.length)];
    console.log(video);
    $("#random-btn").html(
      clickOptions[Math.floor(Math.random() * clickOptions.length)]
    );
    $("#lead").attr("src", video);
  });





//    var YOUR_API_KEY = "";
//    var queryURL =
//      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=US&key=" +
//      YOUR_API_KEY;

//    $.ajax({
//      url: queryURL,
//      method: "GET"
//    }).done(function(response) {
//      console.log(response);
//      var ploiujm = [""];

//      for (var i = 0; i < response.items.length; i++) {
//        var baseURL = [];

//        for (var j = 0; j < 11; j++) {
//          var identity = response.items[i].snippet.thumbnails.default.url[j + 23];
//          console.log(identity);
//          baseURL.push(identity);
//        }

//        var vidId = baseURL.join("");
//        console.log(vidId);
//        // debugger;
//        var urlKey =
//        "https://www.youtube.com/embed/" + String(vidId) + "?autoplay=1";
//      ploiujm.push(urlKey);
//     }
//     console.log(ploiujm);
//    });
});
