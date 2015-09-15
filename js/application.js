;(function(fibonacci){
    var canvas = document.getElementById('clock');

    var clock = new fibonacci.Clock();
    var view = new fibonacci.ClockView(clock, canvas);

    function tick(){
        clock.update();
        view.update();
        requestAnimationFrame(tick);
    };
    tick();

    window.clock = clock;
})(window.fibonacci);
