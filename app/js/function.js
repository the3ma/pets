$(document).on('click', '.video-component-overlay', function(event) {
    event.preventDefault();
    $(this).toggleClass('pause bg-pause');
    var pvvdeio = $(this).parent();
    var pvvideo = pvvdeio.find('video');
    pvvideo.trigger('play');
});
$(document).on('click', '.video-component-overlay.pause', function(event) {
    event.preventDefault();
    var pavideo = $(this).parent();
    var pavvideo = pavideo.find('video');
    pavvideo.trigger('pause');
});
$(document).ready(function() {
    setTimeout(function() {
        var hw = $('#header').outerHeight();
        $('#header').height(hw).css('z-index', '22');;
        var styles = { 'position': 'relative', 'margin-bottom': '-' + hw + 'px', 'top': '-' + hw + 'px' }
        $('.pael').css(styles);
    }, 10);


});
$(window).resize(function() {
    setTimeout(function() {
        var hw = $('#header').outerHeight();
        $('#header').height(hw).css('z-index', '22');
        var styles = { 'position': 'relative', 'margin-bottom': '-' + hw + 'px', 'top': '-' + hw + 'px' }
        $('.pael').css(styles);
    }, 10);
})