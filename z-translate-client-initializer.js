'use strict';

module.exports = {
    run: function (app, next) {
        var ZTranslateClient = require("z-translate-client");
        app.translateClient = new ZTranslateClient(app.config.zTranslateClient);
        app.translateClient.load(function (err, res) {
            if (err) {
                app.logger.warn('TRANSLATE CLIENT', err);
            }
        });
        next();
    }
};