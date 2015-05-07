#pragma strict

public var powershotSound : AudioClip;
private var playSound : boolean = false;

function Start () {

}

function Update () {
if(playSound==true){
	GetComponent.<AudioSource>().PlayOneShot(powershotSound);
}
else{
	GetComponent.<AudioSource>().Stop();
}

Debug.Log(playSound);
}

function PlaySound(){

	playSound=true;
}

function StopSound(){
	playSound=false;
	Debug.Log("JSDVJSNVSDWJDVNWLDVNWJVBWLCWJLWBCJWBCJWDCJLBW");
}