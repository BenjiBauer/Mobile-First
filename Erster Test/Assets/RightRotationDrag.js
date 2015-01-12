 #pragma strict
 
 private var h : float;
 private var v : float;
 private var horozontalSpeed : float = 2.0;
 private var verticalSpeed : float = 2.0;
 public var PlayerIsMoving : boolean = false;
 
 public var StandardRotationPos : float = 0;
 public var RotationSpeed = 45.0;
 
 private var GameSystemObj : GameObject;
 private var GameSystemFkt : GameSystem;
 
 function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
 }
 
 function Update()
 {
 	if(PlayerIsMoving==false){
	 	MoveToNormalRotation();
	 }
	 if(GameSystemFkt.bulletIsLanded==true){
	 	PlayerIsMoving=false;
	 }
 }
 
 function RoationByDraging(){
     if (Input.touchCount == 1)
     {
         var touch : Touch = Input.GetTouch(0);
         
         if (touch.phase == TouchPhase.Moved)
         {
            /* h = horozontalSpeed * touch.deltaPosition.x ;
             transform.Rotate( 0, 0, -h, Space.World );*/
             
             v = verticalSpeed * touch.deltaPosition.y ;
             transform.Rotate( 0, 0, -v, Space.World );
         }
     PlayerIsMoving=true;//Damit Ameise sich während des justierens nicht zurück dreht
     	 
 	}
 }
 
 function MoveToNormalRotation(){
		var angle : float = Mathf.MoveTowardsAngle(transform.eulerAngles.z, StandardRotationPos, RotationSpeed * Time.deltaTime);
		transform.eulerAngles = Vector3(0, 0, angle);	
 }