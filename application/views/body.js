define('views/body', ['jquery'], function($) {
    var element = 'body',
        message = 'Hello Houston!';
        BodyView = function() {};

    BodyView.prototype.initialize = function() {
        $(element).html(message);
    };

    return BodyView;

});