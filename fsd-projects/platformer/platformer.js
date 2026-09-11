$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(246, 155, 231)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 610, 300, 130, "lightGreen");
    createPlatform(0, 441, 200, 25, "lightGreen");
    createPlatform(1200, 441, 200, 25, "lightGreen");
    createPlatform(500, 441, 400, 25, "lightGreen");
    createPlatform(300, 480, 100, 25, "lightGreen");
    createPlatform(900, 610, 300, 130, "lightGreen");
    createPlatform(1000, 480, 100, 25, "lightGreen");
    createPlatform(500, 220, 400, 25, "lightGreen");
    createPlatform(300, 310, 100, 25, "lightGreen");
    createPlatform(1000, 310, 100, 25, "lightGreen");


    // TODO 3 - Create Collectables
    createCollectable("blue", 330, 410 );
    createCollectable("yellow", 1030, 410 );
    createCollectable("aqua", 680, 690 );
    createCollectable("green", 1300, 390 );
    createCollectable("orange", 680, 170);



    
    // TODO 4 - Create Cannons
    createCannon("top", 759, 1809, 50, 50, );
    createCannon("left", 500, 1809, 50, 50, );
    createCannon("right", 350, 1809, 50, 50, );

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
