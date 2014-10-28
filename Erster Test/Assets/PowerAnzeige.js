#pragma strict
private var realPowerText : GUIText;
private var bulletfkt : Shoot;
private var powerPercent : float = 0;

function Awake(){

var bulletobj = GameObject.Find("bullet");
bulletfkt = bulletobj.GetComponent(Shoot);


}

function Start () {

realPowerText = GetComponent(GUIText);

}

function Update () {



powerPercent = (bulletfkt.distance/bulletfkt.maxDistance)*100;
var powerPercentInt : int =powerPercent;
realPowerText.text="Power: " + powerPercentInt+"%";

}