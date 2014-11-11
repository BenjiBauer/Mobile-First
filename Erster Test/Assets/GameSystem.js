#pragma strict

//Standardwerte fuer Ameise
public var HPvalue : float = 100;
public var damageOnHead : float = 35;
public var damageOnBody : float = 25;
private var bullet1 : GameObject;
private var bullet2 : GameObject;
private var bullet1Fkt : NewShoot;
private var bullet2Fkt : NewShoot;

function Start () {

	bullet1 = GameObject.Find("bullet1");
	bullet2 = GameObject.Find("bullet2");
	bullet1Fkt = bullet1.GetComponent(NewShoot);
	bullet2Fkt = bullet2.GetComponent(NewShoot);
	bullet2.active=false;
}

function Update () {

if(bullet1Fkt.gotHit==true){
	bullet2.active=true;
	bullet1.active=false;
	bullet1Fkt.gotHit=false;
}

else if(bullet2Fkt.gotHit==true){
	bullet1.active=true;
	bullet2.active=false;
	bullet2Fkt.gotHit=false;
}

}