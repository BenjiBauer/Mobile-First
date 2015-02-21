#pragma strict

private var bulletFkt : NewBulletShoot;
private var Trans : Transform;
private var FullSize : float = 0.6;

function Start () {
	bulletFkt=GetComponentInParent(NewBulletShoot);
	Trans = GetComponent(Transform);
}

function Update () {
	Trans.localScale.x=0.4+FullSize*(bulletFkt.shootingPower/bulletFkt.MaxShootingPower);
	Trans.localScale.y=0.4+FullSize*(bulletFkt.shootingPower/bulletFkt.MaxShootingPower);
}