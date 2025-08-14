document.addEventListener('DOMContentLoaded', function() {
const placeholder = [
	"jeff bezos has 121 billion dollars",
	"i hope you never find love",
	"nothing can stop me now",
	"you don't get to see the kids this weekend",
	"about that beer i owed ya",
	"go FUCK yourself andrew",
	"there is something seriously wrong with you",
	"your music's shite, it keeps me up all night",
];
const textarea = document.getElementById('telecommunication');
const rng = Math.floor(Math.random() * placeholder.length);
const newPlaceholder = placeholder[rng];
textarea.setAttribute('placeholder', newPlaceholder);
});

function sendMessage() {
	document.getElementById("telecommunication").value = "";
	setTimeout(() => {
		alert('pigeon sent out!');
	}, 0);
}