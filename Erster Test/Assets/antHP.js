#pragma strict

public var HPvalue : float = 100;
//public var damage : float = 20;

function Start () {

//HPvalue = 100;

}

function Update () {

	if(HPvalue<=0){
		Debug.Log("ANT IS DEAD");
		gameObject.active=false;
	}
}

