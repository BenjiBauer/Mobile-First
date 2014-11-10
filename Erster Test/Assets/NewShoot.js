#pragma strict

private var myRigid : Rigidbody2D;
private var myTrans : Transform;

private var mousex : float;
private var mousey : float;
private var mouseposition = new Vector2();

private var FireForce = new Vector2();
public  var powerSpeed : float =1; 
private var directionAdd : float; //Variable die dem y-Wert für die richitge Richtung hinzugefügt wird.
public  var maxPower : float = 7500;
private var bulletStartPos = new Vector2();
private var endForcePower = new Vector2();
private var ZeroPos = new Vector2().zero;
public  var power : float;

private var fireGo : boolean =false;

function Start () {

myRigid = GetComponent(Rigidbody2D);
myTrans = GetComponent(Transform);
FireForce.x=0;
FireForce.y=0;
bulletStartPos=myTrans.position;
endForcePower.x=bulletStartPos.x+2;
endForcePower.y=bulletStartPos.y+2;
Debug.Log(endForcePower.x);


}

function Update () {

mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (Input.mousePosition.x,Input.mousePosition.y,0));

	if(mouseposition.x>mouseposition.y){//damit gleichschnell geladen wird
		if(Input.GetMouseButtonDown(0)){
			directionAdd=powerSpeed*((mouseposition.y-myTrans.position.y)/(mouseposition.x-myTrans.position.x));
		}
		if(Input.GetMouseButton(0)&& power<maxPower){
			FireForce.x=FireForce.x+powerSpeed;
			FireForce.y=FireForce.y+directionAdd;
			power = Vector2.Distance(ZeroPos,FireForce);
			Debug.Log("PowerX= "+power);
			Debug.Log("PowerPoint= "+FireForce);
		}
	}
	else{
		if(Input.GetMouseButtonDown(0)){
			directionAdd=powerSpeed*((mouseposition.x-myTrans.position.x)/(mouseposition.y-myTrans.position.y));
		}
		if(Input.GetMouseButton(0)&& power<maxPower){
			FireForce.y=FireForce.y+powerSpeed;
			FireForce.x=FireForce.x+directionAdd;
			power = Vector2.Distance(ZeroPos,FireForce);
			Debug.Log("PowerY= "+power);
			Debug.Log("PowerPoint= "+FireForce);
		}
	}
	if(Input.GetMouseButtonUp(0)){
		fireGo=true;
		myRigid.isKinematic=false;
	}
	

if(myTrans.position.x<endForcePower.x && myTrans.position.y<endForcePower.y&&fireGo==true){
	myRigid.AddForce(FireForce, ForceMode2D.Force);
}

if(Input.GetKeyDown(KeyCode.B)){
		resetToGun();
	}


}



function resetToGun(){
	FireForce.x=0;
	FireForce.y=0;
	power=0;
	myTrans.position=bulletStartPos;
	fireGo=false;
	directionAdd=0;
	myRigid.isKinematic=true;
}

function OnCollisionEnter2D (hit : Collision2D) {
	
	if(hit.collider){
		resetToGun();
	}

}

