$( document ).ready(function() {
	parseAnswerRosOrg("turtlebot");
});

//parseAnswerRosOrg
//inspired from Andrew's reply on http://stackoverflow.com/questions/226663/parse-rss-with-jquery
function parseAnswerRosOrg(tag) {
  url = 'http://answers.ros.org/feeds/rss/?tags=' + encodeURIComponent(tag)

  try {
  	$.ajax({
    	url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    	dataType: 'json',
    	success: function(data) {
      	parseAnswerRosOrg_callback(data);
    	}
  	});
  }
  catch (err) {
	return;
  }
}
//end parseAnswerRosOrg

//parseAnswerRosOrg_stripHTML
//anti-html injection from 3rd party rss
function parseAnswerRosOrg_stripHTML(dirtyString,maxlength) {
	//strip white space
	dirtyString = $.trim(dirtyString);
	//max length
	if(dirtyString.length > maxlength) {
		dirtyString = dirtyString.substring(0,maxlength - 3) + "...";
	}
	
	//protect against html injection in case ROS isn't clearing
	try {
    	var container = document.createElement('div');
    	container.innerHTML = dirtyString;
    	return container.textContent || container.innerText;
	}
	catch (err) {
		return "";
	}
}
//end parseAnswerRosOrg_stripHTML

//parseAnswerRosOrg_callback
function parseAnswerRosOrg_callback(data) {
	try {
		if (data.responseData.feed && data.responseData.feed.entries) {
			var tmp_html = "<ul>";
			count = 0;
	      	$.each(data.responseData.feed.entries, function (i, e) {
				count++;
				if(count <= 5) { //max # of recent threads to show
		        	tmp_html = tmp_html.concat("<li>");
					tmp_html = tmp_html.concat("<a target='_blank' href='" + parseAnswerRosOrg_stripHTML(e.link) + "'>");
					tmp_html = tmp_html.concat(parseAnswerRosOrg_stripHTML(e.title,100));
					tmp_html = tmp_html.concat("</a> by ");
					tmp_html = tmp_html.concat(parseAnswerRosOrg_stripHTML(e.author,30))
					tmp_html = tmp_html.concat("</li>");
			    } 
	     	});
			tmp_html = tmp_html.concat("</ul>");
			$("#answerrosorg").html(tmp_html);
		}
    }
	catch (err) {
		return;
	}
}
//end parseAnswerRosOrg_callback