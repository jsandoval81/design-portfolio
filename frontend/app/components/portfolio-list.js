import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({

    tagName: 'div',

    classNames: [ 'portfolio-list' ],

    portfolioData: [
        {
            title: 'Digital & Print',
            desc: 'A description of this portfolio section',
            backgroundImage: '/images/digital_print_background.jpg',
            projectImages: [
                {
                    title: 'Brochure of Classes',
                    src: '/images/class_brochure.jpg',
                    w: 1920,
                    h: 1280,
                },
                {
                    title: 'Magazine style layout created for a corporate White Paper',
                    src: '/images/tes-whitepaper-cover.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Magazine style layout created for a corporate White Paper',
                    src: '/images/tes-whitepaper-1-2.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Magazine style layout created for a corporate White Paper',
                    src: '/images/tes-whitepaper-3-4.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Magazine style layout created for a corporate White Paper',
                    src: '/images/tes-whitepaper-5-6.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Oversized layout created to showcase software products',
                    src: '/images/product_brochure_cover.jpg',
                    w: 1920,
                    h: 1229,
                },
                {
                    title: 'Oversized layout created to showcase software products',
                    src: '/images/product_brochure_1-2.jpg',
                    w: 1920,
                    h: 1229,
                },
                {
                    title: 'Oversized layout created to showcase software products',
                    src: '/images/product_brochure_3-4.jpg',
                    w: 1920,
                    h: 1229,
                },
                {
                    title: 'Annual Company Report',
                    src: '/images/report_cover.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Annual Company Report',
                    src: '/images/report_1-2.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Annual Company Report',
                    src: '/images/report_3-4.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Annual Company Report',
                    src: '/images/report_5-6.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Annual Company Report',
                    src: '/images/report_7-8.jpg',
                    w: 1920,
                    h: 1440,
                },
            ]
        },
        {
            title: 'UI/UX',
            desc: 'A description of this portfolio section',
            backgroundImage: '',
            projectImages: [
                {
                    title: 'An award winning UI for business banking applications.',
                    src: '/images/gmb_awards.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'An award winning UI for business banking applications.',
                    src: '/images/gmb_tablet_screens.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'An award winning UI for business banking applications.',
                    src: '/images/gmb_process_examples.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Vault was created as a template for Financial Institutions to use as an application for new products.',
                    src: '/images/vault_device_group.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'The Vault template uses best practices in UI/UX design coupled with user research for banking applications.',
                    src: '/images/vault_mobile_screens.jpg',
                    w: 1920,
                    h: 1440,
                },
                {
                    title: 'Credit Cards designed as assets for the Vault design.',
                    src: '/images/vault_creditcards.jpg',
                    w: 1920,
                    h: 1440,
                },
            ]
        },
        {
            title: 'Web',
            desc: '',
            backgroundImage: '',
            projectImages: [
                {
                    title: 'A short description of image 1',
                    src: '/images/portfolio-img-1.jpg',
                    w: 4023,
                    h: 2268,
                },
                {
                    title: 'A short description of image 2',
                    src: '/images/portfolio-img-2.jpg',
                    w: 2560,
                    h: 1440,
                },
                {
                    title: 'A short description of image 3',
                    src: '/images/portfolio-img-3.jpg',
                    w: 2560,
                    h: 1440,
                }
            ]
        },
        {
            title: 'Brand',
            desc: 'A description of this portfolio section',
            backgroundImage: '',
            projectImages: [
                {
                    title: 'A short description of image 1',
                    src: '/images/portfolio-img-1.jpg',
                    w: 4023,
                    h: 2268,
                },
                {
                    title: 'A short description of image 2',
                    src: '/images/portfolio-img-2.jpg',
                    w: 2560,
                    h: 1440,
                },
                {
                    title: 'A short description of image 3',
                    src: '/images/portfolio-img-3.jpg',
                    w: 2560,
                    h: 1440,
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
