// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("centralamController", function ($scope) {

    var trinidad = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://caribseek.com/", name: "Caribseek" },
        { news: "https://www.findyello.com/", name: "Yellow Pages" },
        { news: "http://www.trinidadtimes.com/", name: "Trinidad Times" },
        { news: "http://www.trinidadexpress.com/", name: "Trinidad Express" },
        { news: "http://www.guardian.co.tt/", name: "Trinidad Guardian" },
        { news: "http://www.newsday.co.tt/", name: "Newsday" }
    ];


    $scope.trinidad = trinidad;

});