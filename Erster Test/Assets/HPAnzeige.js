#pragma strict
private var realHPtext : GUIText;
private var antHPfkt : antHP;

function Awake(){

var antHPobj = GameObject.Find("ant1");
antHPfkt = antHPobj.GetComponent(antHP);


}

function Start () {

realHPtext = GetComponent(GUIText);

}

function Update () {

realHPtext.text="HP: " + antHPfkt.HPvalueAnt1;

	if(antHPfkt.HPvalueAnt1<=0){
		realHPtext.text="Ant is dead";
	}


}