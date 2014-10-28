#pragma strict

private var myRigid : Rigidbody2D; //Variable fuer Unterpunkt
private var mySpring : SpringJoint2D;
private var bultrans : Transform;
public  var distance : float = 0;
private var distanceSet : boolean = false; //checkt, ob der Wert für die Distanz schon gesetzt wurde
public  var maxDistance : float = 35;
public 	var powerSpeed : float = 0.1;
private var powercalc : boolean = false; //checkt, ob gerade gedrückt wird
private var mouseDistanceX : float = 0; //Entfernung von Maus-X zu bullet
private var mouseDistanceY : float = 0;

private var mousex : float;
private var mousey : float;
private var mouseposition = new Vector2();

private var bulletStartPosX : float = 0;
private var bulletStartPosY : float = 0;

private var FireButtonFkt : ButtonFire;


function Start () {

	myRigid = GetComponent(Rigidbody2D);
	mySpring = GetComponent(SpringJoint2D);
	bultrans = GetComponent(Transform);
	distanceSet = false;
	powercalc = false;
	//Ende der Feder auf Position der Kugel
	mySpring.connectedAnchor.x=bultrans.position.x;
	mySpring.connectedAnchor.y=bultrans.position.y;
	bulletStartPosX=bultrans.position.x;
	bulletStartPosY=bultrans.position.y;
	
	var FireButtonObj = GameObject.Find("FireButton");
	FireButtonFkt = FireButtonObj.GetComponent(ButtonFire);

}

function Update () {



if(FireButtonFkt.fireGo == true){
	powercalc = true;
	
	//Feder wird gespannt
	if(distance<=maxDistance){
		mouseDistanceX-=powerSpeed*(mouseDistanceX/(mouseDistanceX+mouseDistanceY));
		mySpring.connectedAnchor.x=mousex-mouseDistanceX;
		mouseDistanceY-=powerSpeed*(mouseDistanceY/(mouseDistanceX+mouseDistanceY));
		mySpring.connectedAnchor.y=mousey-mouseDistanceY;
		
		distance = Vector2.Distance(bultrans.position,mySpring.connectedAnchor);
		Debug.Log(distance);
	}

    //Debug.Log("dis: "+mySpring.connectedAnchor.x);

	//Entfernung von Ball zu Maus
	if(distanceSet==false){
		mouseDistanceX=mousex-bultrans.position.x;
		mouseDistanceY=mousey-bultrans.position.y;
		
		//distance = Vector2.Distance(bultrans.position,mouseposition);
    	//Maximale entfernung fuer Feder Ende
    	/*if(distance>=maxDistance){
    		distance=maxDistance;
    	}
    	Debug.Log("Distance: "+distance);*/
    	distanceSet = true; //wird nur einmal geprueft
    }
}

else if(FireButtonFkt.fireGo == true){
	//Kugel wird geschleudert, wird zur Bewegung freigeschaltet
	myRigid.isKinematic = false;
	//powercalc = false;
}

if(powercalc==false){//wird nur geprüft, wenn Maus nicht gedrueckt wird, ansonsten verschiebt sich Position
	//mouse-position to world, not screen
	mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (Input.mousePosition.x,Input.mousePosition.y,0));
	
	if(mouseposition.x>=transform.position.x){
		mousex = mouseposition.x;
	}
	else{
		mousex = transform.position.x;
	}
	mousey = mouseposition.y;
	//Ende der Feder an Maus
	//mySpring.connectedAnchor= mouseposition;
}

if((bultrans.position.x>mySpring.connectedAnchor.x||bultrans.position.y>mySpring.connectedAnchor.y) && myRigid.isKinematic==false){
	mySpring.enabled = false;//Sobald die Kugel das Ende der Feder erreicht hat, wird die Feder entfernt
}

if(Input.GetKeyDown(KeyCode.B)){
	resetToGun();
}

}



function resetToGun(){

	distanceSet = false;
	powercalc = false;
    bultrans.position.x=bulletStartPosX;
	bultrans.position.y=bulletStartPosY;
	myRigid.isKinematic = true;
	mySpring.enabled = true;
	distance=0;
	FireButtonFkt.fireGo = false;


}

