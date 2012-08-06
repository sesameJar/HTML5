function rnd(b,a){
	return Math.floor(Math.random()*(b-a+1))+a;
};

	var feeling = ['hmmm...charming!','oh,Yeah!!Im sexy and i konw it.','my lady,Would you Date me?','im looks like an asshole..!','next please!'];
	function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
var get=document.getElementById('thinking').innerHTML = feeling[rnd(4,0)];

}


