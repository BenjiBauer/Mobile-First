#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
public  var AlreadyFlying : boolean = true;
public var landedSound : AudioClip;
private var landedPlayedOnce : boolean = false;
private var ColliderFkt : CircleCollider2D;
private var spriteFkt : SpriteRenderer;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	GameSystemFkt.bulletIsFlying=true;
	ColliderFkt=GetComponent(CircleCollider2D);
	spriteFkt=GetComponent(SpriteRenderer);
}

function Awake(){
	AlreadyFlying=true;
}

function Update(){
	landenSoundFkt();
	if(AlreadyFlying==true){
		GameSystemFkt.bulletIsFlying=true;
	}
	else{
		GameSystemFkt.bulletIsFlying=false;
		if(GameSystemFkt.WaitTimeRun<=0){
			Destroy(gameObject);
		}
	}
}
function OnCollisionEnter2D (hit : Collision2D) {

	if(hit.collider){
		GameSystemFkt.bulletIsFlying=false;
		AlreadyFlying=false;
		GameSystemFkt.bulletIsLanded=true;
		ColliderFkt.enabled=false;
		spriteFkt.enabled=false;
	}
}

function landenSoundFkt(){
     if(GameSystemFkt.bulletIsLanded==true && landedPlayedOnce==false){
     	audio.PlayOneShot(landedSound);
     	landedPlayedOnce=true;
     }
     else if(GameSystemFkt.bulletIsLanded==false){
     	landedPlayedOnce=false;
     }
}
