#pragma strict

private var CamTrans : Transform;
private var bullet1Trans : Transform;
public var OffsetCameraX : float;
private var bullet1Rigid : Rigidbody2D;

function Start () {

CamTrans = gameObject.GetComponent(Transform);
var bullet1Obj = GameObject.Find("bullet1");
bullet1Trans = bullet1Obj.GetComponent(Transform);
bullet1Rigid = bullet1Obj.GetComponent(Rigidbody2D);

}

function Update () {

//if(bulletRigid.isKinematic == false){
	CamTrans.position.x=bullet1Trans.position.x+OffsetCameraX;
//}

}