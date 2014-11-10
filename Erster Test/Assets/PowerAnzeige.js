#pragma strict
private var realPowerText : GUIText;
private var bulletfkt : NewShoot;
private var powerPercent : float = 0;

function Awake(){

var bulletobj = GameObject.Find("bullet");
bulletfkt = bulletobj.GetComponent(NewShoot);


}

function Start () {

realPowerText = GetComponent(GUIText);

}

function Update () {



powerPercent = (bulletfkt.power/bulletfkt.maxPower)*100;
var powerPercentInt : int =powerPercent;
realPowerText.text="Power: " + powerPercentInt+"%";

}