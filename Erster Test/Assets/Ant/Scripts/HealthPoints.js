#pragma strict

public var antHealthPoints : int = 100;
public var tankHealthPoints : int = 100;

function Start () {

}

function Update () {

	if(antHealthPoints <=0){
		Debug.Log("Ant is dead");
	gameObject.active=false;
	}

}