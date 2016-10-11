$(document).ready(function(){       
   	var scroll_start = 0;
   	var startchange = $('#startchange');
   	var offset = startchange.offset();
   	if (startchange.length){
   		$(document).scroll(function() { 
      		scroll_start = $(this).scrollTop();
		      	if(scroll_start > offset.top) {
		          	$(".navbar-light").css('background-color', '#e3f2fd');
		       	} else {
		          	$('.navbar-light').css('background-color', 'transparent');
		       	}
   		});
    };

	$('#ButtonSubmit').on('click', function(e) {

    	var email = $('#email').val();

    	if (email.length < 1) {
    		if (!$('#messageData').length) {
    			$('#message').append('<p id="messageData">Invalid email.</p>')
    		}
    	} else {
    		if ($('#messageData').length > 0) {
    			$('#messageData').remove()
    		}
    		$('#message').append('<p id="messageData">Thank you! I will update you on my progress.</p>')
        	$.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLScZrbryhc0jYF15SFVRlLfVAlUSmClmVXxhAR5u8F3jkcna3w/formResponse",
                data: { "entry.1520677451": email},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
    					$('#ButtonSubmit').hide();
    					return false
                    },
                    200: function () {
    					$('#ButtonSubmit').hide();
     					return false
                    }
                }
            });
        }

        e.preventDefault();
        
	});
});
