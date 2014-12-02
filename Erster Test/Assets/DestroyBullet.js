#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
public  var AlreadyFlying : boolean = true;


function Start () {
GameSystemObj=GameObject.Find("GameSystem");
GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
GameSystemFkt.bulletIsFlying=true;
}

function Update(){
GameSystemFkt.bulletIsFlying=true;
AlreadyFlying=true;
}
function OnCollisionEnter2D (hit : Collision2D) {

	if(hit.collider){
		Destroy(gameObject);
		GameSystemFkt.bulletIsFlying=false;
		AlreadyFlying=false;
		GameSystemFkt.bulletIsLanded=true;
	}
}
