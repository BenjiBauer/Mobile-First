#pragma strict

public var damageOnThisTank : float = 20; //Höhe des Schadens
private var antHPfkt : HealthPoints; //Variable für HP-Funktion

//Sound für Aufprall
public var tankSound1 : AudioClip;
public var tankSound2 : AudioClip;
public var tankSound3 : AudioClip;
private var tankSoundState : int = 1;
private var tankSoundFinal : AudioClip;

function Awake() {

	antHPfkt = GetComponentInParent(HealthPoints);
}

function Update(){
	switch(tankSoundState){
		case 1:
			tankSoundFinal=tankSound1;
		break;
		
		case 2:
			tankSoundFinal=tankSound2;
		break;
		
		case 3:
			tankSoundFinal=tankSound3;
		break;
	}
	tankSoundState=Random.Range(1,4);
}

//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){

	if(antHPfkt.tankHealthPoints>0){//Punkte werden Tank abgezogen, solange Kuppel ganz ist
		//if(other.gameObject.name == "bullet1" || other.gameObject.name == "bullet2" || other.gameObject.name == "bullet3" || other.gameObject.name == "bullet4" || other.gameObject.name == "bullet5" || other.gameObject.name == "bullet6"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
			antHPfkt.tankHealthPoints  -= damageOnThisTank;
			Debug.Log("Treffer Tank");		
		//}
	}
	else{
		//if(other.gameObject.name == "bullet1" || other.gameObject.name == "bullet2" || other.gameObject.name == "bullet3" || other.gameObject.name == "bullet4" || other.gameObject.name == "bullet5" || other.gameObject.name == "bullet6"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
			antHPfkt.antHealthPoints  -= damageOnThisTank;
			Debug.Log("Treffer Ant");		
		//}
	}
	audio.PlayOneShot(tankSoundFinal);	
}