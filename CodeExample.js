var w,h,mvp;
			mvp = document.getElementById('myViewport');
			window.onload = function () {
				w=screen.width;
				h=screen.height;
				mvp.setAttribute('content','width='+screen.width+',height='+screen.height);
			}

			window.addEventListener("resize", function() {
				if(screen.width==w)
					mvp.setAttribute('content','width='+w+',height='+h);
				else
					mvp.setAttribute('content','width='+h+',height='+w);
			}, false);
