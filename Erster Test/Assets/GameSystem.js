#pragma strict

//Zahl der Ameisen
public var numberOfAntsLeft : int = 3;
public var numberOfAntsRight : int = 3;
public var numberOfMovingAntsLeft : int = 5;
public var numberOfMovingAntsRight : int = 5;

//Zahl des GessameltenKuchens
public var numberOfCakeRight : int = 0;
public var numberOfCakeLeft : int = 0;

//Welcher Spieler
private var player1 : boolean =false;
private var player2 : boolean =false;
private var subPlayer1 : int = 1;
private var subPlayer2 : int = 1;

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

public var bulletIsFlying : boolean = false; //wird von Realbullet eingestellt
public var bulletIsLanded : boolean = false; //wird von Realbullet eingestellt

private var HP1Fkt : HealthPoints;
private var HP2Fkt : HealthPoints;
private var HP3Fkt : HealthPoints;
private var HP4Fkt : HealthPoints;
private var HP5Fkt : HealthPoints;
private var HP6Fkt : HealthPoints;

private var Test : HealthPoints;

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
	
	HP1Fkt = bullet1.GetComponentInParent(HealthPoints);
	HP2Fkt = bullet2.GetComponentInParent(HealthPoints);
	HP3Fkt = bullet3.GetComponentInParent(HealthPoints);
	HP4Fkt = bullet4.GetComponentInParent(HealthPoints);
	HP5Fkt = bullet5.GetComponentInParent(HealthPoints);
	HP6Fkt = bullet6.GetComponentInParent(HealthPoints);
	
	bullet2.active=false;
	bullet3.active=false;
	bullet4.active=false;
	bullet5.active=false;
	bullet6.active=false;
	
	Test = bullet1.GetComponentInParent(HealthPoints);
	player1=true;
}

function Update () {
	
	//Spielende
	if(numberOfAntsLeft==0 || numberOfAntsRight==0){
		Debug.Log("GAME OVER");
	}
	
	//Bestimmt welcher Spieler dran ist
	if(player1){
		//Player1.1 ist dran
		if(subPlayer1==1 && HP1Fkt.antHealthPoints>0){
			bullet1.active=true;
		}
		else if(subPlayer1==1 && HP1Fkt.antHealthPoints<=0){
			subPlayer1++;
		}
		//Player1.2 ist dran
		else if(subPlayer1==2 && HP2Fkt.antHealthPoints>0){
			bullet2.active=true;
		}
		else if(subPlayer1==2 && HP2Fkt.antHealthPoints<=0){
			subPlayer1++;
		}
		//Player1.3 ist dran
		else if(subPlayer1==3 && HP3Fkt.antHealthPoints>0){
			bullet3.active=true;
		}
		else if(subPlayer1==3 && HP3Fkt.antHealthPoints<=0){
			subPlayer1++;
		}
		//Damit es wieder anfaengt
		if(subPlayer1==4){
			subPlayer1=1;
		}
		if(bulletIsFlying==false && bullet1Fkt.ShootIsPressed==true&& bulletIsLanded==true){//Sobald Kugel gelandet ist
			//bullet4.active=true;//Wird aktiviert
			bullet1.active=false;//Wird deaktiviert
			bulletIsLanded=false; //Wird zurück gestellt
			bullet1Fkt.ShootIsPressed=false;//Weil es nicht mehr gedrückt wird
			player1=false;
			player2=true;
			subPlayer2++;
		}
		else if(bulletIsFlying==false && bullet2Fkt.ShootIsPressed==true&& bulletIsLanded==true){
			//bullet5.active=true;
			bullet2.active=false;
			bulletIsLanded=false;
			bullet2Fkt.ShootIsPressed=false;
			player1=false;
			player2=true;
			subPlayer2++;
		}	
		else if(bulletIsFlying==false && bullet3Fkt.ShootIsPressed==true&& bulletIsLanded==true){
			//bullet6.active=true;
			bullet3.active=false;
			bulletIsLanded=false;
			bullet3Fkt.ShootIsPressed=false;
			player1=false;
			player2=true;
			subPlayer2++;
		}
	}
	
	if(player2){
		//Player2.1 ist dran
		if(subPlayer2==1 && HP4Fkt.antHealthPoints>0){
			bullet4.active=true;
		}
		else if(subPlayer2==1 && HP4Fkt.antHealthPoints<=0){
			subPlayer2++;
		}
		//Player2.2 ist dran
		else if(subPlayer2==2 && HP5Fkt.antHealthPoints>0){
			bullet5.active=true;
		}
		else if(subPlayer2==2 && HP5Fkt.antHealthPoints<=0){
			subPlayer2++;
		}
		//Player2.3 ist dran
		else if(subPlayer2==3 && HP6Fkt.antHealthPoints>0){
			bullet6.active=true;
		}
		else if(subPlayer2==3 && HP6Fkt.antHealthPoints<=0){
			subPlayer2++;
		}
		
		//Damit es wieder anfaengt
		if(subPlayer2==4){
			subPlayer2=1;
		}
		
		//Player2.1 ist dran
		if(bulletIsFlying==false && bullet4Fkt.ShootIsPressed==true&& bulletIsLanded==true){
			//bullet2.active=true;
			bullet4.active=false;
			bulletIsLanded=false;
			bullet4Fkt.ShootIsPressed=false;
			player1=true;
			player2=false;
			subPlayer1++;
		}
		else if(bulletIsFlying==false && bullet5Fkt.ShootIsPressed==true&& bulletIsLanded==true){
			//bullet3.active=true;
			bullet5.active=false;
			bulletIsLanded=false;
			bullet5Fkt.ShootIsPressed=false;
			player1=true;
			player2=false;
			subPlayer1++;
		}
		else if(bulletIsFlying==false && bullet6Fkt.ShootIsPressed==true&& bulletIsLanded==true){
			//bullet1.active=true;
			bullet6.active=false;
			bulletIsLanded=false;
			bullet6Fkt.ShootIsPressed=false;
			player1=true;
			player2=false;
			subPlayer1++;
		}
	}
	/*
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
	}*/
	//Debug.Log(Test.enabled);
	
	
}