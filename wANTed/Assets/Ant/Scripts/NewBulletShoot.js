
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

public var shotSound : AudioClip;


private var mouseIsPressed : boolean = false; //für neue UI-Buttons um gedrückt halten zu können
private var shooterGedruektHalten : boolean = false;
     
function Start () {
	ShootingPointFunction=GetComponentInChildren(ShootPointFkt);
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
}
  
function Update () {

    if(GameSystemFkt.bulletIsFlying==false && alreadyShoot==true){
     	shootingPower=0;
     	alreadyShoot=false;
     }
     if(shooterGedruektHalten==true){
     	ShooterPressed();
	 }
 }
 

function ShooterPressed(){
	shooterGedruektHalten=true;
	mouseIsPressed=true;
	if(mouseIsPressed==true &&GameSystemFkt.bulletIsLanded==false && GameSystemFkt.bulletIsFlying==false){
		if (shootingPower<MaxShootingPower &&alreadyShoot==false && GameSystemFkt.bulletIsFlying==false) {
		     		shootingPower=shootingPower+shootingPowerSpeed;//Lädt Power auf
			}
	}
}

function ShooterReleased(){
	shooterGedruektHalten=false;
	if(GameSystemFkt.bulletIsLanded==false && GameSystemFkt.bulletIsFlying==false){
		mouseIsPressed=false;
		 var pos = ShootingPointFunction.ShootPointPosition;
		 //pos.z = transform.position.z - Camera.main.transform.position.z;
		 //pos = Camera.main.ScreenToWorldPoint(pos);

		 var q = Quaternion.FromToRotation(Vector3.up, pos - transform.position);
		 var go = Instantiate(prefab, transform.position, q);
		 go.GetComponent.<Rigidbody2D>().AddForce(go.transform.up * shootingPower);
		 alreadyShoot=true;
		 ShootIsPressed=true;//wird von GameSystem zurück gestellt
		 GetComponent.<AudioSource>().PlayOneShot(shotSound);
	 }
}

