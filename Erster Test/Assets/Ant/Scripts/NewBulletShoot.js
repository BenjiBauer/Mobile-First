﻿
 #pragma strict
 
public var prefab : GameObject; //BulletObjekt
public var shootingPower : int = 0; //Geschw. der Bullet
public var MaxShootingPower : float = 10000;//Max Gesch.
public var shootingPowerSpeed : float = 100;//Geschwindigkeit, in der die Power hochgehen soll;
private var ShootingPointFunction : ShootPointFkt; //Ausrichtungspunkt Funktion
private var alreadyShoot : boolean = false;//wurde Geschossen, um Power zurückzustellen
public  var ShootIsPressed : boolean = false; //Für GameSystem

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;

public var buttonShootImage : Texture2D;
public var buttonSize : int = 70;

private var RotateButtonFkt : RotateButtons;
     
function Start () {
	ShootingPointFunction=GetComponentInChildren(ShootPointFkt);
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	RotateButtonFkt=GetComponentInParent(RotateButtons);
	
}
  
function Update () {
    /* if (Input.GetMouseButton(0)&& shootingPower<MaxShootingPower &&alreadyShoot==false && GameSystemFkt.bulletIsFlying==false) {
     	shootingPower=shootingPower+shootingPowerSpeed;//Lädt Power auf
     }
     if (Input.GetMouseButtonUp(0)&&alreadyShoot==false && GameSystemFkt.bulletIsFlying==false) {
         var pos = ShootingPointFunction.ShootPointPosition;
         //pos.z = transform.position.z - Camera.main.transform.position.z;
         //pos = Camera.main.ScreenToWorldPoint(pos);

         var q = Quaternion.FromToRotation(Vector3.up, pos - transform.position);
         var go = Instantiate(prefab, transform.position, q);
         go.rigidbody2D.AddForce(go.transform.up * shootingPower);
         alreadyShoot=true;
         ShootIsPressed=true;//wird von GameSystem zurück gestellt
     }*/
    if(GameSystemFkt.bulletIsFlying==false && alreadyShoot==true){
     	shootingPower=0;
     	alreadyShoot=false;
     }
     if(gameObject.active==true){
     	RotateButtonFkt.enabled=true;
     }
     else{
     	RotateButtonFkt.enabled=false;
     }
     //Funktion um Drehknöpfe zu aktivivieren
 }
 
 function OnGUI () {

	if (GUI.Button(Rect(15,225,buttonSize,buttonSize),buttonShootImage)){//&&alreadyShoot==false && GameSystemFkt.bulletIsFlying==false) {
         var pos = ShootingPointFunction.ShootPointPosition;
         //pos.z = transform.position.z - Camera.main.transform.position.z;
         //pos = Camera.main.ScreenToWorldPoint(pos);

         var q = Quaternion.FromToRotation(Vector3.up, pos - transform.position);
         var go = Instantiate(prefab, transform.position, q);
         go.rigidbody2D.AddForce(go.transform.up * shootingPower);
         alreadyShoot=true;
         ShootIsPressed=true;//wird von GameSystem zurück gestellt
     }
     //Wenn ich Button gedrückt halte
	 while (GUI.RepeatButton(Rect(15,155,buttonSize,buttonSize),buttonShootImage)){
		if (shootingPower<MaxShootingPower &&alreadyShoot==false && GameSystemFkt.bulletIsFlying==false) {
     		shootingPower=shootingPower+shootingPowerSpeed;//Lädt Power auf
     	}
	}	
}

