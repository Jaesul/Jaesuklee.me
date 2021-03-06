"use strict";
(function() {

  window.addEventListener("load", init);

  let options = {
    rootMargin: "-450px 0px 0px 0px"
  }

  let optionsTop = {
    rootMargin: "-100% 0px 0px 0px"
  }

  function init() {
    let observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          nav.classList.add('nav-scrolled');
        } else {
          nav.classList.remove('nav-scrolled');
          let navBtns = document.querySelectorAll('nav a');
          for (let btn of navBtns) {
            btn.classList.remove('active');
          }
        } 
      });
    }, 
    options);

    let carousel = document.querySelector('.img-slider');
    let carosuelImgs = document.querySelectorAll('.img-slider img');

    let prevBtn = document.getElementById('prev');
    let nextBtn = document.getElementById('next');

    let counter = 1;
    let size = 30;
    console.log(size);

    carousel.style.transform = 'translateX(-' + (counter * size) +'vw)';

    nextBtn.addEventListener('click', ()=>{
      if (counter >= carosuelImgs.length - 1) return;
      carousel.style.transition = 'transform 0.3s ease-in-out';
      counter++;
      carousel.style.transform = 'translateX(-' + (counter * size) +'vw)';
    })

    prevBtn.addEventListener('click', ()=> {
      if (counter <= 0) return;
      carousel.style.transition = 'transform 0.3s ease-in-out';
      counter--;
      carousel.style.transform = 'translateX(-' + (counter * size) +'vw)';
    })

    carousel.addEventListener('transitionend', () => {
      if(carosuelImgs[counter].id === 'first-clone') {
        counter = 1;
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(-' + (counter * size) +'vw)';
      } else if (carosuelImgs[counter].id === 'last-clone') {
        counter = carosuelImgs.length - 2;
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(-' + (counter * size) +'vw)';
      }
    })

    let navBtns = document.querySelectorAll('nav a');
    for (let btn of navBtns) {
      btn.addEventListener('click', activeATag)
    }

    let observer2 = new IntersectionObserver(
      function(entries) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            console.log('working');
          } else {
            console.log('nav-scrolled');
          } 
        });
      }, 
      optionsTop);
    
    var homepage = document.querySelector(".home");
    if(homepage) {
      observer.observe(homepage);
    }

    var body = document.querySelector('body');
    var modalBtns = document.querySelectorAll('.modal-btn');
    var modalBgs = document.querySelectorAll('.modal-bg');
    var modalCloses = document.querySelectorAll('.modal-close');
    var nav = document.querySelector('nav');

    if (modalBgs.length > 0) {
      for (let modalBtn of modalBtns) {
        modalBtn.addEventListener('click',function(){
          let targetModal = document.getElementById(this.dataset.target);
          targetModal.classList.add('bg-active');
          body.classList.toggle('scroll-lock');
          nav.querySelector('ul').classList.toggle('scroll-lock');
        });
      }
  
      for (let modalClose of modalCloses) {
        modalClose.addEventListener('click',function() {
          setTimeout(() => {
            body.classList.toggle('scroll-lock');
            nav.querySelector('ul').classList.toggle('scroll-lock');
          }, 400);
          for (let modalBg of modalBgs) {
            modalBg.classList.remove('bg-active')
          }
        });
      }
    }
  }

  function activeATag() {
    let navBtns = document.querySelectorAll('nav a');
    navBtns.forEach(element => element.classList.remove('active'));
    this.classList.add('active');
  }

  function addBlogPost() {
    let modalBg = document.querySelector(".modal-bg")
    modalBg.classList.add("bg-active")
    let modalPost = document.getElementById("post-new-blog")  
    modalPost.addEventListener("click", function() {

      var src = document.getElementById("new-img-src").value;
      var title = document.getElementById("new-title-text").value;
      var content = document.getElementById("new-content-text").value;

      if (src === "" || title === "" || content === "") {
        var modal = document.querySelector("#add-blog-modal-window"); 
        var errorbox = document.createElement("p");
        var errorMessage = document.createTextNode("Must fill in all fields");
        errorbox.appendChild(errorMessage);
        modal.appendChild(errorbox);
        return
      }

      var nodeSection = document.createElement("section");

      var nodeBlogContent = document.createElement("div");
      nodeBlogContent.classList.add("food-content-container");

      var nodeBlogImg = document.createElement("img");
      nodeBlogImg.src = src
      nodeBlogContent.appendChild(nodeBlogImg);

      var nodeSpace = document.createElement("div");
      nodeSpace.classList.add("spacing-50px");
      nodeBlogContent.appendChild(nodeSpace);

      var nodeBlogHeader = document.createElement("h2");
      var headerText = document.createTextNode(title);
      nodeBlogHeader.appendChild(headerText);
      nodeBlogContent.appendChild(nodeBlogHeader);

      var nodeBlogText = document.createElement("p");
      var mainText = document.createTextNode(content);
      nodeBlogText.appendChild(mainText);
      nodeBlogContent.appendChild(nodeBlogText);
 
      nodeSection.appendChild(nodeBlogContent);

      document.querySelector("main").appendChild(nodeSection); 
      modalBg.classList.remove("bg-active");

      document.getElementById("new-img-src").value = "";
      document.getElementById("new-title-text").value = "";
     document.getElementById("new-content-text").value = "";
    });
  }

  function blogContent() {
    var src = document.getElementById("new-img-src").value;
    var title = document.getElementById("new-title-text").value;
    var content = document.getElementById("new-content-text").value;
  }

  function post() {
    var text = document.getElementById("text").value;
    alert("the current value is:" + text)
    let header = document.querySelector("header");
  }

    /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();