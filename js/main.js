$(document).ready(function () {
    let aboutOffset = $("#about").offset().top;
    /* //////////////////onscroll///////////////// */
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll >= 100) {
            $("#main-nav").css("background-color", "#111");
        }
        else {
            $("#main-nav").css("background-color", "transparent");

        }
        if (windowScroll >= aboutOffset - 100) {
            $("#topBtn").fadeIn(1000);
        }
        else {
            $("#topBtn").fadeOut(1000);
        }

        /* ////////////change navlink on scroll/////////// */
        $(".nav-item > a[href^='#']").each(function () {
            let navHref = $(this).attr("href");
            let sectionOffset = $(navHref).offset().top;
            let sectionHeight = $(navHref).outerHeight(true);
            let overOffset = sectionOffset + sectionHeight
            if (windowScroll >= (sectionOffset - 100) && windowScroll < overOffset) {
                $(this).addClass("active-link");
                $(this).parent().siblings().find(".nav-link").removeClass("active-link")
            }
            else {
                $(this).removeClass("active-link")
            }
        })
    });

    $("#topBtn").click(function () {
        $("html, body").animate({ scrollTop: "0" }, 1000)
    });
    /* ////////// scroll on click navlink//////// */
    $(".nav-item > a[href^='#']").click(function () {
        let navHref = $(this).attr("href");
        let sectionOffset = $(navHref).offset().top;
        $("html, body").animate({ scrollTop: sectionOffset }, { queue: false, duration: 1000 });
        $(this).addClass("active-link");
        $(this).parent().siblings().find(".nav-link").removeClass("active-link")
    });

    /* ////////// loader page ////////////////// */
    $(".lds-ellipsis").fadeOut(1000)
    $("#loader").delay(500).fadeOut(1000, function () {
        $("body").css("overflow-y", "auto");
    });
    /* ///////////typed animation///////////// */
    let typed = new Typed("#typed", {
        strings: ["I'm Simone Olivia", "I'm a Freelancer.", "I'm a Photographer.", "I'm a Designer."],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500
    });

    /* ///////////////counter///////////////// */
    $(".counter").counterUp({
        time: 2000,
        delay: 5
    });
    /* /////////scroll down btn/////////////// */
    $("#scrollDown").click(function () {
        $("html, body").animate({ scrollTop: aboutOffset }, 1000)
    });

    /* //////////////portfolio isotape//////////// */
    $(".portfolio-box-container").isotope({
        itemSelector: ".portfolio-box",

    });
    let $container = $(".portfolio-box-container").isotope({
        layoutMode: "masonry",
    });
    $(".filter>.filter-item>.filter-link").click(function () {
        $(this).addClass("port-active-link");
        $(this).parent().siblings().find(".filter-link").removeClass("port-active-link")
        let filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

    $(".owl-carousel").owlCarousel(
        {
            autoplay: true,
            loop: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }


            }
        }
    );



    $("#colorBtn").click(function () {
        let innerBoxWidth = $(".inner-box").outerWidth(true);

        if ($(".color-box").css("right") == "0px") {
            $(".color-box").animate({ right: `-${innerBoxWidth}` }, 1000);
        }
        else {
            $(".color-box").animate({ right: `0` }, 1000);
        }
    });

    $(".color").click(function () {
        let currentColor = $(this).css("background-color");
        let borderColor = $(this).css("border-color");
        $(":root").css({ "--main-color": `${currentColor}`, "--hover-color": `${borderColor}` })
    })
    $("#reset").click(function () {
        let resetColor = $(this).css("background-color");
        let resetBorder = $(this).css("border-color")
        $(":root").css({ "--main-color": `${resetColor}`, "--hover-color": `${resetBorder}` })
    });


    /* /////////navbar on mobile */
    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse, .navbar-toggler").removeClass("show");
    });
    
});
