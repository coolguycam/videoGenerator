console.log("hey");

$(document).ready(function () {

    // Empty array for pushing new videos:

    var newVidz = [];

    // Sources for the iframes:

    var videoSources = ["https://www.youtube.com/embed/6YzGOq42zLk?autoplay=1", 
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
                        "https://www.youtube.com/embed/482lqzBFS38?autoplay=1", 
                        "https://www.youtube.com/embed/AqZceAQSJvc?autoplay=1", 
                        "https://www.youtube.com/embed/gtCcOGlGVT8?autoplay=1", 
                        "https://www.youtube.com/embed/eEfy3KkEkTE?autoplay=1", 
                        "https://www.youtube.com/embed/0Vkqx4nRLdc?autoplay=1", 
                        "https://www.youtube.com/embed/KoQy_p3vNb8?autoplay=1", 
                        "https://www.youtube.com/embed/Ev0jl6RS5Eo?autoplay=1", 
                        "https://www.youtube.com/embed/7SsAYhC9UuE?autoplay=1",
                        "https://www.youtube.com/embed/rVeMiVU77wo?autoplay=1",
                        "https://www.youtube.com/embed/2CG5XMuz_nY?start=45",
                        "https://www.youtube.com/embed/5NlHYdxi85w?start=164",
                        "https://www.youtube.com/embed/NhheiPTdZCw?autoplay=1",
                        "https://www.youtube.com/embed/TIJraYqUZ5g?autoplay=1"]

    // Different phrases for when you click the button

    var clickOptions = ["Keep Going", "Keep Clicking","Keep It Real", "Move Foward", "Next Vid", "What's Next", "Click Here", "Press Button", "Enjoy Vid",
                        "Raise Roof", "Rip It Hard", "Shorty McDangles", "WagWan", "Stay Chill", "Keep It Cool", "Remain Frosty", "Move It Along", "next",
                        ];
                       


    console.log(videoSources);

    // Function used to add autoplay capabilities to videos and push to sources:

    // function newVideo(x) {
    //     for (i = 0; i < videoSources.length; i++) {
    //         var newSources = x[i] + "?autoplay=1";
    //         newVidz.push(newSources);
    //         console.log(newVidz);
    //     }
    // }

    // newVideo(videoSources);

    // API Key ------ AIzaSyAuXPcEOJndYVhYw_uAzBkCrEFGuFpeOZ4

    //??????????????

//     function playVideo(){
//         var video = $('#lead');
//         video.play();
//         video.addEventListener('ended',function(){
//         window.location = 'http://www.google.com';
//     });
// }
    // ?????????????????
   


    // Button randomly chooses new video and push to html:

    $("button").on("click", function () {
        var video = videoSources[Math.floor(Math.random() * videoSources.length)];
        console.log(video);
        $("button").html(clickOptions[Math.floor(Math.random() * clickOptions.length)]);
        $("#lead").attr("src", video);
    });

   



});