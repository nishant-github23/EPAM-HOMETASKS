const key = "AIzaSyDzqvJQzZqkuYTp9JB-w3psvg1S6Z6FlkM";
var currentPage = 1;
const videosPerPageCount = 8;
let  videosData=[];

const backButton=document.createElement('button');
const nextButton= document.createElement('button');
const pageChangeButtons=document.getElementById("pagination");
const contentContainer = document.getElementById("content-container");

const getSearchVideos = (e) => {
  e.preventDefault();
  const searchString = document.querySelector(`#search-videos`).value;
    if (searchString != null) fetchApi(searchString);
  };

const fetchApi = async (searchText) => {
    try{
      currentPage=1;
      const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=20&q=${searchText}`
  );
      const data = await response.json();
      videosData = data.items;
      setVideosOnPage(currentPage);
      pagination();
      btnVisibility();
     }
    catch (error) {
       alert(error.message);
    }
  };

  const setVideosOnPage = (currentPage) => {
    const currentItems = videosData.slice(
      (currentPage -1) * videosPerPageCount,
      (currentPage - 1) * videosPerPageCount + videosPerPageCount );
    contentContainer.innerHTML=" ";
    currentItems.forEach((item) => {
    contentContainer.appendChild(videoBox(item));}); 
  };

 function videoBox(item){
  const videobox = document.createElement("a");
  videobox.href=`https://www.youtube.com/watch?v=${item.id.videoId}`;
  videobox.classList.add("video-box");
  videobox.target="_blank";
  const videoImage =document.createElement("img")
  videoImage.src=item.snippet.thumbnails.high.url;
  const videoDetails =document.createElement("div")
  videoDetails.classList.add("video-details");
  videoDetailsInnerBox(videoDetails, item);
  videobox.append(videoImage, videoDetails);
  return videobox;
}

const videoDetailsInnerBox = (videoDetails, item) => {
  const videoTitle = document.createElement("div")
  videoTitle.classList.add("video-title")
  videoTitle.innerText=item.snippet.title.slice(0,30);
  const videoContent =document.createElement("div")
  videoContent.classList.add("video-content")
  videoContent.innerText= item.snippet.description||"sometext";
  const videoAuthor =document.createElement("div");
  videoAuthor.classList.add("video-author");
  videoAuthor.innerHTML = `${item.snippet.channelTitle}   ${
    +Math.random().toFixed(0) ? '':"&nbsp;"}`;
  videoDetails.append(videoTitle, videoContent,videoAuthor);
};




const pagination=()=>{
  backButton.classList.add("disp-flex","center");
  backButton.addEventListener("click",prevPage);
  backButton.setAttribute('id',"btnPrev");
  backButton.innerText="prev";
  nextButton.classList.add("disp-flex","center");
  nextButton.addEventListener("click",nextPage);
  nextButton.setAttribute('id',"btnNext");
  nextButton.innerText="next";
  pageChangeButtons.append(backButton,nextButton);
}




function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    setVideosOnPage(currentPage);
    btnVisibility();
  }
}

function nextPage() {
  if (currentPage<Math.ceil(videosData.length / videosPerPageCount)) {
     currentPage++;
    setVideosOnPage(currentPage);
    btnVisibility();
  }
} 

btnVisibility=()=>{
  if(currentPage==1)   backButton.classList.add("btnDisable");  
  else backButton.classList.remove("btnDisable");


 if(currentPage==Math.ceil(videosData.length / videosPerPageCount)) 
    nextButton.classList.add("btnDisable");  
  else
    nextButton.classList.remove("btnDisable");
}
