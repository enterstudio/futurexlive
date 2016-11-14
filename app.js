
var arScene = document.querySelector('ar-scene');
var content = document.querySelector('#helloworld');

// the ar-camera has an argon reference frame attached, so when it gets it's first value,
// we'll get this event 
arScene.addEventListener("referenceframe-statuschanged", function () {
    var camera = document.querySelector('ar-camera');
    var vec = camera.object3D.getWorldDirection();
    vec.multiplyScalar(-10);
    vec.y -= 1;
    content.setAttribute("position", {x: vec.x, y: vec.y, z: vec.z});
});

var scene = document.querySelector('#stuff');
for (var i = 0; i < 12; i++) {
    var obj = document.createElement('a-entity');
    obj.setAttribute('geometry', {
        primitive: 'torusKnot',
        radius: Math.random() * 10,
        radiusTubular: Math.random() * .75,
        p: Math.round(Math.random() * 10),
        q: Math.round(Math.random() * 10)
    });
    obj.setAttribute('material', {
        color: getRandColor(),
        metalness: Math.random(),
        roughness: Math.random()
    });
    obj.setAttribute('position', {
        x: getRandCoord(),
        y: getRandCoord(),
        z: getRandCoord()/2 + 13 
    });
    scene.appendChild(obj);
}

function getRandCoord () {
    var coord = Math.random() * 20;
    return Math.random() < .5 ? coord + 5 : coord * -1 - 5;
}

///
/// presentation

// Reveal is loaded and ready
Reveal.addEventListener( 'ready', function( event ) {
	// event.currentSlide, event.indexh, event.indexv
} );

// new slide
Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );

// If you set ``data-state="somestate"`` on a slide ``<section>``, "somestate" will 
// be applied as a class on the document element when that slide is opened.
// Furthermore you can also listen to these changes in state via JavaScript:

Reveal.addEventListener( 'argonslide', function( event ) {
	// event.active
    if (event.active) {
        document.body.style.backgroundColor = "transparent";
    } else {
        document.body.style.backgroundColor = "black";
    }
} );

var arStuff = document.querySelector('#arStuff');
Reveal.addEventListener( 'arstuff', function( event ) {
	// event.active
    arStuff.setAttribute('visible', event.active);
} );

Reveal.addEventListener( 'helloworld', function( event ) {
	// event.active
    content.setAttribute('visible', event.active);
} );

var spinbox = document.querySelector('#spinbox');
Reveal.addEventListener( 'spinbox', function( event ) {
	// event.active
    spinbox.setAttribute('visible', event.active);
} );

var geoAR = document.querySelector('#geo');
Reveal.addEventListener( 'geomarkers', function( event ) {
	// event.active
    geoAR.setAttribute('visible', event.active);
} );

var vuforia = document.querySelector('#frame');
Reveal.addEventListener( 'vuforia', function( event ) {
	// event.active
    vuforia.setAttribute('trackvisibility', event.active);
} );

//
// fragments.  Perhaps I can add/remove 3D content when I step through some fragmets in a slide
//

Reveal.addEventListener( 'fragmentshown', function( event ) {
	// event.fragment = the fragment DOM element
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
	// event.fragment = the fragment DOM element
} );
