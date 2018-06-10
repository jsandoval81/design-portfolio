import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({

    tagName: 'div',

    classNames: [ 'portfolio-list' ],

    portfolioData: [
        {
            title: 'Grand Teton National Park',
            desc: 'A description of this portfolio section',
            backgroundImage: '/images/portfolio-img-1.jpg',
            projectImages: [
                {
                    title: 'A short description of image 1',
                    src: '/images/portfolio-img-1.jpg',
                    w: 4023,
                    h: 2268
                },
                {
                    title: 'A short description of image 2',
                    src: '/images/portfolio-img-2.jpg',
                    w: 2560,
                    h: 1440
                },
                {
                    title: 'A short description of image 3',
                    src: '/images/portfolio-img-3.jpg',
                    w: 2560,
                    h: 1440
                }
            ]
        },
        {
            title: 'Black Lake',
            desc: 'A description of this portfolio section',
            backgroundImage: '/images/portfolio-img-2.jpg',
            projectImages: [
                {
                    title: 'A short description of image 1',
                    src: '/images/portfolio-img-1.jpg',
                    w: 4023,
                    h: 2268
                },
                {
                    title: 'A short description of image 2',
                    src: '/images/portfolio-img-2.jpg',
                    w: 2560,
                    h: 1440
                },
                {
                    title: 'A short description of image 3',
                    src: '/images/portfolio-img-3.jpg',
                    w: 2560,
                    h: 1440
                },
                {
                    title: 'A short description of image 1',
                    src: '/images/portfolio-img-1.jpg',
                    w: 4023,
                    h: 2268
                },
                {
                    title: 'A short description of image 2',
                    src: '/images/portfolio-img-2.jpg',
                    w: 2560,
                    h: 1440
                },
                {
                    title: 'A short description of image 3',
                    src: '/images/portfolio-img-3.jpg',
                    w: 2560,
                    h: 1440
                },
                {
                    title: 'A short description of image 1',
                    src: '/images/portfolio-img-1.jpg',
                    w: 4023,
                    h: 2268
                },
                {
                    title: 'A short description of image 2',
                    src: '/images/portfolio-img-2.jpg',
                    w: 2560,
                    h: 1440
                },
                {
                    title: 'A short description of image 3',
                    src: '/images/portfolio-img-3.jpg',
                    w: 2560,
                    h: 1440
                }
            ]
        }
    ],

    cacheDomSelectors: function () {
        var $ = Ember.$;

        this.setProperties({
            $portfolioSections: $('section.portfolio-section'),
        });
    },

    updateSectionRatioClasses: function () {
        var ratioClass = (window.innerWidth / window.innerHeight > 1) ? 'wide' : 'tall',
            removeClass = (ratioClass === 'tall') ? 'wide' : 'tall';

        this.get('$portfolioSections').removeClass(removeClass).addClass(ratioClass);
    },

    didInsertElement: function () {
        var component = this;

        component._super.apply(component, arguments);

        component.cacheDomSelectors();
        component.updateSectionRatioClasses();

        Ember.$(window).on('resize', function () {
            component.updateSectionRatioClasses();
        });

    },

});
