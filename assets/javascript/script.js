$(document).ready(function() {

    // var arr = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/AM33T7q4XbI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    // ""];
var videoSources = ["https://www.youtube.com/embed/fGqdIPer-ms", "https://www.youtube.com/embed/fGqdIPer-ms", "https://www.youtube.com/embed/6YzGOq42zLk",
    "https://www.youtube.com/embed/EEMcd48UwMI", "https://www.youtube.com/embed/vHb0ysdvs3Q", "https://www.youtube.com/embed/2FdP0eS47ts", 
    "https://www.youtube.com/embed/aFUzvbkEvRk", "https://www.youtube.com/embed/rkB5bM_54sc", "https://www.youtube.com/embed/Nx94936Hl5Q", 
    "https://www.youtube.com/embed/KyZDvZmvhik", "https://www.youtube.com/embed/_1gShXIO6pk", "https://www.youtube.com/embed/2CG5XMuz_nY?start=45",
    "https://www.youtube.com/embed/IJWlBfo5Oj0", "https://www.youtube.com/embed/qKax7euEM5Q", "https://www.youtube.com/embed/8IV___Motnc",
    "https://www.youtube.com/embed/A8tIuYwFcS0", "https://www.youtube.com/embed/482lqzBFS38",
    "https://www.youtube.com/embed/gtCcOGlGVT8", "https://www.youtube.com/embed/eEfy3KkEkTE",
    "https://www.youtube.com/embed/0Vkqx4nRLdc", "https://www.youtube.com/embed/KoQy_p3vNb8",
    "https://www.youtube.com/embed/Ev0jl6RS5Eo", "https://www.youtube.com/embed/7SsAYhC9UuE"]
    // var current = 0;
    console.log(videoSources);
    
    $("button").on("click", function() {
         var video = videoSources [Math.floor(Math.random() * videoSources.length)];
         console.log(video);
         $("button").html("Keep Clicking");
         $("#lead").attr("src",video);

        
    });

    // function myNewSrc() {
    //     var myVideo = document.getElementsByTagName('video')[0];
    //     .src = videoSources[currentIndex];
    //     myVideo.load();
    // }

    // myNewSrc(0);

    

    //       var currentIndex = 0;
    // // listener function changes src
    //       function myNewSrc() {
    //           var myVideo = document.getElementsByTagName('video')[0];
    //           myVideo.src = videoSources[currentIndex];
    //           myVideo.load();
    //       }

         
    // // add a listener function to the ended event
    //       function myAddListener(){
    //           var myVideo = document.getElementsByTagName('video')[0];
    //           currentIndex = (currentIndex+1) % videoSources.length;
    //           myVideo.src = videoSources[currentIndex];
    //           myVideo.addEventListener('ended', myNewSrc, false);
              
    //       }
  
});