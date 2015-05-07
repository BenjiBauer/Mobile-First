using UnityEngine;
using System.Collections;

public class AntRotating : MonoBehaviour {
	
	#pragma strict
	
	public int rotationOffset = 10;
	private bool powercalcuting = false;
	private Vector2 mouseposition;
	
	void Update () {
		
		mouseposition = Camera.main.ScreenToWorldPoint(new Vector3 (Input.mousePosition.x,Input.mousePosition.y,0));
		
		if(powercalcuting==false&& mouseposition.x<=transform.position.x){//Wärend man gedrückt hält soll die Kanone sich nicht verstellen, und nicht nach hinten Schießen
			Vector3 difference = Camera.main.ScreenToWorldPoint(Input.mousePosition)-transform.position;
			difference.Normalize();
			
			float rotZ = Mathf.Atan2 (difference.y,difference.x)*Mathf.Rad2Deg;
			transform.rotation = Quaternion.Euler (0, 0, rotZ+rotationOffset);
		}
		if (Input.GetMouseButtonDown (0)) {
			powercalcuting=true;//Sobald man drückt, dreht sich die Kanone nicht mehr
		}
		
		if (Input.GetMouseButtonUp (0)) {
			powercalcuting=false;
		}
	}
}