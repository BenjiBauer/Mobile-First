#pragma strict

public var movingAntHealthPoints : int = 100;
private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
}

function Update () {

	if(movingAntHealthPoints <=0){
		Debug.Log("Ant is dead");
		//gameObject.active=false;
		//GameSystemFkt.numberOfMovingAntsRight-=1; //Stirbt die Ameise, so wird für das GameSystem eine Abgezogen.
	}

}