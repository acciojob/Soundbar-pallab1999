
const btns = Array.form(document.querySelectorAll(".btn"));
console.log(btns);

function playSound(btn){
	btn.addEventListener("cllick",()=>{
		stopSounds();
		document.getElementById(btn.innerText).play();
	})
}

function stopSounds(params){
	for(let i=0;i<btns.length;i++){
		const sound = document.getElementById(btns[i].innertext);
		console.log({sound})
		sound.pause();
		sound.currentTime=0;
	}
}

for(let i=0;i<btns.length;i++){
	playSounds(btns[i]);
	document.querySelector(".stop").addEventListener('click',()=>{
		stopSounds()
	})
}

