$(document).ready(function() {		
	$("#start").click( 
		function() {
			
			number_of_trials = 5;
			
			var all_chars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
			new_chars = shuffle(all_chars);
			number_of_trials--;
			
			for(a=0; a<number_of_trials; a++) {
				temp_chars = shuffle(all_chars);
				new_chars = new_chars.concat(temp_chars);
			}
						
			c=new_chars.length;
			i=0;
			
			var d = new Date();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var n = d.getMilliseconds();
			console.log(m*60*1000+1000*s+n); // output second+ms to console log
			setTimeout(flash,2000);
			// 2 second pause before stimulus presentation starts
			
			var flash_time = 100;
			var ISI = 100;
			
			function flash() {
				
				var d = new Date();
				var m = d.getMinutes();
				var s = d.getSeconds();
				var n = d.getMilliseconds();
				console.log(m*60*1000+1000*s+n); // output second+ms to console log
											
				if(i<c) {
					
					var flash_index = new_chars[i];
					
					light_unlit(flash_index,1); // highlight element
					
					setTimeout(
						function() {
							light_unlit(flash_index,0); // revert element to default colour after flash
							
							var d = new Date();
							var m = d.getMinutes();
							var s = d.getSeconds();
							var n = d.getMilliseconds();
							console.log(m*60000+1000*s+n); // output second+ms to console log
							
							setTimeout(flash,ISI);
						}
					,flash_time);
					
				}
			
				i++;
			
			}
			// recursive function to keep calling setTimeout until all characters have flashed
						
			function light_unlit(char_index,state) {
				
				if(state==0) {
					stim_colour = "white";
				} else {
					stim_colour = "red";
				}
				
				switch(char_index) {
				case 1: $("#A").css("color",stim_colour); break;
				case 2: $("#B").css("color",stim_colour); break;
				case 3: $("#C").css("color",stim_colour); break;
				case 4: $("#D").css("color",stim_colour); break;
				case 5: $("#E").css("color",stim_colour); break;
				case 6: $("#F").css("color",stim_colour); break;
				case 7: $("#G").css("color",stim_colour); break;
				case 8: $("#H").css("color",stim_colour); break;
				case 9: $("#I").css("color",stim_colour); break;
				case 10: $("#J").css("color",stim_colour); break;
				case 11: $("#K").css("color",stim_colour); break;
				case 12: $("#L").css("color",stim_colour); break;
				case 13: $("#M").css("color",stim_colour); break;
				case 14: $("#N").css("color",stim_colour); break;
				case 15: $("#O").css("color",stim_colour); break;
				case 16: $("#P").css("color",stim_colour); break;
				case 17: $("#Q").css("color",stim_colour); break;
				case 18: $("#R").css("color",stim_colour); break;
				case 19: $("#S").css("color",stim_colour); break;
				case 20: $("#T").css("color",stim_colour); break;
				case 21: $("#U").css("color",stim_colour); break;
				case 22: $("#V").css("color",stim_colour); break;
				case 23: $("#W").css("color",stim_colour); break;
				case 24: $("#X").css("color",stim_colour); break;
				case 25: $("#Y").css("color",stim_colour); break;
				case 26: $("#Z").css("color",stim_colour); break;
				case 27: $("#0").css("color",stim_colour); break;
				case 28: $("#1").css("color",stim_colour); break;
				case 29: $("#2").css("color",stim_colour); break;
				case 30: $("#3").css("color",stim_colour); break;
				case 31: $("#4").css("color",stim_colour); break;
				case 32: $("#5").css("color",stim_colour); break;
				case 33: $("#6").css("color",stim_colour); break;
				case 34: $("#7").css("color",stim_colour); break;
				case 35: $("#8").css("color",stim_colour); break;
				case 36: $("#9").css("color",stim_colour); break;
				default: 
				}
			
			}
			
			function shuffle(array) {
				var currentIndex = array.length, temporaryValue, randomIndex;

				// While there remain elements to shuffle...
				while (0 !== currentIndex) {

					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					// And swap it with the current element.
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}

				return array;
			}
					
		}
				
	);
	
});