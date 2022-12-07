class PhotoViewer {
  init() {
    const rootElm = document.getElementById("photoViewer"); // --- [1]
    const frameElm = rootElm.querySelector(".frame"); // --- [2]
    const frameInElm = document.createElement("div");
    frameInElm.setAttribute("class", "frameIn");
    frameElm.append(frameInElm);
    const textElm = rootElm.querySelector(".fileNameArea");
    const ul = document.createElement("ul");
    textElm.append(ul);
    // const image = "https://fakeimg.pl/250x150/81DAF5"; // --- [3]
    const text = document.getElementById("imagesCount");
    const countText = text.querySelector("span");
    const images = [
      "https://fakeimg.pl/250x150/81DAF5",
      "https://fakeimg.pl/250x150/F781F3",
      "https://fakeimg.pl/250x150/81F7D8",
    ];

    for (let i = 0; i < images.length; i++) {
      // display images
      let img = document.createElement("img");
      let div = document.createElement("div");
      img.setAttribute("src", images[i]);
      div.append(img);
      frameInElm.append(div);
      //display text
      let li = document.createElement("li");
      let rink = document.createElement("a");
      rink.setAttribute("href", images[i]);
      rink.setAttribute("target", "_blank");
      rink.innerText = images[i];
      li.append(rink);
      ul.append(li);
    }

    // Moving Images automatically
    const slider = frameInElm.querySelectorAll("div");
    let i = 0;
    let j = 1;
    slider[i].style.display = "block";
    countText.innerHTML = j;
    console.log(countText);
    setInterval(() => {
      slider[i].style.display = "none";
      i++;
      j++;
      countText.innerHTML = j;
      if (i >= slider.length) {
        if (j > slider.length) {
          j = 1;
          countText.innerHTML = j;
        }
        i = 0;
      }

      slider[i].style.display = "block";
    }, 5000);

    // next
    const next = rootElm.querySelector(".nextButton");
    next.addEventListener("click", (event) => {
      event.preventDefault();
      slider[i].style.display = "none";
      i++;
      j++;
      countText.innerHTML = j;
      if (i >= slider.length) {
        if (j > slider.length) {
          j = 1;
          countText.innerHTML = j;
        }
        i = 0;
      }
      slider[i].style.display = "block";
    });

    // prev
    const prev = rootElm.querySelector(".prevButton");
    prev.addEventListener("click", (event) => {
      event.preventDefault();
      slider[i].style.display = "none";
      i--;
      j--;
      countText.innerHTML = j;
      if (i < 0) {
        if (j <= 0) {
          j = 1;
          countText.innerHTML = j;
        }
        i = 0;
      }
      slider[i].style.display = "block";
    });
  }
}

new PhotoViewer().init(); // --- [5]
