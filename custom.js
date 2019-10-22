"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    var modalBtns = document.querySelectorAll('.modal-btn');
    var modalBgs = document.querySelectorAll('.modal-bg');
    var modalCloses = document.querySelectorAll('.modal-close');

    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click',function(){
        let targetModal = document.getElementById(this.dataset.target);
        targetModal.classList.add('bg-active');
      });
    }

    for (let modalClose of modalCloses) {
      modalClose.addEventListener('click',function(){
        for (let modalBg of modalBgs) {
          modalBg.classList.remove('bg-active')
        }
      });
    }

    let addBlogBtn = document.getElementById("add-blog-btn");
    addBlogBtn.addEventListener("click", addBlogPost);

    let closeBlogAdd = document.querySelector('.modal-close')

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