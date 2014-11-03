#pragma strict

public var HPvalueAnt2 : float;
private var GameSystemFkt : GameSystem;
//public var damage : float = 20;

function Awake() {
	var GameSystemObj = GameObject.Find("GameSystem");
	GameSystemFkt = GameSystemObj.GetComponent(GameSystem);
	HPvalueAnt2  = GameSystemFkt.HPvalue;
}

function Update () {
	if(HPvalueAnt2<=0){//Ameise wird deaktiviert, wenn sie kein Leben mehr hat
		Debug.Log("ANT IS DEAD");
		gameObject.active=false;
	}
}

