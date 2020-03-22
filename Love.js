$(function(){
	var fill = ['#e4a2c4', '#eee586', '#a2decf', '#cda0e7', '#f7d2a8'];
	var targetIndex = 0;
	
	$(document).click(
		function(e){
			var i = targetIndex;
			
			targetIndex++;
			if (targetIndex == fill.length) {
				targetIndex = 0;
			}
			
			var pizza = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			$('svg').append(pizza);
			
			var x = e.pageX;
			var y = e.pageY;
			var angle = -90;
			var radius = Math.sqrt(Math.pow(Math.max(x, window.innerWidth - x), 2) + Math.pow(Math.max(y, window.innerHeight - y), 2));
			
			$(pizza).attr('fill', fill[i]);
			
			var timer = setInterval(
				function(){
					var d = 'M ' + x + ' ' + y + ' v ' + -radius + ' a '
					+ radius + ' ' + radius + ' 0 '
					+ (angle >= 90 && angle <= 270 ? 1 : 0) + ' 1 '
					+ radius * Math.cos(angle / 180 * Math.PI) + ' ' 
					+ (radius * Math.sin(angle / 180 * Math.PI) + radius) + ' Z'
					
					$(pizza).attr('d', d);
					angle += 7;
					
					if (angle >= 270) {
						clearInterval(timer);
						$('body').css('background-color', fill[i]);
						$(pizza).remove();
					}
				},
				30
			);
		}
	);
});