#pragma strict

public var damageOnThisMovingAnt : float = 25; //Höhe des Schadens
private var antHPfkt : HealthPointsMovingAnt; //Variable für HP-Funktion
private var MovingAntFkt : MovingAntMovesRight;

//Sound für Aufprall
public var boatSound1 : AudioClip;
public var boatSound2 : AudioClip;
public var boatSound3 : AudioClip;
private var boatSoundState : int = 1;
private var boatSoundFinal : AudioClip;


function Awake() {
	antHPfkt = GetComponentInParent(HealthPointsMovingAnt);
	MovingAntFkt = gameObject.GetComponent(MovingAntMovesRight);
}

function Update(){
	switch(boatSoundState){
		case 1:
			boatSoundFinal=boatSound1;
		break;
		
		case 2:
			boatSoundFinal=boatSound2;
		break;
		
		case 3:
			boatSoundFinal=boatSound3;
		break;
	}
	boatSoundState=Random.Range(1,4);

}

//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "RealBullet(Clone)"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.movingAntHealthPoints -= damageOnThisMovingAnt;
		Debug.Log("Treffer");	
		GetComponent.<AudioSource>().PlayOneShot(boatSoundFinal);
		//MovingAntFkt.MoveSpeed=0.1;	
	}
}