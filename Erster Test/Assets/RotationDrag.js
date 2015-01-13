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
 private var AnimationFkt : Animator;
 
 	public var rotationOffset : int  = 10;
	private var powercalcuting : boolean = false;
	private var mouseposition = Vector2();
	private var difference = Vector3();
	private var rotZ : float;
 
 function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	AnimationFkt=GetComponent(Animator);
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
	             transform.Rotate( 0, 0, h, Space.World );*/
	             
	             v = verticalSpeed * touch.deltaPosition.y ;
	             transform.Rotate( 0, 0, v, Space.World );
	         }
	         PlayerIsMoving=true;//Damit Ameise sich während des justierens nicht zurück dreht
     	 
 	}
 }
 
 function RotationByDraggingPointToMouse(){
 		mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (Input.mousePosition.x,Input.mousePosition.y,0));

		//Wärend man gedrückt hält soll die Kanone sich nicht verstellen, und nicht nach hinten Schießen
			difference = Camera.main.ScreenToWorldPoint(Input.mousePosition)-transform.position;
			difference.Normalize();
			
			rotZ = Mathf.Atan2 (difference.y,difference.x)*Mathf.Rad2Deg;
			transform.rotation = Quaternion.Euler (0, 0, rotZ+rotationOffset);
			PlayerIsMoving=true;//Damit Ameise sich während des justierens nicht zurück dreht
 }
 
 function MoveToNormalRotation(){
		var angle : float = Mathf.MoveTowardsAngle(transform.eulerAngles.z, StandardRotationPos, RotationSpeed * Time.deltaTime);
		transform.eulerAngles = Vector3(0, 0, angle);
		if(transform.eulerAngles.z<=StandardRotationPos+2){
			AnimationFkt.enabled=true;	
		}
 }