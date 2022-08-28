const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding=20;
var scrollAmount=0;

showMovieData();

function sliderScrollLeft(){
  sliders.scrollTo({
    top:0,
    left:(scrollAmount -= scrollPerClick),
    behavior: "smooth"
  });
  if(scrollAmount <0){
    scrollAmount=0
  }
}

function slideScrollRight(){
  if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth){
    sliders.scrollTo({
      top:0,
      left:(scrollAmount += scrollPerClick),
      behavior:"smooth"
    })
  }
}



async function showMovieData(){
  const api_key = "1268590fd0b518ebdddbeb4a3e70199c";
  var result = await axios.get(
    // "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&sort_by=popularity.desc"

    "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&with_people=10&sort_by=vote_average.desc"
      

  );
  result=result.data.results;
  result.map(function(cur,index){
    sliders.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
    )
  })
  scrollPerClick = 400;
}