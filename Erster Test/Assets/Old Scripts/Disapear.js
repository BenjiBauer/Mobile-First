#pragma strict

public var wex : float = 0; 
private var antMass : Rigidbody2D;

function Awake(){

}

function Start () {

antMass = GetComponent(Rigidbody2D);

}

function Update () {

if(Input.GetKeyDown(KeyCode.A)){

antMass.mass = 2;

}

}