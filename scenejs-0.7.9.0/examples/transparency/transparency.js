/**
 * SceneJS Example - Basic picking
 *
 * Lindsay Kay
 * lindsay.kay AT xeolabs.com
 * March 2010
 *
 */
var rotateX;
var rotateY;

var exampleScene = SceneJS.scene({ canvasId: 'theCanvas',  loggingElementId: "theLoggingDiv" },

        SceneJS.lookAt({
            eye : { x: 0, y: 2, z: -22},
            look : { x : 0.0, y : -1.0, z : 0 },
            up : { x: 0.0, y: 1.0, z: 0.0 }
        },
                SceneJS.camera({
                    optics: {
                        type: "perspective",
                        fovy : 25.0,
                        aspect : 1.47,
                        near : 0.10,
                        far : 300.0
                    }
                },
                        SceneJS.light({
                            mode:                 "dir",
                            color:                  { r: 1.0, g: 1.0, b: 1.0 },
                            diffuse:                true,
                            specular:               true,
                            dir:                    { x: 1.0, y: 1.0, z: -1.0 }
                        }),

                        SceneJS.light({
                            mode:                 "dir",
                            color:                  {r: 1.0, g: 1.0, b: 1.0},
                            diffuse:                true,
                            specular:               true,
                            dir:                    { x: 0.0, y: 1.0, z: -1.0 }
                        }),

                        SceneJS.light({
                            mode:                 "dir",
                            color:                  {r: 1.0, g: 1.0, b: 1.0},
                            diffuse:                true,
                            specular:               true,
                            dir:                    { x: -1.0, y: 0.0, z: -1.0 }
                        }),

                        rotateX = SceneJS.rotate({
                            angle: 0.0, x : 1.0
                        },
                                rotateY = SceneJS.rotate({
                                    angle: 0.0, y : 1.0
                                },

                                    /* "blue-group" subgraph containing the two blue spheres at the front
                                     */
                                        SceneJS.node({ sid: "blue-group" },

                                                SceneJS.translate({x: -2, z: -7},

                                                        SceneJS.material({
                                                            baseColor:      { r: 0.3, g: 0.3, b: 0.9 },
                                                            specularColor:  { r: 0.9, g: 0.9, b: 0.9 },
                                                            specular:       0.9,
                                                            shine:          6.0,
                                                            opacity: 1.0
                                                        },
                                                                SceneJS.node({ sid: "right-blue-sphere" },
                                                                        SceneJS.translate({x: .5, z: -2},
                                                                                SceneJS.boundingBox({
                                                                                    xmin: -1.0,
                                                                                    ymin: -1.0,
                                                                                    zmin: -1.0,
                                                                                    xmax: 1.0,
                                                                                    ymax: 1.0,
                                                                                    zmax: 1.0
                                                                                },
                                                                                        SceneJS.sphere())
                                                                                )
                                                                        ),

                                                                SceneJS.node({ sid: "left-blue-sphere" },
                                                                        SceneJS.translate({x: +2},
                                                                                SceneJS.boundingBox({
                                                                                    xmin: -1.0,
                                                                                    ymin: -1.0,
                                                                                    zmin: -1.0,
                                                                                    xmax: 1.0,
                                                                                    ymax: 1.0,
                                                                                    zmax: 1.0
                                                                                },
                                                                                        SceneJS.sphere()))
                                                                        )
                                                                )
                                                        )
                                                ),

                                    /* "green-group" containing the two green spheres just behind the blue ones
                                     *
                                     */
                                        SceneJS.node({ sid: "green-group" },
                                                SceneJS.translate({x: 3, z: 0},
                                                        SceneJS.material({
                                                            baseColor:      { r: 0.3, g: 0.9, b: 0.3 },
                                                            specularColor:  { r: 0.9, g: 0.9, b: 0.9 },
                                                            specular:       0.9,
                                                            shine:          6.0,
                                                            opacity:        0.5
                                                        },

                                                                SceneJS.node({ sid: "right-green-sphere"  },
                                                                        SceneJS.translate({x: -2},
                                                                                SceneJS.boundingBox({
                                                                                    xmin: -1.0,
                                                                                    ymin: -1.0,
                                                                                    zmin: -1.0,
                                                                                    xmax: 1.0,
                                                                                    ymax: 1.0,
                                                                                    zmax: 1.0
                                                                                },
                                                                                        SceneJS.sphere())
                                                                                )
                                                                        ),

                                                                SceneJS.node({ sid: "left-green-sphere" },
                                                                        SceneJS.translate({x: 1},
                                                                                SceneJS.boundingBox({
                                                                                    xmin: -1.0,
                                                                                    ymin: -1.0,
                                                                                    zmin: -1.0,
                                                                                    xmax: 1.0,
                                                                                    ymax: 1.0,
                                                                                    zmax: 1.0
                                                                                },
                                                                                        SceneJS.sphere()))
                                                                        )
                                                                )
                                                        )
                                                ),

                                    /* "red-group" subgraph containing the red sphere at the back
                                     */
                                        SceneJS.node({ sid: "red-group" },
                                                SceneJS.translate({x: 2, z: +7},

                                                        SceneJS.material({
                                                            baseColor:      { r: 0.9, g: 0.3, b: 0.3 },
                                                            specularColor:  { r: 0.9, g: 0.9, b: 0.9 },
                                                            specular:       0.9,
                                                            shine:          6.0,
                                                            opacity: 1.0

                                                        },
                                                                SceneJS.node({ sid: "red-group-sphere" },
                                                                        SceneJS.translate({x: -2},
                                                                                SceneJS.boundingBox({
                                                                                    xmin: -1.0,
                                                                                    ymin: -1.0,
                                                                                    zmin: -1.0,
                                                                                    xmax: 1.0,
                                                                                    ymax: 1.0,
                                                                                    zmax: 1.0
                                                                                },
                                                                                        SceneJS.sphere())
                                                                                )
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                )
                        )
                )
        );


/*----------------------------------------------------------------------
 * Scene rendering loop and mouse handler stuff follows
 *---------------------------------------------------------------------*/

var yaw = -30;
var pitch = -30;
var lastX;
var lastY;
var dragging = false;


/* For texture animation
 */
var timeLast = (new Date()).getTime();

/* Always get canvas from scene - it will try to bind to a default canvas
 * when it can't find the one specified
 */
var canvas = document.getElementById(exampleScene.getCanvasId());

function mouseDown(event) {
    lastX = event.clientX;
    lastY = event.clientY;
    dragging = true;
}

function mouseUp() {
    dragging = false;
}

function mouseMove(event) {
    if (dragging) {
        yaw += (event.clientX - lastX) * 0.5;
        pitch += (event.clientY - lastY) * -0.5;
        lastX = event.clientX;
        lastY = event.clientY;
    }
}

canvas.addEventListener('mousedown', mouseDown, true);
canvas.addEventListener('mousemove', mouseMove, true);
canvas.addEventListener('mouseup', mouseUp, true);

window.render = function() {
    rotateX.setAngle(pitch);
    rotateY.setAngle(yaw);
    exampleScene.render();
};

SceneJS.bind("error", function() {
    window.clearInterval(pInterval);
});

SceneJS.bind("reset", function() {
    window.clearInterval(pInterval);
});

var pInterval = setInterval("window.render()", 10);


