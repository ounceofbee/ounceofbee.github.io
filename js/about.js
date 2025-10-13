document.addEventListener('DOMContentLoaded', function() {
const placeholder = [
	"jeff bezos has 121 billion dollars",
	"you should be hunted for sport",
	"nothing can stop me now",
	"you don't get to see the kids this weekend",
	"go FUCK yourself andrew",
	"your music's shite, it keeps me up all night",
	"i hate everything you stand for",
	"hello i'm GOD and i FORGIVE YOU",
];
const textarea = document.getElementById('messagebox');
const rng = Math.floor(Math.random() * placeholder.length);
const newPlaceholder = placeholder[rng];
textarea.setAttribute('placeholder', newPlaceholder);
});

function sendMessage() {
	document.getElementById("messagebox").value = "";
	setTimeout(() => {
		alert('pigeon sent out!');
	}, 0);
}