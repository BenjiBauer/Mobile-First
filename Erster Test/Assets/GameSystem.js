#pragma strict

//Zahl der Ameisen
public var numberOfAntsLeft : int = 3;
public var numberOfAntsRight : int = 3;
public var numberOfMovingAntsLeft : int = 5;
public var numberOfMovingAntsRight : int = 5;

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
private var bullet1Fkt : NewBulletShoot;
private var bullet2Fkt : NewBulletShoot;
private var bullet3Fkt : NewBulletShoot;
private var bullet4Fkt : NewBulletShoot;
private var bullet5Fkt : NewBulletShoot;
private var bullet6Fkt : NewBulletShoot;

public var bulletIsFlying : boolean = false;
public var bulletIsLanded : boolean = false;

private var RotateButtons1Fkt : RotateButtons;
private var RotateButtons2Fkt : RotateButtons;
private var RotateButtons3Fkt : RotateButtons;
private var RotateButtons4Fkt : RotateButtons;
private var RotateButtons5Fkt : RotateButtons;
private var RotateButtons6Fkt : RotateButtons;

function Start () {

	bullet1 = GameObject.Find("Shooter1");
	bullet2 = GameObject.Find("Shooter2");
	bullet3 = GameObject.Find("Shooter3");
	bullet4 = GameObject.Find("Shooter4");
	bullet5 = GameObject.Find("Shooter5");
	bullet6 = GameObject.Find("Shooter6");

	bullet1Fkt = bullet1.GetComponent(NewBulletShoot);
	bullet2Fkt = bullet2.GetComponent(NewBulletShoot);
	bullet3Fkt = bullet3.GetComponent(NewBulletShoot);
	bullet4Fkt = bullet4.GetComponent(NewBulletShoot);
	bullet5Fkt = bullet5.GetComponent(NewBulletShoot);
	bullet6Fkt = bullet6.GetComponent(NewBulletShoot);
	
	RotateButtons1Fkt = bullet1.GetComponentInParent(RotateButtons);
	RotateButtons2Fkt = bullet2.GetComponentInParent(RotateButtons);
	RotateButtons3Fkt = bullet3.GetComponentInParent(RotateButtons);
	RotateButtons4Fkt = bullet4.GetComponentInParent(RotateButtons);
	RotateButtons5Fkt = bullet5.GetComponentInParent(RotateButtons);
	RotateButtons6Fkt = bullet6.GetComponentInParent(RotateButtons);
	
	bullet2.active=false;
	bullet3.active=false;
	bullet4.active=false;
	bullet5.active=false;
	bullet6.active=false;
}

function Update () {
	
	//Spielende
	if(numberOfAntsLeft==0 || numberOfAntsRight==0){
		Debug.Log("GAME OVER");
	}
	
	//Bestimmt welcher Spieler dran ist
	if(bulletIsFlying==false && bullet1Fkt.ShootIsPressed==true&& bulletIsLanded==true){//Sobald Kugel gelandet ist
		bullet4.active=true;//Wird aktiviert
		bullet1.active=false;//Wird deaktiviert
		bulletIsLanded=false; //Wird zurück gestellt
		bullet1Fkt.ShootIsPressed=false;//Weil es nicht mehr gedrückt wird
	}
	else if(bulletIsFlying==false && bullet4Fkt.ShootIsPressed==true&& bulletIsLanded==true){
		bullet2.active=true;
		bullet4.active=false;
		bulletIsLanded=false;
		bullet4Fkt.ShootIsPressed=false;
	}
	else if(bulletIsFlying==false && bullet2Fkt.ShootIsPressed==true&& bulletIsLanded==true){
		bullet5.active=true;
		bullet2.active=false;
		bulletIsLanded=false;
		bullet2Fkt.ShootIsPressed=false;
	}
	else if(bulletIsFlying==false && bullet5Fkt.ShootIsPressed==true&& bulletIsLanded==true){
		bullet3.active=true;
		bullet5.active=false;
		bulletIsLanded=false;
		bullet5Fkt.ShootIsPressed=false;
	}
	else if(bulletIsFlying==false && bullet3Fkt.ShootIsPressed==true&& bulletIsLanded==true){
		bullet6.active=true;
		bullet3.active=false;
		bulletIsLanded=false;
		bullet3Fkt.ShootIsPressed=false;
	}
	else if(bulletIsFlying==false && bullet6Fkt.ShootIsPressed==true&& bulletIsLanded==true){
		bullet1.active=true;
		bullet6.active=false;
		bulletIsLanded=false;
		bullet6Fkt.ShootIsPressed=false;
	}
	
}