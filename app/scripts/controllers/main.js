'use strict';

/**
 * @ngdoc function
 * @name mst3kApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mst3kApp
 */

var App = angular.module('mst3kApp');
var VIDEO = VIDEO || null;

App.controller('MainCtrl', function ($scope, $timeout) {
  $scope.showModal = false;
  $scope.modalVideo = document.createElement('iframe');
  
  $scope.exhibits = [{
      id: 'exhibit-1',
      videoId: 'mve7hRaoH8U',
      copy: 'Season 0 KTMA'
    }, {
      id: 'exhibit-2',
      videoId: '8gHBgo65Als',
      copy: 'Comedy Central The Golden Years'
    }, {
      id: 'exhibit-3',
      videoId: '_Q8CpaejCk8',
      copy: 'Sci-Fi, Crow\'s voice, & Ram Chips'
  }];

  $scope.startMainVideo = function() {
    // Start the main video in the intro section of the page.
    $scope.mainVideoIsPlaying = true;
    VIDEO.init();
  };

  $scope.openVideoModal = function(videoId) {
    var videoModal = document.querySelectorAll('.video-container');
    angular.element(videoModal).html('<iframe src=\'https://www.youtube.com/embed/' + videoId + '?autoplay=1\' frameborder=\'0\'></iframe>');
    $scope.showModal = true;

    // Pause the main video if its playing.
    VIDEO.player.pauseVideo();
  };

  $scope.closeVideoModal = function() {
    $scope.showModal = false;
    var youtubeIframe = document.querySelectorAll('.video-modal iframe');
    angular.element(youtubeIframe).remove();
  };

  $scope.backToTop = function() {
    window.scrollTo(0, 0);
  };

  $scope.chooseLanguage = function() {
    var dropdown = document.getElementById('option-language-dropdown');
    dropdown.classList.add('open');

    document.getElementById('option-language-dropdown').classList.add('open');
    document.getElementById('option-language-dropdown-wrapper').onmouseout = function(e) {
      var mouseoutToElement = e.toElement.offsetParent.getAttribute('id');

      if (mouseoutToElement !== 'option-language-dropdown' && mouseoutToElement !== 'option-language-dropdown-wrapper') {
        dropdown.classList.remove('open');
      }
    };
  };
});
