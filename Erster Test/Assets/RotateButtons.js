#pragma strict

public var buttonTurnImageUp : Texture2D;
public var buttonTurnImageDown : Texture2D;
public var buttonSize : int = 70;
public var ButtonSpeed : float = 0.01; //Geschwindigkeit in dem gedreht wird
public var maxAngleUp : float = 90;
public var maxAngleDown : float = 300;

function Awake () {

}

function OnGUI () {

	//Wenn ich hoch-Button klicke
	while (GUI.RepeatButton(Rect(15,15,buttonSize,buttonSize),"UP")){
		if(transform.rotation.z>maxAngleDown||transform.rotation.z<=maxAngleUp){
			transform.rotation.z+=ButtonSpeed;
		}
	}
	//Wenn ich runter-Button klicke
	while (GUI.RepeatButton(Rect(15,85,buttonSize,buttonSize),"DOWN")){
		if(transform.rotation.z>maxAngleDown||transform.rotation.z<=maxAngleUp){
			transform.rotation.z-=ButtonSpeed;
		}
	}
	

}