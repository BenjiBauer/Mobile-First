 #pragma strict
 
 private var h : float;
 private var v : float;
 private var horozontalSpeed : float = 2.0;
 private var verticalSpeed : float = 2.0;
 
 function Update()
 {
 }
 
 function JAJA(){
     if (Input.touchCount == 1)
     {
         var touch : Touch = Input.GetTouch(0);
         
         if (touch.phase == TouchPhase.Moved)
         {
             h = horozontalSpeed * touch.deltaPosition.x ;
             transform.Rotate( 0, 0, h, Space.World );
             
             v = verticalSpeed * touch.deltaPosition.y ;
             transform.Rotate( 0, 0, v, Space.World );
         }
     }
 }