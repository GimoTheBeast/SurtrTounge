let english =    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let surtrSpeak = ['E', 'N', 'V', 'S', 'I', 'G', 'F', 'J', 'O', 'H', 'L', 'K', 'B', 'M', 'U', 'Y', 'W', 'T', 'D', 'R', 'A', 'C', 'Q', 'Z', 'P', 'X'];
let toSurtr = function() {
	let eng = document.querySelector("#eng")
	let srt = document.querySelector("#srt")
	let engArray = eng.value.split("")
	let outputString = [];
	for(i = 0; i < engArray.length; i++) {
		let letterCheck = /^[a-zA-Z]+$/.test(engArray[i])
		if (!letterCheck){
			outputString.push(engArray[i])
		}
		else{
			let isUppercase = engArray[i] == engArray[i].toUpperCase();
			let sSpeak = indexSearch(english,engArray,i,surtrSpeak)
			if(isUppercase){
				outputString.push(sSpeak)
			}
			else{
				outputString.push(sSpeak.toLowerCase());
			}
		}
		srt.value = outputString.join("")
	}
}
let indexSearch = function(array, engArray, i, sArray){
	if(array.length == 0){
		console.error("Entire Array Emptied")
		return;
	}
	let halfIndex = Math.floor(array.length / 2)
	if (array[halfIndex] == engArray[i].toUpperCase()){
		return sArray[halfIndex]
	}
	else if(array[halfIndex] < engArray[i].toUpperCase()) {
		contArray = array.slice(halfIndex, array.length)
		contsArray = sArray.slice(halfIndex, array.length)
	}
	else {
		contArray = array.slice(0, halfIndex)
		contsArray = sArray.slice(0, halfIndex)
	}
	return indexSearch(contArray, engArray, i, contsArray);
}
let toEnglish = function() {
	let eng = document.querySelector("#eng")
	let srt = document.querySelector("#srt")
	let srtArray = srt.value.split("")
	let outputString = [];
	let eSpeak;
	for(i = 0;i < srtArray.length;i++){
		let letterCheck = /^[a-zA-Z]+$/.test(srtArray[i])
		if (!letterCheck){
			outputString.push(srtArray[i])
		}
		else{
			console.log(i)
			let isUppercase = srtArray[i] == srtArray[i].toUpperCase();
			for(letter = 0;letter < surtrSpeak.length; letter++){
				if(surtrSpeak[letter] == srtArray[i].toUpperCase()){
					eSpeak = english[letter]
				}
			}
			if(isUppercase){
				outputString.push(eSpeak)
			}
			else{
				outputString.push(eSpeak.toLowerCase());
			}
			eng.value = outputString.join("")
		}
		}
	}