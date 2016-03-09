/** core.js
 *  Created by Richard Bennett
 *  v1.0.0
 */

var meta = {
	referrer : '',
	name : '',
	email : '',
	description : ''
};

Parse.initialize("uk1gTCitsaMMm7me90m6YSwUyXBHCQrXOUqzXsIk", "SR58EeX7yZzzZ2Yd8EZy6OYspcyqSjX1L22Q2Gh7");

/*
function rainbow() {
	// 30 random hues with step of 12 degrees
	var hue = Math.floor(Math.random() * 30) * 12;

	return $.Color({
		hue: hue,
		saturation: 0.9,
		lightness: 0.6,
		alpha: 1
	});
};
*/

$('#btn_frm_contact_submit').on('click', function(){
	$('form#contact').submit();
});

$('form#contact input, form#contact textarea').on('keyup', function(e){
	//console.log($(this));
	//console.log(e);
	switch ($(this).attr('id')){
		case 'txt_name':
			meta.name = $(this).val();
			break;
		case 'txt_email':
			meta.email = $(this).val();
			break;
		case 'txt_desc':
			meta.description = $(this).val();
			break;
		default:
			break;
	}
});
$('form#contact input, form#contact textarea').on('blur', function(e){
	//assign data vars
	meta.name = $('form#contact #txt_name').val();
	meta.email = $('form#contact #txt_email').val();
	meta.description = $('form#contact #txt_desc').val();
});
$('form#contact input, form#contact textarea').on('focus', function(e){
	//assign data vars
	meta.name = $('form#contact #txt_name').val();
	meta.email = $('form#contact #txt_email').val();
	meta.description = $('form#contact #txt_desc').val();
});

$('form#contact').on('submit', function(e){
	var Introduction = Parse.Object.extend("Introduction");
	var intro = new Introduction();
	intro.save(meta, {
		success: function(savedIntroObject){
			console.log('Saved object '+savedIntroObject.id);
		},
		error: function(error){
			console.error(error);
		}
	}).then(function(object) {
		alert('Thanks for reaching out!\nWe will get back to you within 2 business days.\n\nYour name and email will not be shared with any third party, nor will you be added to any mailing lists.');
	});
	e.preventDefault();
});

$('.btn.c2a').on('click', function() {
	meta.referrer = $(this).data('referrer');
    $.smoothScroll({
		offset: 0,
		direction: 'top',
		// fn(opts) function to be called before scrolling occurs.
		// `this` is the element(s) being scrolled
		beforeScroll: function() {},

		// fn(opts) function to be called after scrolling occurs.
		// `this` is the triggering element
		afterScroll: function() {},
		easing: 'swing',

		// speed can be a number or 'auto'
		// if 'auto', the speed will be calculated based on the formula:
		// (current scroll position - target scroll position) / autoCoeffic
		speed: 400,

		// autoCoefficent: Only used when speed set to "auto".
		// The higher this number, the faster the scroll speed
		autoCoefficient: 2,

		// $.fn.smoothScroll only: whether to prevent the default click action
		preventDefault: true,

		//target to scroll to
    	scrollTarget: 'section#contact'

	});
    return false;
  });

$(function(){
	//DOM is ready, so do stuff

	//Hero image video
	$('section.hero').vide('img/motion/clouds','posterType: jpg');

});