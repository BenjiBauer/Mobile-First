#pragma strict
private var healthBarTrans : Transform;
private var HPfkt : HealthPointsMovingAnt;
private var StartsizeBar : float; //Originalgröße der Bar

function Awake(){
	HPfkt = GetComponentInParent(HealthPointsMovingAnt);
	healthBarTrans = GetComponent(Transform);
}

function Start () {

StartsizeBar=healthBarTrans.localScale.x;

}

function Update () {

healthBarTrans.localScale.x=(HPfkt.movingAntHealthPoints*(StartsizeBar/100));//Powerbar wird mit Punktestand kleiner

	if(HPfkt.movingAntHealthPoints<=0){
		gameObject.active=false;
	}


}