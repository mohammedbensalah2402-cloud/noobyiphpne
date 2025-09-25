function doAnimation(id, animName, duration, delay) {
    var el = document.getElementById(id);
    var timer;
    function addClass() {
        el.classList.add(animName);
    }
    function removeClass() {
        el.classList.remove(animName);
    }
    setInterval(function () {
        clearTimeout(timer);
        addClass();
        timer = setTimeout(removeClass, duration);
    }, duration + delay);
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
function isValidName(name) {
    var namelength = name.length;
	if(namelength < 5){return false;} else{return true;}
};

/*-------------------------------------------------------------------------------------------
Variables
--------------------------------------------------------------------------------------------*/
var phonecolor = "";
var phonecapacity = "";
var enddate = "";

$( document ).ready(function() {

/*-------------------------------------------------------------------------------------------
Animations
--------------------------------------------------------------------------------------------*/	
   doAnimation('logoimg', 'rotateIn', 2000, 4000);
   doAnimation('headerbuton', 'rubberBand', 1000, 10000); 
   
   
  $('.an1,.an2,.an3,.an4,.an5,.an6').css('opacity', 0);
  $(".imgbox").addClass("animated fadeInLeft");
  var counter = 0;
  $('.features').waypoint(function() {
      var timer = setInterval(function () {
        counter++;
        $(".an" + counter).addClass("animated fadeInRightBig");
        if(counter>6){
             clearInterval(timer);
        }
     }, 200);
   }, { offset: '60%' });
   
  $('.cb1,.cb2,.cb3,.cb4, .cb5').css('opacity', 0); 
  var counterb = 0;
  $('.choosecolor').waypoint(function() {
		var timerb = setInterval(function () {
        counterb++;
        $(".cb" + counterb).addClass("animated fadeInLeft");
        if(counterb>5){
             clearInterval(timerb);
        }
     }, 700);
   }, { offset: '75%' });
   $('.details,.detailsimg').css('opacity', 0);
    $('.termsconditions').waypoint(function() {
        $(".details").addClass("animated fadeInLeft");
		$(".detailsimg").addClass("animated fadeInRightBig");
   }, { offset: '75%' });
/*-------------------------------------------------------------------------------------------
Dates
--------------------------------------------------------------------------------------------*/ 
 switch(giveawaylength) {
    case 'hourly':
        enddate = moment().endOf("hour").format('MM/DD/YYYY hh:mm:ss a');
        break;
	case 'daily':
        enddate = moment().endOf("day").format('MM/DD/YYYY hh:mm:ss a');
        break;
    case 'weekly':
        enddate = moment().endOf("isoweek").format('MM/DD/YYYY hh:mm:ss a');
        break;
	case 'monthly':
        enddate = moment().endOf("month").format('MM/DD/YYYY hh:mm:ss a');
        break;	
    default:
		enddate = moment().endOf("day").format('MM/DD/YYYY hh:mm:ss a');
}
 
  
   $(".enddate").html(enddate);
   $('#clock').countdown(enddate).on('update.countdown', function(event) {
        var format = '<li>%H<br /><span>hour%!H<span></li><li>%M<br /><span>minute%!M<span></li><li>%S<br /><span>second%!S<span></li>';
        if(event.offset.totalDays > 0) {
            format = '<li>%d<br /><span>day%!d<span></li>' + format;
        }
        if(event.offset.weeks > 0) {
            format = '<li>%w<br /><span>week%!w<span></li>' + format;
        }
        $(this).html(event.strftime(format));
   })
   .on('finish.countdown', function(event) {
        $(this).html('This offer has expired!')
        .parent().addClass('disabled');

    });

        $('.counterbox').counterUp({
           delay: 20,
           time: 3000
        });
 
/*-------------------------------------------------------------------------------------------
Console
--------------------------------------------------------------------------------------------*/	
	
var names =	[{}];

var min = parseInt(phonesnumber/2);
var max = phonesnumber;
var phonesnr = Math.floor(Math.random()*(max-min+1)+min);

var gb32 =  parseInt(phonesnr/2);
var gb128 =  parseInt(gb32/2);
var gb256 = phonesnr - gb32 - gb128;
var currentdate = new Date(); 
var time = (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes();
var item = names[Math.floor(Math.random()*names.length)];
var feed = '<h3><i class="fa fa-mobile" aria-hidden="true"></i> <span class="phonesleft">' + phonesnr + '</span> FREE iPhone 15 Left!</h3>' + 
           '<h4>iPhone 15 claimed by ' +  item.name + ' ' + item.surname + ', ' + item.region + ' (' + time + ')</h4>';
$(".stocka").html(gb32);
$(".stockb").html(gb128);
$(".stockc").html(gb256);
$(".feed").html(feed);
$(".chooseleft").html(phonesnr + " FREE iPhone 15");
var timer = setInterval(function () {
    $(".feed").fadeOut(2500, function () {
		    var currentdate = new Date(); 
            var time = (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes();
			var item = names[Math.floor(Math.random()*names.length)];
			var feed = '<h3><i class="fa fa-mobile" aria-hidden="true"></i> <span class="phonesleft">' + phonesnr + '</span> FREE iPhone 15 Left!</h3>' + 
           '<h4>iPhone 15 claimed by ' +  item.name + ' ' + item.surname + ', ' + item.region + ' (' + time + ')</h4>';
			$(this).html(feed).fadeIn(2500);
			$(".chooseleft").html(phonesnr + " FREE iPhone 15 Left");
    });
	
	phonesnr--; 
	
	var arr =[1, 0, 0];
	var newarr = shuffleArray(arr);

	gb32 = gb32 - newarr[0];
	gb128 = gb128 - newarr[1];
	gb256 = gb256 - newarr[2];
	
	$(".stocka").html(gb32);
    $(".stockb").html(gb128);
    $(".stockc").html(gb256);
	if(phonesnr === 3 || gb32 === 1 || gb128 === 1 || gb256 === 1){clearInterval(timer); }
}, 10000);

for(var i=0;i<5;i++){
	var item = names[Math.floor(Math.random()*names.length)];
    $('<li><i class="fa fa-trophy" aria-hidden="true"></i> ' + item.name + ' ' + item.surname + ', ' + item.region + '</li>') .hide().appendTo( ".winners" ) .fadeIn(3000);
}

$(".color-box").click(function(){		
    $(".choosecolor").hide();
	$(".choosecapacity").show();
	$(".colors-title").text("Choose Capacity");
	phonecolor = $(this).find("p").text();
});
$(".capacity-box").click(function(){		
    $(".choosecapacity").hide();
	$(".form").show();
	$(".colors-title").text("Contact Info");
	phonecapacity = $(this).find(".cp").text();
});	
$("#register").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();
	if(isValidEmailAddress(email) &&  isValidName(name)) {
		$(".form").hide();
	    $(".console").show();
	    $(".colors-title").html('<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
	}
	else{
		if(!isValidName(name)){swal("ERROR", "Invalid Name!", "error");}
		else{
			if(!isValidEmailAddress(email)){swal("ERROR", "Invalid Email!", "error");}
		}
	}
	var capacitychoose = 0;
	if(phonecapacity === "32"){capacitychoose = gb32;}
	if(phonecapacity === "128"){capacitychoose = gb128;}
	if(phonecapacity === "256"){capacitychoose = gb256;}
	var console = '<p><span><strong>Name:</strong></span> ' + name + '<br>';
    console += '<span><strong>Email:</strong></span> ' + email + '<br>';	            
	console += '<span><strong>Checking selected color: </strong></span>' + phonecolor + ' color in stock!<br>';
	console += '<span><strong>Checking selected capacity ' + phonecapacity + ' Gb:</strong></span>  ' + capacitychoose + ' in stock!</p>';
	$(".console-text").typed({
                        strings: [console],
                        contentType: 'html', 
                        typeSpeed: 50,
			            showCursor: false,
						callback: function() {	
						    setTimeout(function(){
								$('.console').hide();
			                    $(".verification").show();
								$(".colors-title").text("You have 1 Unclaimed iPhone 15!");
								var end = new Date().getTime() + 5*60*1000;
                                $(".verificationcounter").countdown(end).on('update.countdown', function(ev) {
                                    var format = '%M minute%!M and %S second%!S';
                                    $(this).html(ev.strftime(format));
                               })
                               .on('finish.countdown', function(ev) {
                                   $(this).html('one minute');
                               });
                            }, 1000);					
						}
                    });
});	
   

/*-------------------------------------------------------------------------------------------
Popup
--------------------------------------------------------------------------------------------*/	 
  $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
})
  
});