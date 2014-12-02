#pragma strict

//Standardwerte fuer Ameise
public var HPvalue : float = 100;
public var damageOnHead : float = 35;
public var damageOnBody : float = 25;
private var bullet1 : GameObject;
private var bullet2 : GameObject;
private var bullet3 : GameObject;
private var bullet4 : GameObject;
private var bullet5 : GameObject;
private var bullet6 : GameObject;
private var bullet1Fkt : BulletShoot;
private var bullet2Fkt : BulletShoot;
private var bullet3Fkt : BulletShoot;
private var bullet4Fkt : BulletShoot;
private var bullet5Fkt : BulletShoot;
private var bullet6Fkt : BulletShoot;

public var bulletIsFlying : boolean = false;

function Start () {

	bullet1 = GameObject.Find("bullet1");
	bullet2 = GameObject.Find("bullet2");
	bullet3 = GameObject.Find("bullet3");
	bullet4 = GameObject.Find("bullet4");
	bullet5 = GameObject.Find("bullet5");
	bullet6 = GameObject.Find("bullet6");

	bullet1Fkt = bullet1.GetComponent(BulletShoot);
	bullet2Fkt = bullet2.GetComponent(BulletShoot);
	bullet3Fkt = bullet3.GetComponent(BulletShoot);
	bullet4Fkt = bullet4.GetComponent(BulletShoot);
	bullet5Fkt = bullet5.GetComponent(BulletShoot);
	bullet6Fkt = bullet6.GetComponent(BulletShoot);
	bullet2.active=false;
	bullet3.active=false;
	bullet4.active=false;
	bullet5.active=false;
	bullet6.active=false;
}

function Update () {

	if(bullet1Fkt.gotHit==true){
		bullet2.active=true;
		bullet1.active=false;
		bullet1Fkt.gotHit=false;
	}
	else if(bullet2Fkt.gotHit==true){
		bullet3.active=true;
		bullet2.active=false;
		bullet2Fkt.gotHit=false;
	}
	else if(bullet3Fkt.gotHit==true){
		bullet4.active=true;
		bullet3.active=false;
		bullet3Fkt.gotHit=false;
	}
	else if(bullet4Fkt.gotHit==true){
		bullet5.active=true;
		bullet4.active=false;
		bullet4Fkt.gotHit=false;
	}
	else if(bullet5Fkt.gotHit==true){
		bullet6.active=true;
		bullet5.active=false;
		bullet5Fkt.gotHit=false;
	}
	else if(bullet6Fkt.gotHit==true){
		bullet6.active=true;
		bullet1.active=false;
		bullet1Fkt.gotHit=false;
	}
}