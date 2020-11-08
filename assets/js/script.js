$(function () {
    $('[data-toggle="popover"]').popover()
    $('body').popover({
        selector: '[data-popover]',
        trigger: 'hover',
        placement: 'top',
        delay: {
            show: 50,
            hide: 1300,
            }
        });
        $("a").click(function(event) {
                if (this.hash !== "") {
                event.preventDefault();
                var gato = this.hash;
                $('html, body').animate({
                scrollTop: $(gato).offset().top
                }, 800, function(){
                window.location.hash = gato;
                });
                }
            });    
})




