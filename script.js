window.onload = function() {

  navigator.getUserMedia = (
  			navigator.getUserMedia
  	|| 	navigator.webkitGetUserMedia
  	|| 	navigator.mozGetUserMedia
  	|| 	navigator.msGetUserMedia);

  if (navigator.getUserMedia) {
	  // Request the camera.
	  navigator.getUserMedia(
	    // Constraints
	    {
	      video: true
	    },

	    // Success Callback
	    function(localMediaStream) {
	    	var vid = document.getElementById('camera-stream');
				vid.src = window.URL.createObjectURL(localMediaStream);

	    },

	    // Error Callback
	    function(err) {
	      // Log the error to the console.
	      console.log('The following error occurred when trying to use getUserMedia: ' + err);
	    }
	  );

	} else {
	  alert('Sorry, your browser does not support getUserMedia');
	}

}