'use strict';

var app = (function (document, $, window) {

    var docElem = document.documentElement;

    var _userAgentInit = function () {
            docElem.setAttribute('data-useragent', navigator.userAgent);
        },
        _mobileNavInit = function () {
            $(document).on('change', 'header select', function () {
                window.location = $(this).val();
            });
        },
        _bindContactFormValidator = function(){
            initFormValidator($('#contact form'));
        };

    var init = function () {
        $(document).foundation();
        _userAgentInit();
        _mobileNavInit();
        _bindContactFormValidator();
    };

    return {
        init: init
    };

})(document, jQuery, window);

(function () {

    app.init();
    initFormValidator($('#contact form'));
    startClosureTest();
    bindVideoElement();


})();


function initFormValidator(form){

    $(document).on('submit', form, function(e){

        var valid = true;
        $('.errormsg', form).remove();
        $('.error', form).removeClass('error');

        $('input, select, textarea', form).each(function(){

            var $this = $(this);
            var $parent = $(this).parent();

            var isRequired = $this.hasClass('required');
            var isEmail = $this.hasClass('email');

            if(isRequired && ! $(this).val().length){
                $this.addClass('error');
                $parent.append('<p class="errormsg">Veld is verplicht!</p>');
                valid = false;
            }

            var regexp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if(isEmail && !regexp.test($(this).val())){
                $this.addClass('error');
                $parent.append('<p class="errormsg">Ongeldig emailadres!</p>');
                valid = false;
            }

        });

        return valid;

    });

}

function startClosureTest(){

    for(var i = 0; i < 5; i++) {

        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 2000);
        })(i);

    }

}

function bindVideoElement(){

    var video = document.getElementById('examplevideo');

    $(document).on('click', '#play', function(){
        video.play();
        $('#play').attr("disabled", "disabled");
        $('#pause').removeAttr("disabled");
        return false;
    });

    $(document).on('click', '#pause', function(){
        video.pause();
        $('#pause').attr("disabled", "disabled");
        $('#play').removeAttr("disabled");
        return false;
    });

}
