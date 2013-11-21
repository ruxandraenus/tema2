$( document ).ready(function() {

			$("td").dblclick(function(){
				var currCell = $(this);
				var val = currCell.text();
				currCell.text("");
				
				var font = $('<font>').attr('color','red');				
				var yourInput = $('<input>').attr('type','text').attr('value',val);
				font.append(yourInput);
				currCell.append(font);
				
				yourInput.keypress(function(keyEvent){
				
					if(keyEvent.which === 13)
					{
						$(this).replaceWith($(this).val());
					}
				});
				
			});
			});