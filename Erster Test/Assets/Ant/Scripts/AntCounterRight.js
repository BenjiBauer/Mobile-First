#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var HealthPointsFkt : HealthPoints;

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	HealthPointsFkt=gameObject.GetComponent(HealthPoints);	
}

function Update () {
	if(HealthPointsFkt.antHealthPoints <=0){
		GameSystemFkt.numberOfAntsRight-=1; //Stirbt die Ameise, so wird für das GameSystem eine Abgezogen.
	}
}