import BaseRoute from 'site/routes/_base-route';
import Ember from 'ember';
var Promise = Ember.RSVP.Promise;

export default BaseRoute.extend({

    //
    assetMap: Ember.inject.service('asset-map'),

    //
    model() {
        var assetMap = this.get('assetMap.map'),
            imageAssets = [],
            loadImages;

        Object.keys(assetMap).forEach(function (assetPath) {
            if (/^images\//.test(assetPath)) {
                imageAssets.push(assetMap[assetPath]);
            }
        });

        loadImages = imageAssets.map(function (imageUrl) {
            return new Promise((resolve, reject) => {
                var image = new Image();

                // window.setTimeout(function () {
                //     image.onload = resolve;
                //     image.onerror = reject;
                //     image.src = imageUrl;
                // }, 100000);

                image.onload = resolve;
                image.onerror = reject;
                image.src = imageUrl;
            });
        });

        return Promise.all(loadImages).then(function () {
            Ember.$('.app-loading').hide();
            window.loadingUi.foreground.destroy();
            window.loadingUi.background.destroy();
            Ember.$('.app-loading').remove();
        });
    },

});
