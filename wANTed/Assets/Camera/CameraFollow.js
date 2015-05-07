#pragma strict

private var CamTrans : Transform;
private var CamCamera : Camera;

public  var OffsetCameraX : float;

private var bullet1 : GameObject;
private var bullet2 : GameObject;
private var bullet3 : GameObject;
private var bullet4 : GameObject;
private var bullet5 : GameObject;
private var bullet6 : GameObject;
private var bullet1Fkt : NewBulletShoot;
private var bullet2Fkt : NewBulletShoot;
private var bullet3Fkt : NewBulletShoot;
private var bullet4Fkt : NewBulletShoot;
private var bullet5Fkt : NewBulletShoot;
private var bullet6Fkt : NewBulletShoot;
private var bullet1Trans : Transform;
private var bullet2Trans : Transform;
private var bullet3Trans : Transform;
private var bullet4Trans : Transform;
private var bullet5Trans : Transform;
private var bullet6Trans : Transform;

private var GameSystemObj : GameObject;
private var GameSystemFkt : GameSystem;

//Speed of CamaraMove
public var CameraMovetoPlayer = 10;
public var CameraMoveAwayPlayer = 1;
public var CameraZoomtoPlayer = 2;
public var CameraZoomAwayPlayer = 1;

public var ZoomSizePlayer=150;
public var ZoomSizeBullet=180;

public var pinchOrZoom : boolean = false;

public var bulletPos : Vector3;

//Sound für Uhrende
public var timeSoundplaying : boolean =false;
public var timeSound : AudioClip;


function Awake(){
	bullet1 = GameObject.Find("Shooter1");
	bullet2 = GameObject.Find("Shooter2");
	bullet3 = GameObject.Find("Shooter3");
	bullet4 = GameObject.Find("Shooter4");
	bullet5 = GameObject.Find("Shooter5");
	bullet6 = GameObject.Find("Shooter6");

	bullet1Fkt = bullet1.GetComponent(NewBulletShoot);
	bullet2Fkt = bullet2.GetComponent(NewBulletShoot);
	bullet3Fkt = bullet3.GetComponent(NewBulletShoot);
	bullet4Fkt = bullet4.GetComponent(NewBulletShoot);
	bullet5Fkt = bullet5.GetComponent(NewBulletShoot);
	bullet6Fkt = bullet6.GetComponent(NewBulletShoot);
	
	bullet1Trans = bullet1.GetComponent(Transform);
	bullet2Trans = bullet2.GetComponent(Transform);
	bullet3Trans = bullet3.GetComponent(Transform);
	bullet4Trans = bullet4.GetComponent(Transform);
	bullet5Trans = bullet5.GetComponent(Transform);
	bullet6Trans = bullet6.GetComponent(Transform);
	
	GameSystemObj=GameObject.Find("GameSystem");
	GameSystemFkt=GameSystemObj.GetComponent(GameSystem);	
}

function Start () {
CamTrans = gameObject.GetComponent(Transform);
CamCamera = gameObject.GetComponent(Camera);

//bullet1Rigid = bullet1Obj.GetComponent(Rigidbody2D);

}

