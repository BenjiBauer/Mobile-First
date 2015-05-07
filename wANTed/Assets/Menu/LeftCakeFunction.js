#pragma strict

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;
private var LeftCakeText : UI.Text;

private var lastCakeAmount : int; //Zum überprüfen, falls etwas neues dazukommt

function Start () {
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);;
	LeftCakeText = GetComponent(UI.Text);
	lastCakeAmount=GameSystemFkt.numberOfCakeLeft;
}

function Update () {
	LeftCakeText.text = GameSystemFkt.numberOfCakeLeft.ToString();
	
	if(lastCakeAmount!=GameSystemFkt.numberOfCakeLeft){//Wird nur bei Änderung ausgeführt
		GetComponent.<Animation>().Play("Kuchen_Anzeige_plus_links");//Animation das ein neuer Kuchen da ist
		lastCakeAmount=GameSystemFkt.numberOfCakeLeft;
	}
}