#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var HealthPointsFkt : HealthPointsMovingAnt;

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	HealthPointsFkt=gameObject.GetComponent(HealthPointsMovingAnt);	
}

function Update () {
	if(HealthPointsFkt.movingAntHealthPoints <=0){
		GameSystemFkt.numberOfMovingAntsRight-=1; //Stirbt die Ameise, so wird für das GameSystem eine Abgezogen.
	}
}