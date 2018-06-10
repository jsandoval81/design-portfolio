import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({

    tagName: 'header',

    classNames: 'app-header',

    didInsertElement: function () {
        var $mobileMenu = Ember.$('.mobile-header-container nav'),
            animationDuration = 500;

        this._super.apply(arguments);

        Ember.$(document).on('click', function (event) {
            var $target = Ember.$(event.target);

            if ($target.hasClass('mobile-menu-icon')) {
                $mobileMenu.slideToggle(animationDuration);
            } else if ($mobileMenu.is(':visible')) {
                $mobileMenu.slideUp(animationDuration);
            }
        });
    },

});
