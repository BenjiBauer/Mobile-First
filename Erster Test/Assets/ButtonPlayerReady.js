#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
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
}