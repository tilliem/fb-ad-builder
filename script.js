
$('form').submit(function(e){
		e.preventDefault;
    return false;
});

$(document).ready(function(){

	$('button').on('click', function(){
		html2canvas($("#final-wrap"), {
        onrendered: function(canvas) {
            var myImage = canvas.toDataURL("image/png");
			$('.lightbox').fadeIn(200);
			$('.final-image').attr('src', myImage).fadeIn(200);
        },
        useCORS: true
    });
	});

	$('#badge-switch').on('click', function(){
		$('.cta').toggleClass('active');
	})

	$('#switch').on('click', function(){
		$('#img-overlay').toggleClass('active');
	})

	$('.close-lightbox').on('click', function(){
		$('.lightbox').css("display","none");
	});

		$('#change-copy').click(
		function(){
			var value = $('.message-box').val();
			$('.final-message').text(value);
		}
	);

	$('#image-input').on('change', function() {
		console.log('changed...');
		console.log(this.files);
		var adImg = document.getElementById('final-image');
		var ad = document.getElementById('final-wrap');
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				adImg.setAttribute('src', e.target.result);
				resize();
			}
			reader.readAsDataURL(this.files[0]);
		} else {

		}
	})

	function previewImage(input) {
		var adImg = document.getElementById('final-image');
		var ad = document.getElementById('final-wrap');
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				adImg.setAttribute('src', e.target.result);
				resize();
				//ad.style.backgroundImage = "url(" + e.target.result + ")";
			}
			reader.readAsDataURL(input.files[0]);
		} else {

		}
	}

	function resize() {
		$('#final-wrap').each(function() {
		    //set size
		    var th = $(this).height(),//box height
		        tw = $(this).width(),//box width
		        im = $(this).children('img'),//image
		        ih = im.height(),//inital image height
		        iw = im.width();//initial image width

		    if ((th/tw) > (ih/iw)){
		    	im.addClass('wh').removeClass('ww');//set height 100%
		    } else {
		    	im.addClass('ww').removeClass('wh');//set width 100%
		    }

		    //set offset
		    var nh = im.height(),//new image height
		        nw = im.width(),//new image width
		        hd = (nh-th)/2,//half dif img/box height
		        wd = (nw-tw)/2;//half dif img/box width
		        if (hd < 1) {hd = 0;}
		        if (wd < 1) {wd = 0;}
		    im.css({marginLeft: '-'+wd+'px', marginTop: '-'+hd+'px'});//offset left
		});
	}

});
