#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var ThisText : UI.Text;


function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	var Obj = GameObject.Find("ReadyText");
	ThisText = Obj.GetComponent(UI.Text);
}

function Update () {

	if(GameSystemFkt.player1==true){
		ThisText.text="Are You ready Player 1?";
	}
	else if(GameSystemFkt.player2==true){
		ThisText.text="Are You ready Player 2?";
	}
	else{
		ThisText.text="NO PLAYER";
	}

}