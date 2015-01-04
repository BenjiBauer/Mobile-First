#pragma strict
public var timeToShoot : float = 1000; //Sekunden, die der Spieler zum Schießen hat

function Start () {

}

function Update () {
 timeToShoot-=Time.deltaTime;
 Debug.Log((timeToShoot));
if(Input.GetKeyDown(KeyCode.A)){
	Time.timeScale=0;
}
else if(Input.GetKeyDown(KeyCode.S)){
	Time.timeScale=1;
}
else if(Input.GetKeyDown(KeyCode.D)){
	Time.timeScale=0.3;
}
else{

}

}