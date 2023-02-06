score = 0;
function uptades_score(){
  score=score+1;
  document.getElementById("score").innerHTML="score:"+score; 
};
function save_score(){
    localStorage.setItem("score",score);
}
function next_page(){
    window.location="https://www.youtube.com/";
}