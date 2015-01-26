#pragma strict

public var antHealthPoints : int = 100;
public var tankHealthPoints : int = 100;

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
}

function Update () {
	if(antHealthPoints <=0){
		if(GameSystemFkt.player2==true){
			GameSystemFkt.numberOfCakeRight+=5;
		}
		else if(GameSystemFkt.player1==true){
			GameSystemFkt.numberOfCakeLeft+=5;
		}
	//gameObject.active=false; //Wird in Counter gelöscht, da sonst der Counter abgebrochen wird, bevor er abzieht
	}

}