#pragma strict

private var myRigid : Rigidbody2D;
private var myTrans : Transform;

private var mousex : float;
private var mousey : float;
private var mouseposition = new Vector2();

function Start () {

myRigid = GetComponent(Rigidbody2D);
myTrans = GetComponent(Transform);

}

function Update () {

mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (Input.mousePosition.x,Input.mousePosition.y,0));
myRigid.AddForce(Vector2(100,100), ForceMode2D.Force);
//myRigid.AddForceAtPosition(mouseposition,myTrans.position, ForceMode2D.Force);

}