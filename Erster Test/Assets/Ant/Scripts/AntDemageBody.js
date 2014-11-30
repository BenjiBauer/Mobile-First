#pragma strict

public var damageOnThisBody : float = 20; //Höhe des Schadens
private var antHPfkt : HealthPoints; //Variable für HP-Funktion

function Awake() {

	antHPfkt = GetComponentInParent(HealthPoints);
}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.antHealthPoints -= damageOnThisBody;
		Debug.Log("Treffer");		
	}
}