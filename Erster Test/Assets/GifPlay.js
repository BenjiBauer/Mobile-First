#pragma strict

 public var pictureArray:Texture[];
 private var picture:Texture; 
 private var delay:int = 0;
 private var count:int = 0;
 function OnGUI () 
 {  
    delay++;     
    if(delay % 20 == 0)
    {
        count++;
        if(count == pictureArray.Length)
            count = 0;
        picture = pictureArray[count];           
        delay = 0;           
    }       
 }