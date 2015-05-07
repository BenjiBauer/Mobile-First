#pragma strict

public var damageOnThisDome : float = 20; //Höhe des Schadens
private var antHPfkt : HealthPoints; //Variable für HP-Funktion
private var thisCollider : PolygonCollider2D;

//Sound für Aufprall
public var glasSound1 : AudioClip;
public var glasSound2 : AudioClip;
public var glasSound3 : AudioClip;
private var glasSoundState : int = 1;
private var glasSoundFinal : AudioClip;

function Awake() {
	antHPfkt = GetComponentInParent(HealthPoints);
	thisCollider=GetComponent(PolygonCollider2D);
}

function Update(){

	if(antHPfkt.tankHealthPoints <=0){
		//Debug.Log("Tank is destroyed");
		thisCollider.enabled =false;		
	}
	switch(glasSoundState){
		case 1:
			glasSoundFinal=glasSound1;
		break;
		
		case 2:
			glasSoundFinal=glasSound2;
		break;
		
		case 3:
			glasSoundFinal=glasSound3;
		break;
	}
	glasSoundState=Random.Range(1,4);
}

//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	//if(other.gameObject.name == "bullet1" || other.gameObject.name == "bullet2" || other.gameObject.name == "bullet3" || other.gameObject.name == "bullet4" || other.gameObject.name == "bullet5" || other.gameObject.name == "bullet6"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.tankHealthPoints  -= damageOnThisDome;
		Debug.Log("Treffer");
		GetComponent.<AudioSource>().PlayOneShot(glasSoundFinal);	
	//}
}