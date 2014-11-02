#pragma strict
private var powerbarTrans : Transform;
private var antHPfkt : antHP;
private var antTrans : Transform;
public var offset : Vector2;

function Awake(){

var antHPobj = GameObject.Find("ant1");
antHPfkt = antHPobj.GetComponent(antHP);
antTrans = antHPobj.GetComponent(Transform);
powerbarTrans = GetComponent(Transform);

}

function Start () {



}

function Update () {

powerbarTrans.localScale.x=(antHPfkt.HPvalueAnt1/500);
powerbarTrans.position = antTrans.position + offset;

	if(antHPfkt.HPvalueAnt1<=0){
		gameObject.active=false;
	}


}