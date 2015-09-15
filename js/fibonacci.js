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
})(window.fibonacci = window.fionacci || {});
