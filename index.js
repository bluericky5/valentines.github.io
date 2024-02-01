function showGifs() {
    var contentContainer = document.getElementById("contentContainer");
    var displayText = document.getElementById("displayText");
  
    contentContainer.classList.add("hidden");
    displayText.classList.add("hidden");
  
    var gifs = [
        "https://i.pinimg.com/originals/ff/d8/a6/ffd8a6206254f3f0ff274f97e68275e2.gif",
        "https://media.tenor.com/k0bOPSONT0UAAAAi/mimibubu.gif",
        "https://media1.tenor.com/m/PK5735GnEEAAAAAC/mimi-bubu.gif",
        "https://media1.tenor.com/m/KfLtw05PJ7UAAAAC/sex-kiss.gif"
    ];
  
    var index = 0;
  
    function transitionGif() {
      document.body.style.backgroundImage = "url('" + gifs[index] + "')";
      document.body.style.backgroundSize = "auto"; // Set to auto to use the natural size of the image
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.overflow = "hidden"; // Optional to hide scrollbars
  
      index = (index + 1) % gifs.length;
  
      setTimeout(transitionGif, 4000); // 4-second delay per gif
    }
  
    transitionGif();
  }


  function showGifsbad() {
    var contentContainer = document.getElementById("contentContainer");
    var displayText = document.getElementById("displayText");
  
    contentContainer.classList.add("hidden");
    displayText.classList.add("hidden");
  
    var gifs = [
        "https://media1.tenor.com/m/g1_tS_VU14YAAAAC/tears-heartbreak.gif",
    ];
  
    var index = 0;
  
    function transitionGif() {
      document.body.style.backgroundImage = "url('" + gifs[index] + "')";
      document.body.style.backgroundSize = "auto"; 
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.overflow = "hidden"; 
  
      index = (index + 1) % gifs.length;
  
      setTimeout(transitionGif, 4000); 
    }
  
    transitionGif();
  }
  

