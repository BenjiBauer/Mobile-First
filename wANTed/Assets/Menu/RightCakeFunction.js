#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var RightCakeText : UI.Text;

private var lastCakeAmount : int; //Zum überprüfen, falls etwas neues dazukommt

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	RightCakeText = GetComponent(UI.Text);
	lastCakeAmount=GameSystemFkt.numberOfCakeRight;
}

function Update () {
	RightCakeText.text = GameSystemFkt.numberOfCakeRight.ToString();
	
	if(lastCakeAmount!=GameSystemFkt.numberOfCakeRight){//Wird nur bei Änderung ausgeführt
		GetComponent.<Animation>().Play("Kuchen_Anzeige_plus"); //Animation das ein neuer Kuchen da ist
		lastCakeAmount=GameSystemFkt.numberOfCakeRight;
	}
}