function Update () {

	if(bullet1.active==true&&GameSystemFkt.bulletIsFlying==false){
		//CamTrans.position.x=bullet1Trans.position.x+OffsetCameraX;
		if(pinchOrZoom==false &&GameSystemFkt.bulletIsLanded==false){
			CamTrans.position = Vector3.MoveTowards(CamTrans.position,bullet1Trans.position, CameraMovetoPlayer*Time.smoothDeltaTime);
			CamTrans.position.z=-100;
			CamCamera.orthographicSize=Mathf.MoveTowards(CamCamera.orthographicSize,ZoomSizePlayer,CameraZoomtoPlayer*Time.smoothDeltaTime);
		}
	}
	else if(bullet2.active==true&&GameSystemFkt.bulletIsFlying==false){
		//CamTrans.position.x=bullet2Trans.position.x+OffsetCameraX;
		if(pinchOrZoom==false&&GameSystemFkt.bulletIsLanded==false){
			CamTrans.position = Vector3.MoveTowards(CamTrans.position,bullet2Trans.position, CameraMovetoPlayer*Time.smoothDeltaTime);
			CamTrans.position.z=-100;
			CamCamera.orthographicSize=Mathf.MoveTowards(CamCamera.orthographicSize,ZoomSizePlayer,CameraZoomtoPlayer*Time.smoothDeltaTime);
		}
	}
	else if(bullet3.active==true&&GameSystemFkt.bulletIsFlying==false){
		if(pinchOrZoom==false&&GameSystemFkt.bulletIsLanded==false){
			CamTrans.position = Vector3.MoveTowards(CamTrans.position,bullet3Trans.position, CameraMovetoPlayer*Time.smoothDeltaTime);
			CamTrans.position.z=-100;
			CamCamera.orthographicSize=Mathf.MoveTowards(CamCamera.orthographicSize,ZoomSizePlayer,CameraZoomtoPlayer*Time.smoothDeltaTime);
		}
	}
	else if(bullet4.active==true&&GameSystemFkt.bulletIsFlying==false){
		if(pinchOrZoom==false&&GameSystemFkt.bulletIsLanded==false){
			CamTrans.position = Vector3.MoveTowards(CamTrans.position,bullet4Trans.position, CameraMovetoPlayer*Time.smoothDeltaTime);
			CamTrans.position.z=-100;
			CamCamera.orthographicSize=Mathf.MoveTowards(CamCamera.orthographicSize,ZoomSizePlayer,CameraZoomtoPlayer*Time.smoothDeltaTime);
		}
	}
	else if(bullet5.active==true&&GameSystemFkt.bulletIsFlying==false){
		if(pinchOrZoom==false&&GameSystemFkt.bulletIsLanded==false){
			CamTrans.position = Vector3.MoveTowards(CamTrans.position,bullet5Trans.position, CameraMovetoPlayer*Time.smoothDeltaTime);
			CamTrans.position.z=-100;
			CamCamera.orthographicSize=Mathf.MoveTowards(CamCamera.orthographicSize,ZoomSizePlayer,CameraZoomtoPlayer*Time.smoothDeltaTime);
		}
	}
	else if(bullet6.active==true&&GameSystemFkt.bulletIsFlying==false){
		if(pinchOrZoom==false&&GameSystemFkt.bulletIsLanded==false){
			CamTrans.position = Vector3.MoveTowards(CamTrans.position,bullet6Trans.position, CameraMovetoPlayer*Time.smoothDeltaTime);
			CamTrans.position.z=-100;
			CamCamera.orthographicSize=Mathf.MoveTowards(CamCamera.orthographicSize,ZoomSizePlayer,CameraZoomtoPlayer*Time.smoothDeltaTime);
		}
	}
	if(GameSystemFkt.bulletIsFlying==true){
		CamCamera.orthographicSize=Mathf.MoveTowards(CamCamera.orthographicSize,ZoomSizeBullet,CameraZoomAwayPlayer*Time.smoothDeltaTime);
		CamTrans.position = Vector3.MoveTowards(CamTrans.position,bulletPos, CameraMoveAwayPlayer*Time.deltaTime);
		//CamTrans.position = bulletPos;
		pinchOrZoom=false; //Zurücksetzten, da sonst die Kamera nicht zur nächsten geht
	}
	if(GameSystemFkt.TimeToPlay<=0){//Zurücksetzten, falls nicht gespielt wird.
		pinchOrZoom=false; 
	}
	
	if(GameSystemFkt.TimeToPlay<=5){
		if(timeSoundplaying==false){
			GetComponent.<AudioSource>().PlayOneShot(timeSound);
			timeSoundplaying=true;
		}	
	}
	if(GameSystemFkt.bulletIsFlying==true){
		GetComponent.<AudioSource>().Stop();
	}

}