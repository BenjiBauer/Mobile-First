#pragma strict
public var KreuzPosX : float;
public var KreuzPosY : float;
public var KreuzSize : float;
private var windowRect : Rect;
public var FadenkreuzImage : Texture2D;
private var FadenkreuzPos = new Vector2();

function Start(){

windowRect = Rect (KreuzPosX, KreuzPosY, KreuzSize, KreuzSize);

}

function OnGUI () {
	windowRect = GUI.Window (0, windowRect, DoMyWindow, FadenkreuzImage,GUIStyle.none);
}
// Make the contents of the window
function DoMyWindow (windowID : int) {
	// Insert a huge dragging area at the end.
	// This gets clipped to the window (like all other controls) so you can never
	//  drag the window from outside it.
	GUI.DragWindow ();
	FadenkreuzPos.x=windowRect.position.x+(KreuzSize/2);
	FadenkreuzPos.y=windowRect.position.y+(KreuzSize/2);
	
}