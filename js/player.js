var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerInfoList = [{
    id: 'player1',
    videoId: 'p5y6lwNmLOM'
}, {
    id: 'player2',
    videoId: '-pRHO1psAYY'
}, {
    id: 'player3',
    videoId: 't7fKTh5uAxE'
}, ];

function onYouTubeIframeAPIReady() {
    if (typeof playerInfoList === 'undefined') return;

    for (var i = 0; i < playerInfoList.length; i++) {
        var curplayer = createPlayer(playerInfoList[i]);
        players[i] = curplayer;
    }
}

var players = new Array();

function createPlayer(playerInfo) {
    return new YT.Player(playerInfo.id, {
        height: playerInfo.height,
        width: playerInfo.width,
        videoId: playerInfo.videoId,
    });
}

$(document).ready(function () {
    $('#player-alt-1').click(function () {
        //loop players array to stop them all
        $(players).each(function (i) {
            console.log(this);
            this.stopVideo();
        });
    });
})

$(document).ready(function () {
    $('#player-alt-2').click(function () {
        //loop players array to stop them all
        $(players).each(function (i) {
            console.log(this);
            this.stopVideo();
        });
    });
})

$(document).ready(function () {
    $('#player-alt-3').click(function () {
        //loop players array to stop them all
        $(players).each(function (i) {
            console.log(this);
            this.stopVideo();
        });
    });
})


$(document).ready(function () {
    $('#player-alt-3').click(function () {
        //loop players array to stop them all
        $(players).each(function (i) {
            console.log(this);
            this.stopVideo();
        });
    });
})



var vid1 = document.getElementById('show-player-1');
var vid2 = document.getElementById('show-player-2');
var vid3 = document.getElementById('show-player-3');

var alt1 = document.getElementById('player-alt-1');
var alt2 = document.getElementById('player-alt-2');
var alt3 = document.getElementById('player-alt-3');

var hover1 = document.getElementById('hover1');
var hover2 = document.getElementById('hover2');
var hover3 = document.getElementById('hover3');




alt1.addEventListener( "click",
  function(event){
    vid1.style.display="block";
    vid2.style.display="none";
    vid3.style.display="none";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

  },false

);

alt2.addEventListener( "click",
  function(event){
    vid1.style.display="none";
    vid2.style.display="block";
    vid3.style.display="none";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

  },false

);

alt3.addEventListener( "click",
  function(event){
    vid1.style.display="none";
    vid2.style.display="none";
    vid3.style.display="block";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

  },false
);

hover1.addEventListener( "click",
  function(event){
    vid1.style.display="block";
    vid2.style.display="none";
    vid3.style.display="none";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

  },false

);

hover2.addEventListener( "click",
  function(event){
    vid1.style.display="none";
    vid2.style.display="block";
    vid3.style.display="none";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

  },false

);

hover3.addEventListener( "click",
  function(event){
    vid1.style.display="none";
    vid2.style.display="none";
    vid3.style.display="block";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

  },false
);
