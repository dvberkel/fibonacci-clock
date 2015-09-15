;(function($){
    var numbers = [5, 3, 2, 1, 1];
    decompose = function(n){
        var result = numbers.reduce(function(result, element){
            if (element <= n){
                n -= element;
                result.push(element);
                return result;
            }
            return result;
        }, []);
        return {
            result: result,
            rest: n
        }
    }

    frequency = function(){
        return Array.prototype.slice.call(arguments).reduce(function(frequencies, elements){
            elements.forEach(function(element){
                if (!frequencies[element]) {
                    frequencies[element] = 0;
                }
                frequencies[element] += 1;
            });
            return frequencies;
        }, {});
    }

    var Clock = $.Clock = function(){
        this.update();
    };
    Clock.prototype.update = function(date){
        date = new Date();
        this.hour = date.getHours() > 12 ? date.getHours() - 12: date.getHours();
        this.minutes = Math.floor(date.getMinutes() / 10);
    };

    var View = $.ClockView = function(model, canvas){
        this.model = model;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.update();
    };
    View.prototype.update = function(){
        var width = this.canvas.width; var height = this.canvas.height;
        var hourFrequency = frequency(decompose(this.model.hour).result);
        var minutesFrequency = frequency(decompose(this.model.minutes).result);
        this.fill5With(this.colorFor(hourFrequency[5],minutesFrequency[5]));
        this.fill3With(this.colorFor(hourFrequency[3],minutesFrequency[3]));
        this.fill2With(this.colorFor(hourFrequency[2],minutesFrequency[2]));
        this.fillBWith(this.model.hour === 12 ? 'red': 'white');
        this.fillAWith(this.colorFor(hourFrequency[1],minutesFrequency[1]));
    };
    View.prototype.fill5With = function(color){
        var width = this.canvas.width; var height = this.canvas.height;
        this.fill(width - height, 0, height, color)
    };
    View.prototype.fill = function(x, y, size, color){
        this.context.fillStyle = color;
        this.context.fillRect(x, y, size, size);
    };
    View.prototype.fill3With = function(color){
        var width = this.canvas.width; var height = this.canvas.height;
        this.fill(0, 2*height - width, width - height, color)
    };
    View.prototype.fill2With = function(color){
        var width = this.canvas.width; var height = this.canvas.height;
        this.fill(0, 0, 2*height - width, color)
    };
    View.prototype.fillBWith = function(color){
        var width = this.canvas.width; var height = this.canvas.height;
        this.fill(2*height - width, 0, 2*width - 3*height, color)
    };
    View.prototype.fillAWith = function(color){
        var width = this.canvas.width; var height = this.canvas.height;
        this.fill(2*height - width, 2*width - 3*height, 2*width - 3*height, color)
    };
    View.prototype.colorFor = function(hour, minutes){
        hour = hour || 0; minutes = minutes || 0;
        if (hour === 0 && minutes === 0) {
            return 'white';
        }
        if (hour > 0 && minutes === 0) {
            return 'red';
        }
        if (hour === 0 && minutes > 0) {
            return 'blue';
        }
        if (hour > 0 && minutes > 0) {
            return 'green';
        }
    };
})(window.fibonacci = window.fibonacci || {});
