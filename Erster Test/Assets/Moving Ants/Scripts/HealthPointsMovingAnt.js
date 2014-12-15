#pragma strict

public var movingAntHealthPoints : int = 100;


function Start () {

}

function Update () {

	if(movingAntHealthPoints <=0){
		Debug.Log("Ant is dead");
		gameObject.active=false;
	}

}