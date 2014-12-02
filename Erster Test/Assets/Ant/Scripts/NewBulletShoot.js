
 #pragma strict
 
public var prefab : GameObject;
public var shootingPower : int = 0;
public var MaxShootingPower : int = 10000;
public var shootingPowerSpeed : int = 100;//Geschwindigkeit, in der die Power hochgehen soll;
private var ShootingPointFunction : ShootPointFkt;
private var alreadyShoot : boolean = false;

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
     
function Start () {
	ShootingPointFunction=GetComponentInChildren(ShootPointFkt);
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
}
  
function Update () {
     if (Input.GetMouseButton(0)&& shootingPower<MaxShootingPower &&alreadyShoot==false) {
     	shootingPower=shootingPower+shootingPowerSpeed;
     }
     if (Input.GetMouseButtonUp(0)&&alreadyShoot==false) {
         var pos = ShootingPointFunction.ShootPointPosition;
         //pos.z = transform.position.z - Camera.main.transform.position.z;
         //pos = Camera.main.ScreenToWorldPoint(pos);

         var q = Quaternion.FromToRotation(Vector3.up, pos - transform.position);
         var go = Instantiate(prefab, transform.position, q);
         go.rigidbody2D.AddForce(go.transform.up * shootingPower);
         alreadyShoot=true;
     }
     if(GameSystemFkt.bulletIsFlying==false && alreadyShoot==true){
     	shootingPower=0;
     	alreadyShoot=false;
     }
     Debug.Log("ALREADYSHOOT: "+alreadyShoot);
 }

