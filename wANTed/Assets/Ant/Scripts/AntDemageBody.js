#pragma strict

public var damageOnThisBody : float = 20; //Höhe des Schadens
private var antHPfkt : HealthPoints; //Variable für HP-Funktion

public var talkMin : int = 5; //Mindest Wartezeit zum Sprechen
public var talkMax : int = 30; //Mindest Wartezeit zum Sprechen

//Sound für Aufprall
public var antSound1 : AudioClip;
public var antSound2 : AudioClip;
public var antSound3 : AudioClip;
private var antSoundState : int = 1;
private var antSoundFinal : AudioClip;

//Sound für Labern
public var antTalkSound1 : AudioClip;
public var antTalkSound2 : AudioClip;
public var antTalkSound3 : AudioClip;
public var antTalkSound4 : AudioClip;
private var antTalkSoundState : int =1;
private var antTalkSoundFinal : AudioClip;
private var antTalkTime : float;
private var talked : boolean = false; 

function Awake() {
	antHPfkt = GetComponentInParent(HealthPoints);
}

function Start(){
	antSoundState= Random.Range(1,4);
	antTalkSoundState= Random.Range(1,5);
	antTalkTime= Random.Range(12,45); 
}

function Update(){
	switch(antSoundState){
		case 1:
			antSoundFinal=antSound1;
		break;
		
		case 2:
			antSoundFinal=antSound2;
		break;
		
		case 3:
			antSoundFinal=antSound3;
		break;
	}
	
	switch(antTalkSoundState){
		case 1:
			antTalkSoundFinal=antTalkSound1;
		break;
		
		case 2:
			antTalkSoundFinal=antTalkSound2;
		break;
		
		case 3:
			antTalkSoundFinal=antTalkSound3;
		break;
		
		case 4:
			antTalkSoundFinal=antTalkSound4;
		break;
	}
	antTalkTime-=Time.deltaTime;
	if(antTalkTime<=0){
		antTalkSoundState=Random.Range(1,5);
		GetComponent.<AudioSource>().PlayOneShot(antTalkSoundFinal);
		antTalkTime= Random.Range(talkMin,talkMax); 
	}
	if(antHPfkt.antHealthPoints<=0 && talked==false){
		GetComponent.<AudioSource>().PlayOneShot(antSoundFinal);
		talked=true;
	}
	if(antHPfkt.antHealthPoints <=0){
		GetComponent(SpriteRenderer).color.a = 0;
	}
}

//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	//if(other.gameObject.name == "bullet1" || other.gameObject.name == "bullet2" || other.gameObject.name == "bullet3" || other.gameObject.name == "bullet4" || other.gameObject.name == "bullet5" || other.gameObject.name == "bullet6"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.antHealthPoints -= damageOnThisBody;
		Debug.Log("Treffer");
		antSoundState=Random.Range(1,4);
		GetComponent.<AudioSource>().PlayOneShot(antSoundFinal);		
	//}
}