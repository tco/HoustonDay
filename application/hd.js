require.config({
    baseUrl: '../',
    paths: {
        'views': 'application/views'
    },
    shim: {
        'views': {
            deps: ['jquery']
        }
    }
});

require(['views/body'], function(BodyView) {
    var body = new BodyView();
    body.initialize();
});