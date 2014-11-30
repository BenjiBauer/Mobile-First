#pragma strict
private var powerbarTrans : Transform;
private var antHPfkt : ant2HP;
private var antTrans : Transform;
public var offset : Vector2;

function Awake(){

var antHPobj = GameObject.Find("ant2");
antHPfkt = antHPobj.GetComponent(ant2HP);
antTrans = antHPobj.GetComponent(Transform);
powerbarTrans = GetComponent(Transform);

}

function Start () {



}

function Update () {

powerbarTrans.localScale.x=(antHPfkt.HPvalueAnt2/500);
powerbarTrans.position = antTrans.position + offset;

	if(antHPfkt.HPvalueAnt2<=0){
		gameObject.active=false;
	}


}