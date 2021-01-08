// Complete the twoStrings function below.
function twoStrings_(s1, s2) {
	for (var i = s1.length - 1; i >= 0; i--) {
		if(s2.indexOf(s1[i]) != -1) return "YES";
	}
	return "NO";
}

function twoStrings(s1, s2) {
	const alpha = "abcdefghijlkmnopqrstuvwxyz";
	for (var i = 0; i < alpha.length; i++) {
		if(s1.indexOf(alpha[i]) != -1 && s2.indexOf(alpha[i]) != -1) return "YES";
	}
	return "NO";
}

// YES | NO
// let words = [['hello', 'world'], ['hi', 'world']];

// NO | YES | YES | NO
/*
[
['wouldyoulikefries','abcabcabcabcabcabc'], 
['hackerrankcommunity', 'cdecdecdecde'], 
['jackandjill', 'wentupthehill'], 
['writetoyourparents', 'fghmqzldbc']
];
*/

// YES | NO
let words = [['aardvark', 'apple'], ['beetroot', 'sandals']];

for (var i = 0; i < words.length; i++) {
	console.log(twoStrings(... words[i]));
}