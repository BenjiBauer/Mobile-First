#pragma strict

private	var hit_position : Vector3 = Vector3.zero;
private	var current_position : Vector3 = Vector3.zero;
private	var camera_position : Vector3 = Vector3.zero;
private	var z : float = 0.0;
private	var firstTouch : boolean = false;
	
	// Use this for initialization
	function Start () {
		
	}
	
	function Update(){
	
		if (Input.touchCount == 2){
			if(firstTouch==false){
				hit_position = Input.GetTouch(0).position;
				camera_position = transform.position;
				firstTouch=true;
					
			}
				current_position = Input.GetTouch(0).position;
				LeftMouseDrag();        
		}
		if(!Input.touchCount == 2){
			firstTouch=false;
		}
	}
	
	function LeftMouseDrag(){
		// From the Unity3D docs: "The z position is in world units from the camera."  In my case I'm using the y-axis as height
		// with my camera facing back down the y-axis.  You can ignore this when the camera is orthograhic.
		current_position.z = hit_position.z = camera_position.y;
		
		// Get direction of movement.  (Note: Don't normalize, the magnitude of change is going to be Vector3.Distance(current_position-hit_position)
		// anyways.  
		var direction : Vector3 = Camera.main.ScreenToWorldPoint(current_position) - Camera.main.ScreenToWorldPoint(hit_position);
		
		// Invert direction to that terrain appears to move with the mouse.
		direction = direction * -1;
		
		var position : Vector3 = camera_position + direction;
		
		transform.position.x = position.x;
	}
