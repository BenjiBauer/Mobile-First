#pragma strict

private var bulletFkt : NewBulletShoot;
private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;

function Start () {
	bulletFkt=GetComponentInParent(NewBulletShoot);
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
}

function Update () {
	var percent = (bulletFkt.shootingPower/bulletFkt.MaxShootingPower);
	if(percent<=0.01 || GameSystemFkt.bulletIsFlying==true){//gibt eine Fehlertoleranz
		gameObject.active=false;
	}
}