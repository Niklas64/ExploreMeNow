// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("canadaController", function ($scope) {

    var canadatopnews = [
        { news: "http://www.cbc.ca/", name: "CBC" },
        { news: "https://www.theglobeandmail.com/", name: "The Globe and Mail" },
        { news: "https://www.thestar.com/", name: "The Toronto Star" },
        { news: "http://en.canoe.com/", name: "Canoe" },
        { news: "http://vancouversun.com/", name: "Vancouver Sun" },
        { news: "http://www.tsn.ca/", name: "TSN Sport" },
        { news: "http://www.lapresse.ca/", name: "La Presse" },
        { news: "http://www.torontosun.com/", name: "Toronto Sun" },
        { news: "http://www.ctvnews.ca/", name: "CTV News" },
        { news: "http://www.rds.ca/", name: "RDS Sport" },
        { news: "http://www.tvanouvelles.ca/", name: "TVA Nouvelles" },
        { news: "http://thechronicleherald.ca/", name: "Chronicle Herald" },
        { news: "http://www.winnipegfreepress.com/", name: "Winnipeg Free Press" },
        { news: "https://www.meteomedia.com/", name: "Météo Média" },
        { news: "http://www.timescolonist.com/", name: "Times Colonist" },
        { news: "http://www.vanpeople.com/", name: "Van People (ch)" },
        { news: "http://www.edmontonsun.com/", name: "Edmonton Sun" },
        { news: "http://www.calgarysun.com/", name: "Calgary Sun" },
        { news: "http://www.winnipegsun.com/", name: "Winnipeg Sun" }
    ];


    $scope.canadatopnews = canadatopnews;

});