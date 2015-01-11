#pragma strict

private var CakeImage : SpriteRenderer;
public var GotCake : boolean = false;
private var ColliderCake : PolygonCollider2D;

function Start () {

CakeImage=gameObject.GetComponent(SpriteRenderer);
ColliderCake=gameObject.GetComponent(PolygonCollider2D);

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

}

function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "RealBullet(Clone)"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		GotCake=false;
		Debug.Log("Treffer - Kuchen Weg");		
	}
}