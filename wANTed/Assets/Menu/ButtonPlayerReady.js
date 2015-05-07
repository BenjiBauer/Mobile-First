#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;

private var mainCamera : GameObject;
private var mainCameraFkt : CameraFollow;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	
	mainCamera=GameObject.Find("Main Camera");
	mainCameraFkt=mainCamera.GetComponent(CameraFollow);
}

function Update () {
	if(GameSystemFkt.playerIsReady==false){
		Time.timeScale=0;
	}
	else {
		Time.timeScale=1;
	}

}

function WhenButtonClicked(){
	Time.timeScale=1;
	GameSystemFkt.playerIsReady =true;
	mainCameraFkt.timeSoundplaying=false;
}