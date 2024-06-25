const videoelement = document.getElementsByClassName('video')[0];
const button = document.getElementsByClassName('button')[0];

async function selectmediastream(){
    try{
        const mediastream= await navigator.mediaDevices.getDisplayMedia();
        videoelement.srcObject= mediastream;
        videoelement.onloadedmetadata=() =>{
            videoelement.play();

        }
    }
    catch(error){
        //catch error here
        console.log('error here',error);
    }
}
button.addEventListener('click',async ()=>{
    button.disabled=true;
    //start picture in picture 
    await videoelement.requestPictureInPicture();
    //reset button
    button.disabled= false;
});
selectmediastream();