#pragma strict
private var realPowerText : GUIText;

private var powerPercent : float = 0;

private var bullet1 : GameObject;
private var bullet2 : GameObject;
private var bullet3 : GameObject;
private var bullet4 : GameObject;
private var bullet5 : GameObject;
private var bullet6 : GameObject;
private var bullet1Fkt : NewBulletShoot;
private var bullet2Fkt : NewBulletShoot;
private var bullet3Fkt : NewBulletShoot;
private var bullet4Fkt : NewBulletShoot;
private var bullet5Fkt : NewBulletShoot;
private var bullet6Fkt : NewBulletShoot;

function Awake(){
	bullet1 = GameObject.Find("Shooter1");
	bullet2 = GameObject.Find("Shooter2");
	bullet3 = GameObject.Find("Shooter3");
	bullet4 = GameObject.Find("Shooter4");
	bullet5 = GameObject.Find("Shooter5");
	bullet6 = GameObject.Find("Shooter6");

	bullet1Fkt = bullet1.GetComponent(NewBulletShoot);
	bullet2Fkt = bullet2.GetComponent(NewBulletShoot);
	bullet3Fkt = bullet3.GetComponent(NewBulletShoot);
	bullet4Fkt = bullet4.GetComponent(NewBulletShoot);
	bullet5Fkt = bullet5.GetComponent(NewBulletShoot);
	bullet6Fkt = bullet6.GetComponent(NewBulletShoot);
}

function Start () {

realPowerText = GetComponent(GUIText);

}

function Update () {

	if(bullet1.active==true){
		powerPercent = (bullet1Fkt.shootingPower/bullet1Fkt.MaxShootingPower)*100;
	}
	else if(bullet2.active==true){
		powerPercent = (bullet2Fkt.shootingPower/bullet2Fkt.MaxShootingPower)*100;
	}
	else if(bullet3.active==true){
		powerPercent = (bullet3Fkt.shootingPower/bullet3Fkt.MaxShootingPower)*100;
	}
	else if(bullet4.active==true){
		powerPercent = (bullet4Fkt.shootingPower/bullet4Fkt.MaxShootingPower)*100;
	}
	else if(bullet5.active==true){
		powerPercent = (bullet5Fkt.shootingPower/bullet5Fkt.MaxShootingPower)*100;
	}
	else if(bullet6.active==true){
		powerPercent = (bullet6Fkt.shootingPower/bullet6Fkt.MaxShootingPower)*100;
	}
		var powerPercentInt : int =powerPercent;
		realPowerText.text="Power: " + powerPercentInt+"%";
}