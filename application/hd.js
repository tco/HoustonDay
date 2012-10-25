require.config({
    baseUrl: '../',
    paths: {
        'views': 'application/views'
    },
    shim: {
        'hd': {
            deps: ['jquery']
        }
    }
});

require(['views/body'], function(BodyView) {
    var body = new BodyView();
    body.initialize();
});