// //*******************************

// Rooms of my Dream Home
// by Dana Capistrano

//********************//

// Array Images
var images = [];

// function variable
var drawFunction;

//Line 1 text offset
var gTextOffset = 65; //change number here to adjust space from thebottom
//Line 2 text offset
var hTextOffset = 40;

//furniture img + preload
function preload() {
    images[0] = loadImage('assets/landing.png');
    images[1] = loadImage('assets/living.png');
    images[2] = loadImage('assets/dining.png');
    images[3] = loadImage('assets/kitchen.png');
    images[4] = loadImage('assets/bedroom.png');
    images[5] = loadImage('assets/bathroom.png');
    images[6] = loadImage('assets/arcade.png');
    images[7] = loadImage('assets/garden.png');

}
// Setup code goes here
function setup() {
    createCanvas(windowWidth, windowHeight);


    //centering the text and images
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(24);

    //splash screen image
    drawFunction = drawSplash;
}

// Draw code goes here
function draw() {
    background(0);
    drawFunction();
}

//Splash Screen
drawSplash = function() {
    background('#4f5f17');
    image(images[0], width / 2, height / 2);

    fill(255);
    text("Welcome to my little home. Please come in :+)", width / 2, height - gTextOffset);
    text("Press I for Instructions", width / 2, height - hTextOffset);
}

//Instructions 
drawInstructions = function() {
    background ('#4f5f17');
    fill(255);
    text("Let me show you around! On each page, follow the instruction to go from room to room.", width / 2, height - gTextOffset);
    text(" Start by pressing L to go to the Living room!", width / 2, height - hTextOffset);
}

//Living Room 
drawLiving = function() {
    background ('#ccc1cf')
    image(images[1], width / 2, height / 2);
    fill(255);
    text("Welcome to the Living Room! Get cozy. Let me know if you need anything", width / 2, height - gTextOffset);
    text("Press D for the dining room or press B for the bathroom", width / 2, height - hTextOffset);

}

//Dining Room
drawDining = function() {
    background ('#204eec')
    image(images[2], width / 2, height / 2);
    fill(255);
    text("Welcome to the Dining Room ! Can I get you some water?", width / 2, height - gTextOffset);
    text("Press K for the Kitchen or Press A for Arcade Room", width / 2, height - hTextOffset);

}

//Kitchen 
drawKitchen = function() {
    background ('#ede7db')
    image(images[3], width / 2, height / 2);
    fill('#4f5f17');
    text("Welcome to the Kitchen! Would you like a snack?", width / 2, height - gTextOffset);
    text("Press G for the garden or E for the Bedroom", width / 2, height - hTextOffset);

}

//Bedroom
drawBedroom = function() {
    background ('#efcaa6')
    image(images[4], width / 2, height / 2);
    fill('#4f5f17');
    text("Welcome to my bedroom. Naps are always welcome.", width / 2, height - gTextOffset);
    text("Press L for living Room or G for the Garden", width / 2, height - hTextOffset);
}

//Bathroom
drawBathroom = function() {
    background ('#ac83ca')
    image(images[5], width / 2, height / 2);
    fill(255);
    text("This is the bathroom. I... will leave you to do your business...", width / 2, height - gTextOffset);
    text("Press E for the Bedroom or D for the Dining Room", width / 2, height - hTextOffset);
}

//Arcade
drawArcade = function() {
    background ('#f6a0d4')
    image(images[6], width / 2, height / 2);
    fill(255);
    text("HEY WELCOME TO THE ARCADE!!!! SORRY IF ITS LOUD. GO HAVE FUN!", width / 2, height - gTextOffset);
    text("PRESS B FOR THE BATHROOM OR E FOR THE BEDROOM", width / 2, height - hTextOffset);
}

//Garden
drawGarden = function() {
    background ('#4f5f17')
    image(images[7], width / 2, height / 2);
    fill(255);
    text("hello. welcome to the garden. you may pick some flowers but leave the lavenders for the bees please!", width / 2, height - gTextOffset);
    text("Press H to go to the front of the house or L for the Livingroom", width / 2, height - hTextOffset);
}


//navigation key function
function keyTyped() {
    //splash controls
    if (drawFunction === drawSplash) {
        if (key === 'i') {
            drawFunction = drawInstructions;
        }
    }

    //instruction controls
    if (drawFunction === drawInstructions) {
        if (key === 'l') {
            drawFunction = drawLiving;
        }
    }

        //living room controls

        if (drawFunction === drawLiving) {
            if (key === 'd') {
                drawFunction = drawDining;
            } else if (key === 'b') {
                drawFunction = drawBathroom;
            }
        }

        //arcade room controls
        if (drawFunction === drawArcade) {
            if (key === 'b') {
                drawFunction = drawBathroom;
            } else if (key === 'e') {
                drawFunction = drawBedroom;
            }
        }

        //bedroom controls
        if (drawFunction === drawBedroom) {
            if (key === 'g') {
                drawFunction = drawGarden;
            } else if (key === 'l') {
                drawFunction = drawLiving;
            }
        }

        //bathroom controls
        if (drawFunction === drawBathroom) {
            if (key === 'd') {
                drawFunction = drawDining;
            } else if (key === 'e') {
                drawFunction = drawBedroom;
            }
        }

        //dining room controls
        if (drawFunction === drawDining) {
            if (key === 'k') {
                drawFunction = drawKitchen;
            } else if (key === 'a') {
                drawFunction = drawArcade;
            }
        }

        //kitchen controls
        if (drawFunction === drawKitchen) {
            if (key === 'g') {
                drawFunction = drawGarden;
            } else if (key === 'e') {
                drawFunction = drawBedroom;
            }
        }

        if (drawFunction === drawGarden) {
            if (key === 'h') {
                drawFunction = drawSplash;
            } else if (key === 'l') {
                drawFunction = drawLiving;
            }
        }
    }