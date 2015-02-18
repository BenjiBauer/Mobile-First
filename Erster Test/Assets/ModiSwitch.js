#pragma strict

public var gameModus : String; //Spielmodus als Text
public var modusSwitcher : int = 1;// Für Switchstatements

private var ModiButtonText : UI.Text;

private var addButtonObj : GameObject;
private var subButtonObj : GameObject;
private var EndValueTextObj : GameObject;
private var EndValueTextText : UI.Text;
private var ModiTextObj : GameObject;
private var ModiTextText : UI.Text;

public var EndValue : int; //Wert für entweder Zeitangabe oder Rundenzahl
private var addValue : int; //Wert der hinzugefügt wird an Endvalue
private var subValue : int; //Wert der abgezogen wird an Endvalue

function Start () {
	var ModiButtonTextObj = GameObject.Find("ModiButtonText");
	ModiButtonText=ModiButtonTextObj.GetComponent(UI.Text);

	addButtonObj=GameObject.Find("AddButton");
	subButtonObj=GameObject.Find("SubButton");
	EndValueTextObj=GameObject.Find("EndValueText");
	EndValueTextText=EndValueTextObj.GetComponent(UI.Text);
	ModiTextObj=GameObject.Find("ModiText");
	ModiTextText=ModiTextObj.GetComponent(UI.Text);

	EndValue=2; //Startet bei Time daher mindest Wert.
}

function Update () {

	switch(modusSwitcher){//Wechselt zwischen den Modi
		case 1:
			gameModus= "Until Death";
			addButtonObj.active=false;
			subButtonObj.active=false;
			EndValueTextObj.active=false;
			ModiTextObj.active=false;
			break;
			
		case 2:
			gameModus= "Time Mode";
			TimeMode();
			addButtonObj.active=true;
			subButtonObj.active=true;
			EndValueTextObj.active=true;
			ModiTextObj.active=true;
			ModiTextText.text="Wie viele Minuten soll es gehn?";
			break;
			
		case 3:
			gameModus= "Round Mode";
			ModiTextText.text="Wie viele Runden soll es gehn?";
			RoundMode();
			break;
		}
	ModiButtonText.text = gameModus;
	EndValueTextText.text = EndValue.ToString();
	Debug.Log(gameModus);
	Debug.Log("Value: "+EndValue);	
}

function changeMode(){//Für Klick
	modusSwitcher++; //Wechselt zu nächsten Modi
	if(modusSwitcher==4){ 
		modusSwitcher=1;
	}
}

function TimeMode(){
	if(EndValue>30){
		EndValue=4;
	}
	else if(EndValue<4){
		EndValue=30;
	}
}

function RoundMode(){
	if(EndValue>50){
		EndValue=10;
	}
	else if(EndValue<10){
		EndValue=50;
	}
}

function addButton(){
	EndValue++;
}

function subButton(){
	EndValue--;
}

function startgame(){
	PlayerPrefs.SetString("Game Modus", gameModus);
	PlayerPrefs.SetInt("End Value", EndValue);
	Application.LoadLevel ("maingame");
}