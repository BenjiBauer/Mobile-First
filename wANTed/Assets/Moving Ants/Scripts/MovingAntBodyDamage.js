#pragma strict

public var damageOnThisMovingAntBody : float = 40; //Höhe des Schadens
private var antHPfkt : HealthPointsMovingAnt; //Variable für HP-Funktion
private var MovingAntFkt : MovingAntMovesRight;

//Sound für Aufprall
public var movingAntSound1 : AudioClip;
public var movingAntSound2 : AudioClip;
public var movingAntSound3 : AudioClip;
private var movingAntSoundState : int = 1;
private var movingAntSoundFinal : AudioClip;

private var once : boolean = false;


function Awake() {
	antHPfkt = GetComponentInParent(HealthPointsMovingAnt);
}

function Start(){
	movingAntSoundState= Random.Range(1,4);
}

function Update(){
	switch(movingAntSoundState){
		case 1:
			movingAntSoundFinal=movingAntSound1;
		break;
		
		case 2:
			movingAntSoundFinal=movingAntSound2;
		break;
		
		case 3:
			movingAntSoundFinal=movingAntSound3;
		break;
	}
	if(antHPfkt.movingAntHealthPoints<=0 && once==false){
		GetComponent.<AudioSource>().PlayOneShot(movingAntSoundFinal);
		once=true;
		GetComponent(SpriteRenderer).color.a = 0;
	}
}

//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "RealBullet(Clone)"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.movingAntHealthPoints -= damageOnThisMovingAntBody;
		Debug.Log("Treffer");
		movingAntSoundState=Random.Range(1,4);
		GetComponent.<AudioSource>().PlayOneShot(movingAntSoundFinal);		
	}
}