// BACKSTRETCH SETTINGS

// $.backstretch("images/beach.jpg");


$("#container").backstretch([
    [
      { width: 760, url: "images/orca1.jpg" },
      { width: 759, url: "images/orca1_small.jpg" }
    ],
    [
      { width: 760, url: "images/orca2.jpg" },
      { width: 759, url: "images/orca2_small.jpg" }
    ],
    [
      { width: 760, url: "images/orca3.jpg" },
      { width: 759, url: "images/orca3_small.jpg" }
    ],
    [
      { width: 760, url: "images/orca4.jpg" },
      { width: 759, url: "images/orca4_small.jpg" }
    ]
  ],
  {duration: 4000, transition: "fade", transitionDuration: 1000, animateFirst: false}

);
