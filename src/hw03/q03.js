document.addEventListener("DOMContentLoaded", function() {
    
    var link = document.querySelector("#root a");
    
    link.href = "https://keybr.com";
  });
document.addEventListener("DOMContentLoaded", function() {
    
    var rootDiv = document.getElementById("root");
    

    var ul = document.createElement("ul");
  
    const buyList = [
      "books",
      "bread",
      "eraser",
      "earphones",
      "collection-cards",
      "hdmi",
      "vga",
      "motherboard",
      "university-books",
    ];
  
    buyList.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  
    rootDiv.appendChild(ul);
  });
  