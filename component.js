"use strict";
{
    let calculator = {
        templateUrl: "calculator.html",
        controller: function (){
            let vm = this;

        }
    }
    angular
        .module("app")
        .component("calculator", calculator);
}