#pragma strict

//Verschiedene Stadien Sprites für Schaden
public var TankDamageState1 : Sprite;
public var TankDamageState2 : Sprite;
public var TankDamageState3 : Sprite;
public var TankDamageState4 : Sprite;
public var TankDamageState5 : Sprite;
public var TankDamageStateDead : Sprite;
public var TankDamageStateNum : int = 1;
public var SumOfAllTankStates : int = 5; //Wie viele States gibt es, zum rechnen wann welcher State kommt

private var antHPfkt : HealthPoints; //Variable für HP-Funktion

function Awake() {
	antHPfkt = GetComponentInParent(HealthPoints);
}

function Update () {
	switch(TankDamageStateNum){
		case 1:
			GetComponent(SpriteRenderer).sprite = TankDamageState1;
		break;
		
		case 2:
			GetComponent(SpriteRenderer).sprite = TankDamageState2;
		break;
		
		case 3:
			GetComponent(SpriteRenderer).sprite = TankDamageState3;
		break;
		
		case 4:
			GetComponent(SpriteRenderer).sprite = TankDamageState4;
		break;
		
		case 5:
			GetComponent(SpriteRenderer).sprite = TankDamageState5;
		break;
		
		default:
			GetComponent(SpriteRenderer).sprite = TankDamageStateDead;
		break;
		
	}
	var allHP = antHPfkt.tankHealthPoints+antHPfkt.antHealthPoints;

	
	if(allHP>(200-((200/SumOfAllTankStates)*1))){
		TankDamageStateNum=1;
	}
	else if(allHP>(200-((200/SumOfAllTankStates)*2)) && antHPfkt.tankHealthPoints<=(200-((200/SumOfAllTankStates)*1))){
		TankDamageStateNum=2;
	}
	else if(allHP>(200-((200/SumOfAllTankStates)*3)) && antHPfkt.tankHealthPoints<=(200-((200/SumOfAllTankStates)*2))){
		TankDamageStateNum=3;
	}
	else if(allHP>(200-((200/SumOfAllTankStates)*4)) && antHPfkt.tankHealthPoints<=(200-((200/SumOfAllTankStates)*3))){
		TankDamageStateNum=4;
	}
	else if(allHP>(200-((200/SumOfAllTankStates)*5)) && antHPfkt.tankHealthPoints<=(200-((200/SumOfAllTankStates)*4))){
		TankDamageStateNum=5;
	}
	else if(allHP<=0){
		TankDamageStateNum=6;
	}
}