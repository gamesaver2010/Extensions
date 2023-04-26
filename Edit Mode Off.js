javascript:(function() {
  var all_links = document.getElementsByTagName("a");
  for (let i = 0; i < all_links.length; i++) {
    all_links[i].setAttribute("href", "#");
  }
  document.body.contentEditable = false;
  alert("Edit mode is now off");
})();
