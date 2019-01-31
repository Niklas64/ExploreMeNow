// <reference path="angular.min.js" />

var myApp = angular.module("newsModule", []).controller("asiaController", function ($scope) {

    var russia = [
        { news: "http://www.avito.ru/", name: "Avito" },
        { news: "http://www.ebay.com", name: "eBay" },
        { news: "http://www.yp.ru/", name: "желтые страницы (yellow pages)" },
        { news: "http://kompravda.eu/", name: "Комсомольская Правда" },
        { news: "http://www.mk.ru/", name: "MKRU" },
        { news: "http://www.themoscowtimes.com/", name: "The Moscow Times (eng)" },
        { news: "https://regnum.ru/", name: "Regnum" },
        { news: "http://news.yandex.ru/", name: "Яндекс" },
        { news: "https://www.vedomosti.ru/", name: "ведомости" },
        { news: "http://news.mail.ru/", name: "Novosti Mail" },
        { news: "http://iz.ru/", name: "известия" },
        { news: "http://www.vesti.ru/", name: "Вести.Ru" },
        { news: "https://life.ru/", name: "Life" },
        { news: "http://www.kommersant.ru/", name: "Коммерсантъ" },
        { news: "http://www.rbc.ru/", name: "RBC" },
        { news: "http://www.pravda.ru/", name: "Рravda.ru" },
        { news: "http://ria.ru/", name: "РИА Новости" },
        { news: "http://www.rg.ru/", name: "Российская газета" },
        { news: "http://www.sport-express.ru/", name: "Cпорт-Экспресс" },
        { news: "https://www.gazeta.ru/", name: "Газета" },
        { news: "http://tass.ru/", name: "TACC" },
        { news: "http://www.dp.ru/", name: "Деловой Петербург" },
        { news: "http://rusrep.ru/", name: "Русский Репортер" },
        { news: "http://www.oblgazeta.ru/", name: "Областная газета" },
        { news: "http://www.dagpravda.ru/", name: "Дагестанская правда" },
        { news: "http://www.vladnews.ru/", name: "Новости Владивостока" },
        { news: "http://www.sovsibir.ru/", name: "Советская Сибирь" },
        { news: "http://www.hello.ru/", name: "Hello!" },
        { news: "https://lenta.ru/", name: "Lenta" },
    ]


    $scope.russia = russia;

});