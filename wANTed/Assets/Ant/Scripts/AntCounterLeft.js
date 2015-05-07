#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var HealthPointsFkt : HealthPoints;
private var Rauch : SmokeFkt;
private var RauchExplosion : SmokeExplosionFkt;

private var once : boolean = false;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	HealthPointsFkt=gameObject.GetComponent(HealthPoints);
	Rauch = GetComponentInChildren(SmokeFkt);
	Rauch.gameObject.active = false;
	RauchExplosion = GetComponentInChildren(SmokeExplosionFkt);
	RauchExplosion.gameObject.active = false;
}

function Update () {
	if(HealthPointsFkt.antHealthPoints <=0){
		HealthPointsFkt.enabled=false;
		RauchExplosion.gameObject.active = true;
		Rauch.gameObject.active = false;

		if(GameSystemFkt.WaitTimeRun<=0){
			GameSystemFkt.numberOfAntsLeft-=1; //Stirbt die Ameise, so wird für das GameSystem eine Abgezogen.
			gameObject.active=false;
		}
		Debug.Log("GSN: "+GameSystemFkt.numberOfAntsLeft);
		if(once==false){
			if(GameSystemFkt.player2==true){
				GameSystemFkt.numberOfCakeRight+=5;
			}
			else if(GameSystemFkt.player1==true){
				GameSystemFkt.numberOfCakeLeft+=5;
			}
			once=true;
		}
	}
	
	if(HealthPointsFkt.antHealthPoints <=35){
		Rauch.gameObject.active = true;
	}
}