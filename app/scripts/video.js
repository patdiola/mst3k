'use strict';

/**
 * @ngdoc function
 * @name video.js
 * @description
 * # Video JS
 * JS for the embedded youtube videos.
 */

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var YT = YT || null;
var VIDEO = {
  player: null,
  ready: false,
  queue: false,

  init: function() {
    VIDEO.queue = true;

    if (VIDEO.ready) {
      VIDEO.player = new YT.Player('player', {
        width: '1600',
        volume: 0,
        videoId: 'GL0rbxB9Lqg',
        loop: 1,
        events: {
          'onReady': VIDEO.start
        }
      });
    }
  },

  start: function() {
    VIDEO.player.playVideo();
    VIDEO.player.seekTo(25);

    VIDEO.player.addEventListener('onStateChange', 'onYouTubeStateChange');
  }
};

var onYouTubeStateChange = function(e) {
  if (e.data === 0) {
    VIDEO.player.playVideo();
  }
};

var onYouTubeIframeAPIReady = function() {
  VIDEO.ready = true;

  if (VIDEO.queue) {
    VIDEO.init();
  }
};
