#pragma strict

public var antHealthPoints : int = 100;
public var tankHealthPoints : int = 100;

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;

private var once : boolean = false;
private var tankDestroyed : boolean = false;

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
}

function Update () {
	if(antHealthPoints <=0){
	antHealthPoints=0;
	if(once==false){
		if(GameSystemFkt.player2==true){
			GameSystemFkt.numberOfCakeRight+=5;
		}
		else if(GameSystemFkt.player1==true){
			GameSystemFkt.numberOfCakeLeft+=5;
		}
	}
	//gameObject.active=false; //Wird in Counter gelöscht, da sonst der Counter abgebrochen wird, bevor er abzieht
	}
	if(tankHealthPoints <=0 && tankDestroyed==false){
		antHealthPoints+=tankHealthPoints;
		tankHealthPoints=0;
		tankDestroyed=true;
	}
}