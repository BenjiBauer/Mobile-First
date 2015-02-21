#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var RightCakeText : UI.Text;

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	RightCakeText = GetComponent(UI.Text);
}

function Update () {
	RightCakeText.text = GameSystemFkt.numberOfCakeRight.ToString();
}