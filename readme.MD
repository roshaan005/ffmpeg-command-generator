const videoNameInput = document.getElementById("videoName");
const link  = document.getElementById("link");
const result = document.getElementById("result");
const enterBtn = document.querySelector(".enter");


const apendToDOM = function(answer){
    result.textContent = answer

}
const splitLink = function(link){
    const newLink = link.split("&")[0];
    console.log(newLink)
    return newLink;
}




enterBtn.addEventListener("click",function(){
    let  rawLink = link.value;
    let  formattedLink = splitLink(rawLink);
    let  videoName = videoNameInput.value;
    let formattedCommand = `ffmpeg -i ${formattedLink} -c copy ${videoName}.mkv`
    apendToDOM(formattedCommand)
    
})


