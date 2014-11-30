#pragma strict

public var damageOnThisTank : float = 20; //Höhe des Schadens
private var antHPfkt : HealthPoints; //Variable für HP-Funktion

function Awake() {

	antHPfkt = GetComponentInParent(HealthPoints);
}

//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){

	if(antHPfkt.tankHealthPoints>0){//Punkte werden Tank abgezogen, solange Kuppel ganz ist
		if(other.gameObject.name == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
			antHPfkt.tankHealthPoints  -= damageOnThisTank;
			Debug.Log("Treffer Tank");		
		}
	}
	else{
		if(other.gameObject.name == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
			antHPfkt.antHealthPoints  -= damageOnThisTank;
			Debug.Log("Treffer Ant");		
		}
	}
}