$(".team-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        850: {
            items: 3
        },

        1366: {
            items: 4
        }
    }
});

$(".cartoon-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },


        700: {
            items: 1
        },

        1024: {
            items: 1
        },

        1366: {
            items: 1
        }
    }
});


$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    margin: 10,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1
        },


        700: {
            items: 2
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
});