#pragma strict
private var realPowerText : GUIText;
private var bullet1fkt : BulletShoot;
private var bullet2fkt : BulletShoot;
private var powerPercent : float = 0;
private var bullet1obj : GameObject;
private var bullet2obj : GameObject;

function Awake(){

bullet1obj = GameObject.Find("bullet");
bullet1fkt = bullet1obj.GetComponent(BulletShoot);
bullet2obj = GameObject.Find("bullet2");
bullet2fkt = bullet2obj.GetComponent(BulletShoot);


}

function Start () {

realPowerText = GetComponent(GUIText);

}

function Update () {

	if(bullet1obj.active==true){
		powerPercent = (bullet1fkt.power/bullet1fkt.maxPower)*100;
	}
	else if(bullet2obj.active==true){
		powerPercent = (bullet2fkt.power/bullet2fkt.maxPower)*100;
	}
		var powerPercentInt : int =powerPercent;
		realPowerText.text="Power: " + powerPercentInt+"%";
}