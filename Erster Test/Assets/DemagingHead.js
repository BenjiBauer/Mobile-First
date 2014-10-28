#pragma strict

public var damageOnHead : float = 35; //Höhe des Schadens
private var antHPfkt : antHP; //Variable für Funktion
private var gotHit : boolean = false; //Checkt, ob einal getroffen wurde
private var bulletObj : GameObject;

function Awake() {

//Objekt und dann Funktion laden
var antObj = GameObject.Find("ant");
antHPfkt = antObj.GetComponent(antHP);

bulletObj = GameObject.Find("bullet");

}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnTriggerEnter2D(bulletObj : Collider2D){

	//if(bulletObj.gameObject.tag == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGEN
		if(gotHit==false){ //soll nur einmal aktiviert werden
			Debug.Log("Treffer");	
			antHPfkt.HPvalue -= damageOnHead;
			gotHit =true;
		}
	//}
}


function OnTriggerExit2D(other : Collider2D){

	gotHit = false;//sobald die Kugel draußen ist, ist sie wieder aktiviert.


}
