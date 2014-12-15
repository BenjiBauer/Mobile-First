	// The target marker.
	private var target : Vector3;
	public var MoveSpeed: float = 10;
	private var StartMoveSpeed: float; //Für das stoppen um in Urzustand zurückzukehren;
	private var Cake : Vector3;
	private var Home : Vector3;
	private var GetCakeFkt : GetCakeFunction;
	private var GameSystemObj : GameObject;
	private var GameSystemFkt : GameSystem;
	
function Start(){
	Cake = Vector3(0,-24.2,0); //Ziel des Kuchens
	Home = Vector3(240,-24.2,0); //Ziel des Hauses
	target = Cake;//Läuft zu beginn zum Kuchen
	GetCakeFkt = GetComponentInChildren(GetCakeFunction);
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);
	StartMoveSpeed=MoveSpeed;
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
			GameSystemFkt.numberOfCakeRight+=1;//Kuchen wird abgelegt
		}
		
/*		//Bei Treffer FUNKTIONIRT NOCH NICHT
		if(step<0.02){
			MoveSpeed=StartMoveSpeed;
		}*/
		transform.position = Vector3.MoveTowards(transform.position, target, step);
		
	}