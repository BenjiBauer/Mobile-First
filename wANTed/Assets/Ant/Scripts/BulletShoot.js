#pragma strict
#pragma strict

private var myRigid : Rigidbody2D;
private var myTrans : Transform;

private var ForcePosition = new Vector2();
private var BulletPosition = new Vector2();

private var FireForce = new Vector2();
public  var powerSpeed : float =1; 
private var directionAdd : float; //Variable die dem y-Wert für die richitge Richtung hinzugefügt wird.
public  var maxPower : float = 7500;
public  var bulletStartPos = new Vector3();
private var ZeroPos = new Vector2().zero;
public  var power : float;
public  var gotHit : boolean=false;

private var fireGo : boolean =false;

private var ForcePointFunction : ForcePointFkt;
private var RotatingGunFkt : NewRotatingGun;

function Start () {
	myRigid = GetComponent(Rigidbody2D);
	myTrans = GetComponent(Transform);
	FireForce.x=0;
	FireForce.y=0;
	ForcePointFunction = GetComponentInChildren(ForcePointFkt);
	RotatingGunFkt = GetComponentInParent(NewRotatingGun);
}

function Awake(){
	gotHit=false;
}

function Update () {

		ForcePosition = Camera.main.ScreenToWorldPoint(new Vector3 (ForcePointFunction.ForcePointX,ForcePointFunction.ForcePointY));
		BulletPosition = Camera.main.ScreenToWorldPoint(new Vector3 (myTrans.position.x,myTrans.position.y));
		
		if(ForcePosition.x>ForcePosition.y){//damit gleichschnell geladen wird
			if(Input.GetMouseButtonDown(0)){
				directionAdd=powerSpeed*((ForcePosition.y-BulletPosition.y)/(ForcePosition.x-BulletPosition.x));
			}
			if(Input.GetMouseButton(0)&& power<maxPower){
				FireForce.x=FireForce.x+powerSpeed;
				FireForce.y=FireForce.y+directionAdd;
				power = Vector2.Distance(ZeroPos,FireForce);
				//Debug.Log("PowerX= "+power);
				//Debug.Log("PowerPoint= "+FireForce);
			}
		}
		else{
			if(Input.GetMouseButtonDown(0)){
				directionAdd=powerSpeed*((ForcePosition.x-BulletPosition.x)/(ForcePosition.y-BulletPosition.y));
			}
			if(Input.GetMouseButton(0)&& power<maxPower){
				FireForce.y=FireForce.y+powerSpeed;
				FireForce.x=FireForce.x+directionAdd;
				power = Vector2.Distance(ZeroPos,FireForce);
				//Debug.Log("PowerY= "+power);
				//Debug.Log("PowerPoint= "+FireForce);
			}
		}
		if(Input.GetMouseButtonUp(0)){
			fireGo=true;
			myRigid.isKinematic=false;
		}
	
	

	if(Input.GetKeyDown(KeyCode.B)){
			resetToGun();
		}

	if(fireGo==true){
		RotatingGunFkt.enabled=false;
	}
}

function resetToGun(){
	FireForce.x=0;
	FireForce.y=0;
	power=0;
	fireGo=false;
	directionAdd=0;
	myRigid.isKinematic=true;
	RotatingGunFkt.enabled=true;
	gotHit=false;
	myTrans.position=bulletStartPos;
	Debug.Log("BUL:"+bulletStartPos);
	Debug.Log("OPOS:"+myTrans.position);
	RotatingGunFkt.enabled=true;
}

function OnTriggerStay2D (other : Collider2D) {
	if(fireGo==true){
		myRigid.AddForce(FireForce, ForceMode2D.Force);
	}
}

function OnTriggerExit2D (other : Collider2D) {
	//fireGo=false;
}


function OnCollisionEnter2D (hit : Collision2D) {	
	if(hit.collider){
		resetToGun();
		gotHit=true;
	}
}


