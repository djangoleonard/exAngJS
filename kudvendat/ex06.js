/**
 * Created by mehmet.aktas2 on 29.03.2017.
 */
var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {firstName: "Ben", lastName: "Hasting", gender: "Male", salary: 55550},
            {firstName: "Hello", lastName: "Timur", gender: "Male", salary: 3550},
            {firstName: "Leo", lastName: "Çiftçi", gender: "Female", salary: 4000},
            {firstName: "Sait", lastName: "Ceylan", gender: "Male", salary: 67655},
            {firstName: "Harun", lastName: "Efe", gender: "Nötr", salary: 123550}
        ];
        var countries = [
            {
                name: "UK",
                cities : [
                    {name: "London"},
                    {name: "Manchester"},
                    {name: "Birmingham"}
                ]
            },
            {
                name: "TR",
                cities : [
                    {name: "Bursa"},
                    {name: "Şanlıurfa"},
                    {name: "Gaziantep"}
                ]
            },
            {
                name: "DE",
                cities : [
                    {name: "Mannheim"},
                    {name: "Stuttgart"},
                    {name: "Freuburg"}
                ]
            }
        ];
        $scope.employees = employees;
        $scope.countries = countries;
    });