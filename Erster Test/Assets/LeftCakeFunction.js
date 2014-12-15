#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var LeftCakeText : UI.Text;

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);;
	LeftCakeText = GetComponent(UI.Text);
}

function Update () {
	LeftCakeText.text = GameSystemFkt.numberOfCakeLeft.ToString();
}