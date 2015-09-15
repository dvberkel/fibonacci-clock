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
})(window.fibonacci = window.fionacci || {});
