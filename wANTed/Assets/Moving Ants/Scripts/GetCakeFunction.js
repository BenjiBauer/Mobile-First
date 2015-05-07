#pragma strict

private var CakeImage : SpriteRenderer;
public var GotCake : boolean = false;
private var ColliderCake : PolygonCollider2D;
private var antHPfkt : HealthPointsMovingAnt; //Variable für HP-Funktion

//Sound für Aufprall
public var cakeSound1 : AudioClip;
public var cakeSound2 : AudioClip;
public var cakeSound3 : AudioClip;
private var cakeSoundState : int = 1;
private var cakeSoundFinal : AudioClip;

function Start () {

CakeImage=gameObject.GetComponent(SpriteRenderer);
ColliderCake=gameObject.GetComponent(PolygonCollider2D);
antHPfkt = GetComponentInParent(HealthPointsMovingAnt);

}

function Update () {

	if(GotCake==true){
		CakeImage.enabled=true;
		ColliderCake.enabled=true;
	}
	else{
		CakeImage.enabled=false;
		ColliderCake.enabled=false;
	}
	if(antHPfkt.movingAntHealthPoints<=0){
		CakeImage.enabled=false;
		ColliderCake.enabled=false;
	}
	
	switch(cakeSoundState){
		case 1:
			cakeSoundFinal=cakeSound1;
		break;
		
		case 2:
			cakeSoundFinal=cakeSound2;
		break;
		
		case 3:
			cakeSoundFinal=cakeSound3;
		break;
	}
	cakeSoundState=Random.Range(1,4);

}

function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "RealBullet(Clone)"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		GotCake=false;
		Debug.Log("Treffer - Kuchen Weg");		
	}
	GetComponent.<AudioSource>().PlayOneShot(cakeSoundFinal);
}