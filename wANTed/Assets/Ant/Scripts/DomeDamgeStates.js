#pragma strict

//Verschiedene Stadien Sprites für Schaden
public var DomeDamageState1 : Sprite;
public var DomeDamageState2 : Sprite;
public var DomeDamageState3 : Sprite;
public var DomeDamageStateDead : Sprite;
public var DomeDamageStateNum : int = 1;
public var SumOfAllStates : int = 3; //Wie viele States gibt es, zum rechnen wann welcher State kommt

private var antHPfkt : HealthPoints; //Variable für HP-Funktion

function Awake() {
	antHPfkt = GetComponentInParent(HealthPoints);
}

function Update () {
	switch(DomeDamageStateNum){
		case 1:
			GetComponent(SpriteRenderer).sprite = DomeDamageState1;
		break;
		
		case 2:
			GetComponent(SpriteRenderer).sprite = DomeDamageState2;
		break;
		
		case 3:
			GetComponent(SpriteRenderer).sprite = DomeDamageState3;
		break;
		
		case 4:
			GetComponent(SpriteRenderer).sprite = DomeDamageStateDead;
		break;
	}
	if(antHPfkt.tankHealthPoints>(100-((100/SumOfAllStates)*1))){
		DomeDamageStateNum=1;
	}
	else if(antHPfkt.tankHealthPoints>(100-((100/SumOfAllStates)*2)) && antHPfkt.tankHealthPoints<=(100-((100/SumOfAllStates)*1))){
		DomeDamageStateNum=2;
	}
	else if(antHPfkt.tankHealthPoints>(100-((100/SumOfAllStates)*3)) && antHPfkt.tankHealthPoints<=(100-((100/SumOfAllStates)*2))){
		DomeDamageStateNum=3;
	}
	else if(antHPfkt.tankHealthPoints<=0){
		DomeDamageStateNum=4;
	}
	if(antHPfkt.antHealthPoints <=0){
		GetComponent(SpriteRenderer).color.a = 0;
	}
}