function rnd(b,a){
	return Math.floor(Math.random()*(b-a+1))+a;
};
window.onload=function(){
	var feeling = ['hmmm...charming!','oh,Yeah!!Im sexy and i konw it.','my lady,Would you Date me?','im looks like an asshole..!','next please!'];
	function allowDrop (ev) {
		ev.preventDefault();
	}
	function drag (ev) {
		ev.dataTransfer.setData("object",ev.target.id)
	}
	function drop (ev) {
		ev.preventDefault();
		var fallingobj = ev.dataTransfer.getData("object");
		ev.target.appendChild(document.getElementById(fallingobj));
		var get=document.getElementById('asd').innerHTML = feeling[rnd(4,0)];
	}
}