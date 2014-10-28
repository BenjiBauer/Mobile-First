#pragma strict

public var buttonFireImage : Texture2D;
public var fireGo : boolean = false;

function Start () {

}

function OnGUI () {

	if(GUI.Button(Rect(15,15,100,100),buttonFireImage)){
		
		fireGo = true;
	}

}