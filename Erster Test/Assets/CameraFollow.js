#pragma strict

private var CamTrans : Transform;
private var BulletTrans : Transform;
public var OffsetCameraX : float;

function Start () {

CamTrans = gameObject.GetComponent(Transform);
var BulletObj = GameObject.Find("bullet");
BulletTrans = BulletObj.GetComponent(Transform);

}

function Update () {
CamTrans.position.x=BulletTrans.position.x+OffsetCameraX;

}