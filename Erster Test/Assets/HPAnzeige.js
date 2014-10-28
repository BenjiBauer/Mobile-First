#pragma strict
private var realHPtext : GUIText;
private var antHPfkt : antHP;

function Awake(){

var antHPobj = GameObject.Find("ant");
antHPfkt = antHPobj.GetComponent(antHP);


}

function Start () {

realHPtext = GetComponent(GUIText);

}

function Update () {

realHPtext.text="HP: " + antHPfkt.HPvalue;

	if(antHPfkt.HPvalue<=0){
		realHPtext.text="Ant is dead";
	}


}