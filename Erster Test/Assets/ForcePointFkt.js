#pragma strict

public var ForcePointX : float;
public var ForcePointY : float;
private var ForceTrans : Transform;

function Start () {

ForceTrans=GetComponent(Transform);


}

function Update () {

ForcePointX=ForceTrans.position.x;
ForcePointY=ForceTrans.position.y;

}