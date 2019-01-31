// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("australiaController", function ($scope) {

    var caledonia = [
        { news: "http://www.ebay.com/", name: "eBay" },
        { news: "http://www.searchyellowdirectory.com/", name: "Yellow and White Pages" },
        { news: "http://www.lnc.nc/", name: "Les Nouvelles Calédoniennes" },
        { news: "http://nouvellecaledonie.la1ere.fr/", name: "Nouvelle Caledonie" },
        { news: "http://www.dnc.nc/", name: "DNC" },
        { news: "https://www.facebook.com/CaledonianPost/", name: "Caledonian Post" },
        { news: "https://www.islandsbusiness.com/", name: "Island Business" }
    ]


    $scope.caledonia = caledonia;

});