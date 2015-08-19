'use strict';

var app = (function (document, $, window) {

    var docElem = document.documentElement;

    var _userAgentInit = function () {
            docElem.setAttribute('data-useragent', navigator.userAgent);
        },
        _mobileNavInit = function () {
            $(document).on('change', 'header select', function (e) {
                e.preventDefault();
                window.location = $(this).val();
                return false;
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


})();


function initFormValidator(form){

    $(document).on('submit', form, function(e){

        e.preventDefault();

        var valid = true;
        $('.errormsg', form).remove();
        $('.error', form).removeClass('error');

        $('input, select, textarea').each(function(){

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
            }

        });

        return valid;

    });

}

