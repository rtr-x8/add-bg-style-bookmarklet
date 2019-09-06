(function() {
	var colors = [
		'255,0,0',
		'0,255,0',
		'0,0,255',
		'255,0,255',
		'0,255,255',
		'255,255,0',
	];
	var loopTimes = 3;
	var hierarchy = 1;
	var styleText = '';
	var opacity = 0.2;
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
	var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(document.createTextNode(styleText));
})();
