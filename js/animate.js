var animate1 = document.getElementById('animate1');
var animate2 = document.getElementById('animate2');
var animate3 = document.getElementById('animate3');
var animate4 = document.getElementById('animate4');


animate1.addEventListener("mouseenter",
  function(event){
    animate1.classList.add("animated", "bounce");
  }
);

animate1.addEventListener("mouseleave",
  function(event){
    animate1.classList.remove("animated", "bounce");
  }
);

animate2.addEventListener("mouseenter",
  function(event){
    animate2.classList.add("animated", "bounce");
  }
);

animate2.addEventListener("mouseleave",
  function(event){
    animate2.classList.remove("animated", "bounce");
  }
);

animate3.addEventListener("mouseenter",
  function(event){
    animate3.classList.add("animated", "bounce");
  }
);

animate3.addEventListener("mouseleave",
  function(event){
    animate3.classList.remove("animated", "bounce");
  }
);

animate4.addEventListener("mouseenter",
  function(event){
    animate4.classList.add("animated", "bounce");
  }
);

animate4.addEventListener("mouseleave",
  function(event){
    animate4.classList.remove("animated", "bounce");
  }
);
