#pragma strict
private var healthBarTrans : Transform;
private var HPfkt : HealthPoints;
private var StartsizeBar : float; //Originalgröße der Bar

function Awake(){
	HPfkt = GetComponentInParent(HealthPoints);
	healthBarTrans = GetComponent(Transform);
}

function Start () {

StartsizeBar=healthBarTrans.localScale.x;

}

function Update () {

healthBarTrans.localScale.x=(HPfkt.antHealthPoints*(StartsizeBar/100));//Powerbar wird mit Punktestand kleiner

	if(HPfkt.antHealthPoints<=0){
		gameObject.active=false;
	}


}
