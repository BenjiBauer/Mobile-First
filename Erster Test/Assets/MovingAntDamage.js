#pragma strict

public var damageOnThisMovingAnt : float = 25; //Höhe des Schadens
private var antHPfkt : HealthPointsMovingAnt; //Variable für HP-Funktion
private var MovingAntFkt : MovingAntMovesRight;

function Awake() {
	antHPfkt = GetComponentInParent(HealthPointsMovingAnt);
	MovingAntFkt = gameObject.GetComponent(MovingAntMovesRight);
}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "RealBullet(Clone)"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.movingAntHealthPoints -= damageOnThisMovingAnt;
		Debug.Log("Treffer");	
		//MovingAntFkt.MoveSpeed=0.1;	
	}
}