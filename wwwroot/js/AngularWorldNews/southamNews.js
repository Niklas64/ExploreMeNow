// <reference path="~/js/angular.min.js" />

var myApp = angular.module("newsModule", []).controller("southamController", function ($scope) {

    var falkland = [
        { news: "https://www.ebay.com/", name: "eBay" },
        { news: "http://en.mercopress.com/", name: "Falklands-Malvinas & South Atlantic News" },
        { news: "http://sartma.com/", name: "Sartma" },
        { news: "http://www.penguin-news.com/", name: "Penguin News" }
    ];


    $scope.falkland = falkland;

});