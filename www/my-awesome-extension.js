// Content for 'my-awesome-extension.js'

  function MyAwesomeExtension(viewer, options) {
    Autodesk.Viewing.Extension.call(this, viewer, options);
  }
  
  MyAwesomeExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
  MyAwesomeExtension.prototype.constructor = MyAwesomeExtension;
  
  MyAwesomeExtension.prototype.cutViewport = function() {  
  this.viewer.setCutPlanes([new THREE.Vector4(0,0,1,0)]); 
  };       


  MyAwesomeExtension.prototype.load = function() {
    // alert('MyAwesomeExtension is loaded!');

  this.onLockBinded = this.cutViewport.bind(this);
  
  var lockBtn = document.getElementById('MyAwesomeCutButton');
  lockBtn.addEventListener('click', this.onLockBinded);
    return true;
  };
  
  MyAwesomeExtension.prototype.unload = function() {
    // alert('MyAwesomeExtension is now unloaded!');

  var lockBtn = document.getElementById('MyAwesomeCutButton');
  lockBtn.removeEventListener('click', this.onLockBinded);

  this.onLockBinded = null;
    return true;
  };
  
  Autodesk.Viewing.theExtensionManager.registerExtension('MyAwesomeExtension', MyAwesomeExtension);
  