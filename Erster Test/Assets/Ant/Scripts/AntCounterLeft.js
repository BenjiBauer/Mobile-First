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
		GameSystemFkt.numberOfAntsLeft-=1; //Stirbt die Ameise, so wird für das GameSystem eine Abgezogen.
		HealthPointsFkt.enabled=false;
		gameObject.active=false;
		Debug.Log("GSN: "+GameSystemFkt.numberOfAntsLeft);
	}
}