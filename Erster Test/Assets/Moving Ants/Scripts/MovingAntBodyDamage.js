#pragma strict

public var damageOnThisMovingAntBody : float = 40; //Höhe des Schadens
private var antHPfkt : HealthPointsMovingAnt; //Variable für HP-Funktion
private var MovingAntFkt : MovingAntMovesRight;

function Awake() {
	antHPfkt = GetComponentInParent(HealthPointsMovingAnt);
}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "RealBullet(Clone)"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.movingAntHealthPoints -= damageOnThisMovingAntBody;
		Debug.Log("Treffer");		
	}
}