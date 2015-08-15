var content = function() {
	(function (){
		for (var i in window)
		{
			try {
				var jsType = typeof window[i];
				switch (jsType.toUpperCase())
				{					
					case "FUNCTION": 
						if (window[i] !== window.location)
						{
							if (window[i] === window.alert)
								window[i] = function(){return "";};
							else if (window[i] === window.onbeforeunload)
								window.onbeforeunload = null;
							else if (window[i] === window.onunload)
								window.onunload = null;	
								
						}
						break;							
				}			
			}
			catch(err)
			{}		
		}
	})();
};
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = "(" + content + ")();";
document.documentElement.appendChild(script);