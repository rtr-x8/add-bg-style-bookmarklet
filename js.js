(function(d) {
	var colors = [
		'255,0,0',
		'0,255,0',
		'0,0,255',
		'255,0,255',
		'0,255,255',
		'255,255,0',
	], loopTimes = 3, hierarchy = 1, styleText = '', opacity = 0.2;
	for (var i = 0; i < loopTimes; i++) {
		for (var j = 0; j < colors.length; j++) {
			for (var k = 0; k < hierarchy; k++) {
				styleText += '* ';
			}
			hierarchy++;
			styleText += '{background-color: rgba(';
			styleText += colors[j];
			styleText += ',' + opacity + '); }\n';
		}
	}
	var head = d.head || d.getElementsByTagName('head')[0];
  var style = d.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(d.createTextNode(styleText));
})(document);
