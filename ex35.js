/**
 * Created by mehmet.aktas2 on 29.03.2017.
 */
var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .when("/courses", {
                templateUrl: "templates/courses.html",
                controller: "coursesController",
                controllerAs: "coursesCtrl"
            })
            .when("/students", {
                templateUrl: "templates/students.html",
                controller: "studentsController",
                controllerAs: "studentsCtrl"
            })
            .when("/students/:id", {
                templateUrl: "templates/studentsDetail.html",
                controller: "studentsDetailController",
                controllerAs: "studentsDetailCtrl"
            })
            .otherwise({redirectTo: '/'})
    });
