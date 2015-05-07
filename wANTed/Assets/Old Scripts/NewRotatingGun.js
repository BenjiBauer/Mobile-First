#pragma strict

public var rotationOffset : int = 10;
private var powercalcuting : boolean = false;
private var mouseposition = new Vector2();
private var difference = new Vector2();
private var rotZ : float;

function Update () {

		mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (Input.mousePosition.x,Input.mousePosition.y,0));

		if(powercalcuting==false && mouseposition.x>=transform.position.x){//Wärend man gedrückt hält soll die Kanone sich nicht verstellen, und nicht nach hinten Schießen
			difference = Camera.main.ScreenToWorldPoint(Input.mousePosition)-transform.position;
			difference.Normalize();
			
			rotZ = Mathf.Atan2 (difference.y,difference.x)*Mathf.Rad2Deg;
			transform.rotation = Quaternion.Euler (0, 0, rotZ+rotationOffset);
		}
		if (Input.GetMouseButtonDown (0)) {
			powercalcuting=true;//Sobald man drückt, dreht sich die Kanone nicht mehr
		}

		if (Input.GetMouseButtonUp (0)) {
			powercalcuting=false;
		}
	}
