#pragma strict

private var CakeImage : SpriteRenderer;
public var GotCake : boolean = false;

function Start () {

CakeImage=gameObject.GetComponent(SpriteRenderer);

}

function Update () {

	if(GotCake==true){
		CakeImage.enabled=true;
	}
	else{
		CakeImage.enabled=false;
	}

}