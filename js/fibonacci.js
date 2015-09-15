;(function($){
    var numbers = [5, 3, 2, 1, 1];
    $.decompose = function(n){
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

    $.frequency = function(){
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
    Clock.prototype.update = function(){
        var date = new Date();
        this.hour = date.getHours() % 24;
        this.minutes = Math.floor(date.getMinutes() / 10);
    }
})(window.fibonacci = window.fionacci || {});
