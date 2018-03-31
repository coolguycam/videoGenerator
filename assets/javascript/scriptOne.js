var gap = 

function addResult(title, video, artist) {
    $("#lead").append($(

    `
        <div>
            <h2>${title}</h2>
            <iframe width="560" height="315" src="${video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h3>${artist}</h3>
        </div>
    `
))};

function onClientLoad() {
    gapi.client.load("youtube", "v3", onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAuXPcEOJndYVhYw_uAzBkCrEFGuFpeOZ4');
    search();
}

function search() {
    var request = gapi.client.youtube.search.list({
        part: 'url'
    });

    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
     showResponse(response);
}

// $(document).on("click", "#random-btn" function (x) {
//     x.preventDefault();
    
//     let queryURL ="https://www.gooleapis.com/youtube/v3/pl"

    





// });