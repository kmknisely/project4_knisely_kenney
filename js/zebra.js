$(document).ready(function() {


    $('#img1').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img1-content').html()
            },
            width: 600,
            title: 'True'
        });
    });

    $('#img2').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img2-content').html()
            },
            width: 600,
            title: 'True'
        });
    });

    $('#img3').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img3-content').html()
            },
            width: 600,
            title: 'True'
        });
    });

    $('#img4').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img4-content').html()
            },
            width: 600,
            title: 'True'
        });
    });

    $('#img5').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img5-content').html()
            },
            width: 600,
            title: 'True'
        });
    });

    $('#img6').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img6-content').html()
            },
            width: 600,
            title: 'True'
        });
    });

    $('#img7').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img7-content').html()
            },
            width: 600,
            title: 'True'
        });
    });

    $('#img8').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.quiz').length ? false : true,
            source: {
                inline: $('#img8-content').html()
            },
            width: 600,
            title: 'False'
        });
    });








    setTimeout(function() {
        $.Zebra_Pin($('blockquote.bg-warning'));
    }, 500);

});
