function intInput(b){var a=(typeof b.charCode=="undefined"?b.keyCode:b.charCode);if(a<32){return true}a=String.fromCharCode(a);return/[\d]/.test(a)}
function pull_top(thisid){
    var top = thisid.offset().top;
    thisid.css({'top': '-'+top+'px'});
}


$(document).ready(function() {
    
    
    // $("body").css("top","-100%");

    // $("body").animate({top:'0'},1000);

    // $("a.fade").click(function(event){
    //     event.preventDefault();
    //     linkLocation = this.href;
    //     $("body").animate({top:"-100%"},1000);
    //     redirectPage();
    // });

    // function redirectPage() {
    //     window.location = linkLocation;
    // }

    /*ajax_link*/
    // $(".js_ajax_link").on("click", function () {
    //     var url = $(this).attr('href');
    //     $('#page').load(url + " #page > *");
    //     return false;
    // });

	/* Placeholder for IE */
    if($.browser.msie) { // Условие для вызова только в IE
        $("form").find("input[type='text'], textarea, input[type='password']").each(function() {
            var tp = $(this).attr("placeholder");
            $(this).attr('value',tp).css('color','#ccc');
        }).focusin(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == val) {
                $(this).attr('value','').css('color','#1b1b1b');
            }
        }).focusout(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == "") {
                $(this).attr('value', val).css('color','#ccc');
            }
        });

        /* Protected send form */
        $("form button").live('click', function() {
            $(this).parent('form').find("input[type='text'], textarea, input[type='password']").each(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','');
                }
            })
        });
    }

    /*select*/
    $(".chosen-select").selectbox({
        onOpen: function (inst) {
        var col_sel = $(".sbOptions li").length,
            height_sel = $(".sbOptions li").height() * col_sel - $(".sbOptions li").height() + 18,
            height_hed = $(".hheader").height();
        $(".sbOptions li:first").hide();    
        $(".hheader").animate({height:height_sel+height_hed},600);
        },
        onClose: function (inst) {
            var height_hed = $("#header").height();
        $(".hheader").animate({height:height_hed},600);
        }
    });

    /*filter price*/
    $('.price_range .range').noUiSlider({
        range: [0,20000],
        start: [0,20000],
        handles: 2,
        connect: true,
        serialization: {
            to: [ $('.input_start'), $('.input_end') ],
            resolution: 1,
        }        
    });
    $('.clean').on('click', function(){
        $('.price_range .range').noUiSlider({
            range: [0,20000],
            start: [0,20000],       
        }, true);
        $('.js_status_label').removeClass('checked');
    });
    

    var thisid;
    /*расскрывашки фильтров*/
    $('[data-id]').on("click", function () {
        thisid = $('#'+$(this).attr("data-id"));
        if(thisid.hasClass('expand')){
            $(this).toggleClass('active');
            $(thisid).slideToggle();
            return false;
        }
        if(thisid.hasClass('pull')){
            $(thisid).addClass('active');
            $('html, body').animate({
            scrollTop: 0
            }, 700);
            pull_top(thisid);
            // $(thisid).css({'top': '-'+top+'px'});
            $(thisid).animate({left:0},600).css({'z-index':'8'});
            $(window).scroll(function(){
                $(thisid).find('.header').css({'position':'fixed'});
            });
        }
    });
    
    
    
    $('.js_back_ref, .js_radio_sort > input[type="radio"]').on("click", function () {
        $('.pull').removeClass('active').animate({
        left: "100%"},700).css({'z-index':'0'});
         $('.pull').removeAttr('style').find('.header').css({'position':'absolute'});
    });
    /*выпадашка сортировки*/
    $('#sortby .js_sort_list').each(function () {
        $('.group_sort:first').slideDown();
        $('.js_sort_list:first').slideUp();
    });
    $('.js_sort_list').on("click", function () {
        $('.group_sort').slideUp();
        $('.js_sort_list').slideDown();
        $(this).slideUp();
        $(this).next('.group_sort').slideDown();
    });

    /*выбор статуса*/
    $('.js_status_label > input[type="checkbox"]').live('click', function(){
        $(this).parent('').toggleClass('checked');
    });
    /*выбор сортировки*/
    $('.js_radio_sort > input[type="radio"]').live('click', function(){
        var check_rezalt = $(this).val();
        $('.js_radio_sort').removeClass('checked');
        $(this).parent('.radio_sort').addClass('checked');
        $(this).parents('.sortby_filter').prev('.inp_t').find('.val_fil').html(check_rezalt);
    });
    $('.js_radio_sort > input[type="checkbox"]').live('click', function(){
        $(this).parent('.js_radio_sort').toggleClass('checked');
    });

    /*tabs how to*/
    $('.wrap-tabs').each(function(){
        $(this).find(".tab_content").hide();
        $(this).find("ul.tabs li:first").addClass("active").show();
        $(this).find(".tab_content:first").show();
    });
    $(".wrap-tabs ul.tabs li a").on("click", function() {
        if ($(this).parents("li").hasClass("active")) return false;
        $(this).parents('.tabs').find("li").removeClass("active");
        $(this).parent().addClass("active"); 
        $(this).parents('.wrap-tabs').find(".tab_content").hide(); 
        $($(this).attr("href")).fadeIn(); 
        return false;
    });
    //script for popups
    $('a.js_popup').live("click", function () {
        $('html, body').animate({
        scrollTop: 0
        }, 700);
        $('.popup').fadeOut(100);
        $('#overlay').fadeOut(100);
        url = $('div'+$(this).attr("href"));
        $(url).fadeIn(500);
        $('#overlay').fadeIn(100);
        return false;               
    }); 
    $('a.close, a.cansel, a.back, #overlay').click(function () {
        $('.popup').fadeOut(100);
        $('#overlay').fadeOut(100);
        return false;
    });
    /*rate*/
    $('.js_score').raty({
      score: function() {
        return $(this).attr('data-rating');
      }
    });
    $('.js_star').raty({
      readOnly : true,
        score: function() {
        return $(this).attr('data-rating');
      }
    });
     $('.js_down_soc').live("click", function() {
        $(this).toggleClass('active').next('.social_block').slideToggle();
        return false;
    });
   
	/*выпадашка сортировки заказов*/
	$('.submenu-nav-deploy').on("click", function(){
		if($(this).hasClass('submenu-nav-deploy-active')) {
			$(this).parent().find('.submenu-nav-items').slideDown(500);
			$(this).removeClass('submenu-nav-deploy-active');
			return false;
		}
		else {
			$(this).parent().find('.submenu-nav-items').slideUp(500);
			$(this).addClass('submenu-nav-deploy-active');
			return false;
		}
	});

	$('.submenu-nav-items a').live('click', function(){
			var selectResult = $(this).html(),
			thisId = $(this).attr('data-id'),
			selfBtn = $(this).parents('.submenu-navigation');
		$('.i_sort').val(thisId);
		$(".submenu-nav-items a.active").removeClass("active");
		$(selfBtn).find('.submenu-nav-deploy').html('').html(selectResult);
		$(this).parents('.submenu-nav-items').slideUp();
		$(this).parents('.submenu-navigation').find('.submenu-nav-deploy').addClass('submenu-nav-deploy-active');
		$(this).addClass('active');	
	});

	/*выпадашка delivery adres*/
	$('.delivery-nav-deploy').on("click", function(){
		$(this).parents('.row').next('.delivery-nav-adres').slideToggle(500);
		return false;
	});
    $('.delivery-nav-adres a').on("click", function(){
        switch ($(this).attr("data-id")) {
            case 'prof':
                $(this).parents('.delivery-nav-adres').slideUp(500);
                return false;
            break;
            case 'new':
                return true;
            break;
        }
    });
	/*выпадашка list adres*/
	$('.list-nav-deploy').on("click", function(){
		$(this).toggleClass('submenu-nav-deploy-active').parent().find('.submenu-nav-items').slideToggle(500);
		return false;
	});
	$('.submenu-nav-items a').live('click', function(){
		var thisId = $(this).attr('data-id');
        $(this).parents('.submenu-navigation').find('.list-nav-deploy').addClass('submenu-nav-deploy-active');
		$('.more_info').hide();
		$("#"+thisId).show();	
		return false;
	});
	// переключатель вида каталога	
	$("[data-view]").on("click", function(){
		$("[data-view].active").removeClass("active");
		$(this).addClass("active");
		switch ($(this).attr("data-view")) {
			case 'list':
				$(".wrap_view > ul").addClass("view_class_list").removeClass("view_class_grid");
			break;
			case 'grid':
				$(".wrap_view > ul").addClass("view_class_grid").removeClass("view_class_list");
			break;
		}
		return false;
	});
	/*input search*/
	$('.inp_search').focus(function() {
	    $(this).val('');
	    $('.js_cansl').fadeIn(400);
	    $('.icon-success').fadeOut(400);
	});
	$('.inp_search').blur(function() {
		$('.js_cansl').fadeOut(400);
	});
	
    //выпадашка в картах

    $('.js_drop_address').on("click", function(){
		if($(this).hasClass('drop_address-active')) {
			$('.js_drop_address').next('.js_drop').slideUp(500)
			$('.js_drop_address').addClass('drop_address-active');
			$(this).next('.js_drop').slideDown(500);
			$(this).removeClass('drop_address-active');
			return false;
		}
		else {
			$(this).next('.js_drop').slideUp(500);
			$(this).addClass('drop_address-active');
			return false;
		}
	});

	//выпадашка в картах

    $('.js_validate button').live("click", function(){
        return validate($(this).parent(".js_validate"));
    });
   
    //выпадашка категорий
    $('.js_category li a').live("click", function() {
        // $('.js_category li.active').removeClass('active').find('ul').slideUp();
        if ($(this).parent().find('ul').length) {
            if ($(this).parent().hasClass('active')) {
                return true;
            }
            else { 
                $('.js_category li').removeClass('active').find('ul').slideUp();
                $(this).parent().toggleClass('active').children('ul').slideToggle();
                return false;
            }
        } 
        
    });
    $('.js_cat_down').live("click", function() {
        $(this).toggleClass('active');
        $('.js_subcategory').slideToggle();
        return false;
    });

    /*link_add_cart/wishlist button*/
    $('.js_add_btn_cart').live('click', function(){
        $(this).toggleClass('del');
        if($(this).hasClass('del')) {
            $(this).find('span').text('Delete from cart');
        }
        else {$(this).find('span').text('Add to cart');}
        return false;
    });
    $('.js_add_btn_wish').live("click", function(){
        $(this).toggleClass('del');
        if($(this).hasClass('del')) {
            $(this).find('span').text('Delete from Whishlist');
        }
        else {$(this).find('span').text('Add to Whishlist');}
        return false;
    });
    $('.js_add_cart').live('click', function(){
        $(this).toggleClass('added');
        if($(this).hasClass('added')) {
            $(this).find('.text_cart').text('Already added');
            $(this).find('.icon').removeClass('icon-Myicons-16').addClass('icon-Myicons-29');
        }
        else {
            $(this).find('.text_cart').text('Add to cart');
            $(this).find('.icon').removeClass('icon-Myicons-29').addClass('icon-Myicons-16');
        }
        return false;
    });
    /*switch*/
    $(".js_switch").iButton();
    /*slider*/
    $('#camera_index').camera({
        height: '65%',
        loader: 'bar',
        thumbnails: false,
        hover: false,
        opacityOnGrid: false
    });
    $('#camera_item').camera({
        height: '90%',
        loader: false,
        thumbnails: false,
        hover: false,
        opacityOnGrid: false
    });

});


function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    function mark (object, expression) {
        if (expression) {
            object.parent('div').addClass(error_class).parents();
            e++;
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class);
    }
    form.find("[required]").each(function(){
        // console.log($(this));
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length == 0);
            break;
            case "email":
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break
        }
    })
    if (e == 0) {
    	form.next('.error_new-address').hide();
    	form.next().next('.success_new-address').show();
        return true;
    }
    else {
        // alert("Не все необходимые поля были заполнены! Проверьте правильность введенных данных и повторите отправку формы");
        $(".block_cap4a a").trigger("click");
        $(".block_cap4a input[type=text]").val('');
        form.find("."+error_class+" input:first").focus();
        form.next('.error_new-address').show();
        form.next().next('.success_new-address').hide();
        return false;
    }
}  