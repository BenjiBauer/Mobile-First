﻿#pragma strict

public var damageOnThisBody : float = 20; //Höhe des Schadens
private var antHPfkt : HealthPoints; //Variable für HP-Funktion

function Awake() {

	antHPfkt = GetComponentInParent(HealthPoints);
}



//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	//if(other.gameObject.name == "bullet1" || other.gameObject.name == "bullet2" || other.gameObject.name == "bullet3" || other.gameObject.name == "bullet4" || other.gameObject.name == "bullet5" || other.gameObject.name == "bullet6"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.antHealthPoints -= damageOnThisBody;
		Debug.Log("Treffer");		
	//}
}