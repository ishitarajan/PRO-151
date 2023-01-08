// Registering component in box-component.js
AFRAME.registerComponent("move-box", {
  schema: {
    moveY: { type: "number", default: 1 },
    moveX: { type: "number", default: 1 },
  },

  tick: function () {

    this.data.moveY = this.data.moveY - 0.01;
    this.data.moveX = this.data.moveX - 0.01;

    var pos = this.el.getAttribute("position");

    pos.y = this.data.moveY;
    pos.x = this.data.moveX;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
  }
});
