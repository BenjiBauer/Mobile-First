﻿	// The target marker.
	private var target : Vector3;
	public var MoveSpeed: float = 10;
	private var StartMoveSpeed: float; //Für das stoppen um in Urzustand zurückzukehren;
	private var Cake : Vector3;
	private var Home : Vector3;
	private var GetCakeFkt : GetCakeFunction;
	private var GameSystemObj : GameObject;
	private var GameSystemFkt : GameSystem;
	private var HealthPointsFkt : HealthPointsMovingAnt;
	private var LastChange : float = 100; //Damit Geschwindigkeit nur einmal abgezogen wird.
	public var MinSpeed : float = 4;
	private var HomeObj : GameObject;
	
	//Verschiedene Stadien Sprites für Schaden
	public var MovingAntRightDamageState1 : Sprite;
	public var MovingAntRightDamageState2 : Sprite;
	public var MovingAntRightDamageState3 : Sprite;
	public var MovingAntRightDamageStateNum : int = 1;
	
function Start(){
	HomeObj = GameObject.Find("HomeRight");	
	Cake = Vector3(0,-20,0); //Ziel des Kuchens
	Home = Vector3(HomeObj.transform.position.x,-20,0); //Ziel des Hauses
	target = Cake;//Läuft zu beginn zum Kuchen
	GetCakeFkt = GetComponentInChildren(GetCakeFunction);
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	StartMoveSpeed=MoveSpeed;
	HealthPointsFkt=GetComponentInParent(HealthPointsMovingAnt);
}
			
function Update () {
		// The step size is equal to speed times frame time.
		var step = MoveSpeed * Time.smoothDeltaTime;
		
		// Move our position a step closer to the target.
		if(transform.position == Cake){
			target=Home;
			transform.localScale.x*=-1;
			GetCakeFkt.GotCake=true;
		}
		else if(transform.position == Home){
			target=Cake;
			transform.localScale.x*=-1;
			if(GetCakeFkt.GotCake==true){
				GameSystemFkt.numberOfCakeRight+=1;//Kuchen wird abgelegt
			}
			GetCakeFkt.GotCake=false;
		}
		
/*		//Bei Treffer FUNKTIONIRT NOCH NICHT
		if(step<0.02){
			MoveSpeed=StartMoveSpeed;
		}*/
		transform.position = Vector3.MoveTowards(transform.position, target, step);
		SpeedAndDamage();//Ant get slower if it got less healthpoints
		
		damageState();
	}
	
function SpeedAndDamage(){
	if(LastChange!=HealthPointsFkt.movingAntHealthPoints){
		MoveSpeed=StartMoveSpeed*(HealthPointsFkt.movingAntHealthPoints/100);
		LastChange=HealthPointsFkt.movingAntHealthPoints;
			if(MoveSpeed<=MinSpeed){
				MoveSpeed=MinSpeed;
			}
		Debug.Log("SPE:"+MoveSpeed);
	}
}

function damageState(){
	switch(MovingAntRightDamageStateNum){
		case 1:
			GetComponent(SpriteRenderer).sprite = MovingAntRightDamageState1;
		break;
		
		case 2:
			GetComponent(SpriteRenderer).sprite = MovingAntRightDamageState2;
		break;
		
		case 3:
			GetComponent(SpriteRenderer).sprite = MovingAntRightDamageState3;
		break;
	}
	if(HealthPointsFkt.movingAntHealthPoints>=66){
		MovingAntRightDamageStateNum=1;
	}
	else if(HealthPointsFkt.movingAntHealthPoints>=33 && HealthPointsFkt.movingAntHealthPoints<66){
		MovingAntRightDamageStateNum=2;
	}
	else{
		MovingAntRightDamageStateNum=3;
	}
	
	if(HealthPointsFkt.movingAntHealthPoints<=0){
		GetComponent(SpriteRenderer).color.a = 0;
	}
}