#pragma strict

public var movingAntHealthPoints : float = 100;
private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var RauchExplosion : SmokeExplosionFkt;
private var once : boolean = false;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	RauchExplosion = GetComponentInChildren(SmokeExplosionFkt);
	RauchExplosion.gameObject.active = false;
}

function Update () {

	if(movingAntHealthPoints <=0){
		Debug.Log("Ant is dead");
		if(once==false){
			if(GameSystemFkt.player2==true){
				GameSystemFkt.numberOfCakeRight+=3;
			}
			else if(GameSystemFkt.player1==true){
				GameSystemFkt.numberOfCakeLeft+=3;
			}
			once=true;
		}
		RauchExplosion.gameObject.active = true;
		//gameObject.active=false;
		//GameSystemFkt.numberOfMovingAntsRight-=1; //Stirbt die Ameise, so wird für das GameSystem eine Abgezogen.
	}
	


}