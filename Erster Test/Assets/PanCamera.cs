using UnityEngine;
using System.Collections;

public class PanCamera : MonoBehaviour {
	public float speed = 0.1F;
	public int maxLeft = -280;
	public int maxRight = 280;
	void Update() {
			if (Input.touchCount ==2 && Input.GetTouch (0).phase == TouchPhase.Moved) {
				//if(transform.position.x>=maxLeft&&transform.position.x<=maxRight){
						Vector2 touchDeltaPosition = Input.GetTouch (0).deltaPosition;
						transform.Translate (-touchDeltaPosition.x * speed, -touchDeltaPosition.y * speed, 0);
				//}
			}
	}
}