#pragma strict

public var buttonFireImage : Texture2D;
public var fireGo : boolean = false;

function Start () {

}

function OnGUI () {

	while (GUI.RepeatButton(Rect(15,15,100,100),buttonFireImage)){
		fireGo = true;
	}
	if(Input.GetMouseButtonUp(0)){
		fireGo = false;
	}

}