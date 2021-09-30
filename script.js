const videoNameInput = document.getElementById("videoName");
const link  = document.getElementById("link");
const result = document.getElementById("result");
const enterBtn = document.querySelector("#enter");
const clipBoard = document.querySelector("#copy")


const apendToDOM = function(answer){
    result.value = answer

}
const splitLink = function(link){
    const newLink = link.split("&")[0];
    return newLink;
}




enterBtn.addEventListener("click",function(){
    if(link.value ==""||videoNameInput.value == ""){
        alert("please fill in the details")
        return 

    }
    else{
        let  rawLink = link.value;
        let  formattedLink = splitLink(rawLink);
        let  videoName = videoNameInput.value;
        let formattedCommand = `ffmpeg -i ${formattedLink} -c copy ${videoName}.mkv`
    
        apendToDOM(formattedCommand)
        link.value = ""

    }
   
   
   
    
})

function copyToCliboard() {
    document.querySelector("#result").select();
    document.execCommand('copy');
    alert("command copied ")
  }
clipBoard.addEventListener("click",copyToCliboard)