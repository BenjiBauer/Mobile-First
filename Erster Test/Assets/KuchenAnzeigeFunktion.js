#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var RightCakeText : GUIText;

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	var RightText=GameObject.Find("RightCake");
	RightCakeText = RightText.GetComponent(GUIText);
}

function Update () {
//	RightCakeText.text = "BLABAL";//GameSystemFkt.numberOfCakeRight; 
}