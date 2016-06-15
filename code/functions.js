// Question 1
function maxOfTwoNumbers (a, b) {
	if (a>b) {
		return a;
	}
	else if (b>a) {
		return b;
	}
	else if (a==b){
		return a;
	}
}

// Question 2
function maxOfThree (a, b, c) {
	if (a>b && a>c) {
		return a;
	}
	else if (b>a && b>c) {
		return b;
	}
	else if (c>a && c>b) {
		return c;
	}
	else if (a==b && a==c){
		return a;
	}
}


// Question 3
function isCharacterAVowel (character) {
	if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
		return true;
	}
	else if (character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U') {
		return true;
	}
	else {
		return false;
	}
}



// Question 4
function sumArray (array) {
	var sum = 0;
	for (var i = 0; i<array.length; i++) {
		sum += array[i];
	}
	return sum;
}


// Question 4
function multiplyArray (array) {
	var sum = 1;
	for (var i = 0; i<array.length; i++) {
		sum = sum * array[i];
	}
	return sum;
}



// Question 5
function numberOfArguments (){
	return arguments.length;
}



// Question 6
function reverseString (string){
	var newString = '';
	for (var i = 0; i<string.length; i++) {
		newString += string[string.length-i-1];
	}
	return newString;
}



// Question 7
function findLongestWord (array) {
	var longestWordIndex = 0;
	for (var i = 0; i<array.length; i++) {
		if (array[i].length > array[longestWordIndex].length) {
			longestWordIndex=i;
		}
	}
	return array[longestWordIndex];
}



// Question 8
function filterLongWords (array, num) {
	var newArray = [];
	for (var i = 0; i<array.length; i++) {
		if (array[i].length > num) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}



// Bonus 1
function charactersOccurencesCount (string) {
	var characterCountArray = {};
	var lowerCaseString = string.toLowerCase();
	for (var i = 0; i<lowerCaseString.length; i++) {
		if (lowerCaseString[i] == " ") {

		}
		else if (characterCountArray.hasOwnProperty(lowerCaseString[i])) {
			var x = characterCountArray[lowerCaseString[i]];
			x++;
			characterCountArray[lowerCaseString[i]] = x;
		}
		else {
			characterCountArray[lowerCaseString[i]] = 1;
		}
	}
	return characterCountArray;
}



function test (){
	console.log("Question 1 \n");
	console.log(maxOfTwoNumbers(1,5));
	console.log("\n");

	console.log("Question 2 \n");
	console.log(maxOfThree(7, 15, 10));
	console.log("\n");

	console.log("Question 3 \n");
	console.log(isCharacterAVowel("t"));
	console.log("\n");

	console.log("Question 4 \n");
	console.log(sumArray([1,2,3,4]));
	console.log("\n");

	console.log("Question 4 Part 2 \n");
	console.log(multiplyArray([1,2,3,4]));
	console.log("\n");

	console.log("Question 5 \n");
	console.log(numberOfArguments(1,2,3));
	console.log("\n");

	console.log("Question 6 \n");
	console.log(reverseString("jag testar"));
	console.log("\n");

	console.log("Question 7 \n");
	console.log(findLongestWord(["jag testar", "General Assembly", "Charlie"]));
	console.log("\n");

	console.log("Question 8 \n");
	console.log(filterLongWords(["jag testar", "General Assembly", "Charlie"],8));
	console.log("\n");

	console.log("Bonus \n");
	console.log(charactersOccurencesCount("General Assembly"));
}
