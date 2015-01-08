	// The target marker.
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
	
function Start(){
	Cake = Vector3(0,-24.2,0); //Ziel des Kuchens
	Home = Vector3(-240,-24.2,0); //Ziel des Hauses
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
			GetCakeFkt.GotCake=false;
			GameSystemFkt.numberOfCakeLeft+=1;//Kuchen wird abgelegt
		}
		
/*		//Bei Treffer FUNKTIONIRT NOCH NICHT
		if(step<0.02){
			MoveSpeed=StartMoveSpeed;
		}*/
		transform.position = Vector3.MoveTowards(transform.position, target, step);
		SpeedAndDamage();//Ant get slower if it got less healthpoints
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