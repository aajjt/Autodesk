function ToolbarExtension(viewer, options) {
  Autodesk.Viewing.Extension.call(this, viewer, options);
}

ToolbarExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
ToolbarExtension.prototype.constructor = ToolbarExtension;

ToolbarExtension.prototype.onToolbarCreated = function(toolbar) {
  // alert('TODO: customize Viewer toolbar');

  var viewer = this.viewer;

  // Button 1
  var button1 = new Autodesk.Viewing.UI.Button('show-env-bg-button');
  button1.onClick = function(e) {
      viewer.setCutPlanes([new THREE.Vector4(0,0,1,0)]);
   // viewer.setEnvMapBackground(true);
  };
  button1.addClass('show-env-bg-button');
  button1.setToolTip('Z Plane Section Cut');

  // SubToolbar
  this.subToolbar = new Autodesk.Viewing.UI.ControlGroup('my-custom-toolbar');
  this.subToolbar.addControl(button1);
  

  toolbar.addControl(this.subToolbar);
};
ToolbarExtension.prototype.unload = function() {
  if (this.subToolbar) {
      this.viewer.toolbar.removeControl(this.subToolbar);
      this.subToolbar = null;
  }
};

Autodesk.Viewing.theExtensionManager.registerExtension('ToolbarExtension', ToolbarExtension);
  