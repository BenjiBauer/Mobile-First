#pragma strict

private var damageOnThisBodyAnt2 : float = 20; //Höhe des Schadens
private var antHPfkt : ant2HP; //Variable für Funktion
private var GameSystemFkt : GameSystem;
private var bulletObj : GameObject;

function Awake() {
	//Objekt und dann Funktion laden
	var antObj = GameObject.Find("ant2");
	antHPfkt = antObj.GetComponent(ant2HP);

	bulletObj = GameObject.Find("bullet");

	var GameSystemObj = GameObject.Find("GameSystem");
	GameSystemFkt = GameSystemObj.GetComponent(GameSystem);
	damageOnThisBodyAnt2 = GameSystemFkt.damageOnBody;
}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnTriggerEnter2D(bulletObj : Collider2D){
	//if(bulletObj.gameObject.tag == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
			antHPfkt.HPvalueAnt2 -= damageOnThisBodyAnt2;
			Debug.Log("Treffer");		
		}
	//}


