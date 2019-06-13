


var x = function () {
    function createBicyclePrototype(){
    return {
      speed: 0,
        applyBrake: function(x){
        this.speed -=x;
          },
        speedUp: function (x) {
        this.speed+=x;
        }
      }
    }

    function createMountainBikePrototype (proto){

        newBike = Object.create(proto);
          newBike.gear = 1;
          newBike.setGear = function(gear){
          this.gear = gear;
          }
          newBike.toString = function(){
          console.log(`Name is ${this.speed} gearNumber ${this.gear} and status ${this.status}`);
          }
          
          return newBike;
        
        }
        
        function start(){
        
          pimpedBike = createMountainBikePrototype(createBicyclePrototype());
          pimpedBike.toString();
          
        }
        
        start();
        }();
        





class Bicycle {

    constructor(createBicyclePrototype, createMountainBikePrototype, start){
      this.createBicyclePrototype = function(){
        return {
            speed: 0,
            applyBrake: function(x){
              this.speed -=x;
              },
            speedUp: function (x) {
              this.speed+=x;
            }
          }
        }
        
        this.createMountainBikePrototype = function(proto){
        var newBike = Object.create(proto);
          newBike.gear = 1;
          newBike.setGear = function(gear){
            this.gear = gear;
          }
          newBike.toString = function(){
            console.log(`Name is ${this.speed} gearNumber ${this.gear} and status ${this.status}`);
          }
    
          return newBike;
        }
        
        this.start = function(){
        var pimpedBike = this.createMountainBikePrototype(this.createBicyclePrototype());
      pimpedBike.toString();
        }
      }
      
      
    }
    
    var bike = new Bicycle();
    bike.start();


    var x = function () {
    function createBicyclePrototype(){
    return {
      speed: 0,
        applyBrake: function(x){
        this.speed -=x;
          },
        speedUp: function (x) {
        this.speed+=x;
        }
      }
    }

    function createMountainBikePrototype (proto){

        newBike = Object.create(proto);
          newBike.gear = 1;
          newBike.setGear = function(gear){
          this.gear = gear;
          }
          newBike.toString = function(){
          console.log(`Name is ${this.speed} gearNumber ${this.gear} and status ${this.status}`);
          }
          
          return newBike;
        
        }
        
        function start(){
        
          pimpedBike = createMountainBikePrototype(createBicyclePrototype());
          pimpedBike.toString();
          
        }
        
        start();
        }();
        

