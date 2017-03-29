/**
 * Created by mehmet.aktas2 on 29.03.2017.
 */
var app = angular
    .module("Demo", [])
    .controller("countryController", function () {
        this.name = "India";
    })
    .controller("stateController", function () {
        this.name = "Maharashtra";
    })
    .controller("cityController", function () {
        this.name = "Mumbai";
    });