﻿#pragma strict
private var powerbarTrans : Transform;
private var antHPfkt : antHP;
private var antTrans : Transform;

function Awake(){

	antHPfkt = GetComponentInParent(antHP);
	antTrans = GetComponentInParent(Transform);
	powerbarTrans = GetComponent(Transform);
	

}

function Start () {



}

function Update () {

powerbarTrans.localScale.x=-(antHPfkt.HPvalueAnt1/1000);//Powerbar wird mit Punktestand kleiner
powerbarTrans.rotation.z = -powerbarTrans.rotation.z-antTrans.rotation.z;//Powerbar bleibt gerade

	if(antHPfkt.HPvalueAnt1<=0){
		gameObject.active=false;
	}


}
