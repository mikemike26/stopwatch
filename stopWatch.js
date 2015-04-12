(function(window){
    var StopWatch = function(){
        this.time = 0;
        this.callback = function(){};
    };

    StopWatch.prototype.minutes = function(){
        return parseInt(this.time / 600, 10);
    };

    StopWatch.prototype.seconds = function(){
        return parseInt((this.time % 600) / 10, 10);
    };

    StopWatch.prototype.tenths = function(){
        return parseInt((this.time % 600) % 10, 10);
    };

    StopWatch.prototype.tick = function(callback){
        this.callback = callback || function(){};
    };

    StopWatch.prototype.updateCallback = function() {
        this.callback({
            minutes: this.minutes(),
            seconds: this.seconds(),
            tenths: this.tenths()
        });
    };

    StopWatch.prototype.start = function(){
        if(this.timer) {
            return;
        }

        var self = this;

        this.timer = setInterval(function(){
            self.time += 1;
            self.updateCallback()
        }, 100)
    };

    StopWatch.prototype.stop = function(){
        clearInterval(this.timer);
        this.timer = null;
    };

    StopWatch.prototype.clear = function(){
        this.time = 0;
        this.updateCallback();
    };



    window.StopWatch = StopWatch;

})(window);
