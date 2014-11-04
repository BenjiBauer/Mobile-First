#pragma strict

private var damageOnThisHeadAnt1 : float; //Höhe des Schadens
private var GameSystemFkt : GameSystem;
private var antHPfkt : antHP; //Variable für Funktion
private var bulletObj : GameObject;

function Awake() {

//Objekt und dann Funktion laden
//var antObj = GameObject.Find("ant1");
antHPfkt = GetComponentInParent(antHP);

bulletObj = GameObject.Find("bullet");

var GameSystemObj = GameObject.Find("GameSystem");
GameSystemFkt = GameSystemObj.GetComponent(GameSystem);
damageOnThisHeadAnt1 = GameSystemFkt.damageOnHead;

}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnTriggerEnter2D(bulletObj : Collider2D){

	//if(bulletObj.gameObject.tag == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGEN
			Debug.Log("Treffer");	
			antHPfkt.HPvalueAnt1 -= damageOnThisHeadAnt1;
	//}
}



