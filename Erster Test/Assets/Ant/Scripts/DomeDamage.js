﻿#pragma strict

public var damageOnThisDome : float = 20; //Höhe des Schadens
private var antHPfkt : HealthPoints; //Variable für HP-Funktion

function Awake() {

	antHPfkt = GetComponentInParent(HealthPoints);
}

function Update(){

	if(antHPfkt.tankHealthPoints <=0){
		Debug.Log("Tank is destroyed");
		gameObject.active=false;
	}

}

//Sobald etwas in die Trigger eindringt, wird abgezogen
function OnCollisionEnter2D(other : Collision2D){
	if(other.gameObject.name == "bullet"){//Nur auslöden, wenn eine Kugel trifft KLAPPT NICHT! TREFFER WIRD GEGEBEN, ABER SCHADEN WIRD NICHT MEHR ABGEZOGE
		antHPfkt.tankHealthPoints  -= damageOnThisDome;
		Debug.Log("Treffer");		
	}
}