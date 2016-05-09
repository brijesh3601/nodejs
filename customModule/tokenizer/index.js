'use strict';


module.exports = function(name, char){

	return {

		tokenize:(str) =>{
			
			var regex = new RegExp("\\s+", "g"); 
			str = str.replace(regex, char);
			console.log("Tokenize(" + char + ") => "+ str);
			return str;

		},
		untokenize:(str) =>{

			var regex = new RegExp("\\" + char, "g");
			str = str.replace(regex, ' ')
			console.log("UnTokenize(" + char + ") => "+ str);
			return str;

		},
		getToken:() => {
			return char;
		}
	}
	
}