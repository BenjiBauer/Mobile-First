#pragma strict

private var CamTrans : Transform;
private var BulletTrans : Transform;
public var OffsetCameraX : float;
private var bulletRigid : Rigidbody2D;

function Start () {

CamTrans = gameObject.GetComponent(Transform);
var BulletObj = GameObject.Find("bullet");
BulletTrans = BulletObj.GetComponent(Transform);
bulletRigid = BulletObj.GetComponent(Rigidbody2D);

}

function Update () {

if(bulletRigid.isKinematic == false){
	CamTrans.position.x=BulletTrans.position.x+OffsetCameraX;
}

}