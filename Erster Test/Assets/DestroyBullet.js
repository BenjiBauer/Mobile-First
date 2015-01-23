#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
public  var AlreadyFlying : boolean = true;
public var landedSound : AudioClip;
private var landedPlayedOnce : boolean = false;
private var ColliderFkt : CircleCollider2D;
private var spriteFkt : SpriteRenderer;

private var CameraObj : GameObject;
private var CameraFkt : CameraFollow;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	GameSystemFkt.bulletIsFlying=true;
	ColliderFkt=GetComponent(CircleCollider2D);
	spriteFkt=GetComponent(SpriteRenderer);
	CameraObj=GameObject.Find("Main Camera");
	CameraFkt=CameraObj.GetComponent(CameraFollow);
}

function Awake(){
	AlreadyFlying=true;
}

function Update(){
	landenSoundFkt();
	if(AlreadyFlying==true){
		GameSystemFkt.bulletIsFlying=true;
		CameraFkt.bulletPos=transform.position;
		CameraFkt.bulletPos.z=-100;
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
