#pragma strict

private var damageOnThisBodyAnt1 : float = 20; //Höhe des Schadens
private var antHPfkt : antHP; //Variable für Funktion
private var GameSystemFkt : GameSystem;
private var bulletObj : GameObject;

function Awake() {
	//Objekt und dann Funktion laden
	var antObj = GameObject.Find("ant1");
	antHPfkt = antObj.GetComponent(antHP);

	bulletObj = GameObject.Find("bullet");

	var GameSystemObj = GameObject.Find("GameSystem");
	GameSystemFkt = GameSystemObj.GetComponent(GameSystem);
	damageOnThisBodyAnt1 = GameSystemFkt.damageOnBody;
}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnTriggerEnter2D(bulletObj : Collider2D){
	//if(bulletObj.gameObject.tag == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
			antHPfkt.HPvalueAnt1 -= damageOnThisBodyAnt1;
			Debug.Log("Treffer");		
		}
	//}


