var myApp = angular.module("myModule" ,[])
                   .controller("myController" ,function($scope){
                       
                       var doc = [
                           {id :1,name:"Sahil",age:21,specialization:"dentist",contact:9876543221,hospital:"leelabati"},
                           
                           {id :2,name:"Doctor Sstrange",age:34,specialization:"portal",contact:9876543221,hospital:"leelabati"},
                           
                           {id :3,name:"xyz",age:21,specialization:"xbxbxb",contact:9876543221,hospital:"leelabati"}
                       ];
                       
                       $scope.doc = doc;
                   });