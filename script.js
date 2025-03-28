
const btns = Array.from(document.querySelectorAll(".btn"));
console.log(btns);

function playSound(btn){
	btn.addEventListener("click",()=>{
		stopSounds();
		document.getElementById(btn.innerText.trim()).play();
	})
}

function stopSounds(params){
	for(let i=0;i<btns.length;i++){
		const sound = document.getElementById(btns[i].innerText.trim());
		console.log({sound})
		sound.pause();
		sound.currentTime=0;
	}
}

for(let i=0;i<btns.length;i++){
	playSound(btns[i]);
	document.querySelector(".stop").addEventListener('click',()=>{
		stopSounds()
	})
}

