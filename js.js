(function(d) {
	var colors = [
		'255,0,0',
		'0,255,0',
		'0,0,255',
		'255,0,255',
		'0,255,255',
		'255,255,0',
	], loopTimes = 3, styleText = '', opacity = 0.2;
	for (var i = 1; i < loopTimes * colors.length + 1; i++) {
		for (var k = 0; k < i; k++) {
			styleText += '* ';
		}
		styleText += '{background-color: rgba(';
		styleText += colors[i % colors.length];
		styleText += ',' + opacity + '); }\n';
	}
	var head = d.head || d.getElementsByTagName('head')[0];
  var style = d.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(d.createTextNode(styleText));
})(document);
