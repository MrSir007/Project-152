AFRAME.registerComponent('car-rotation', {
  schema: {
    rotation: {type: 'number', default: '0'},
  },
  update: function() {
    windows.addEventListener('click', (e) => {
      this.data.rotation = this.el.getAttribute('rotation')
      var rotation = this.data.rotation
      if (e.click) {
        rotation.y += 20
        this.el.setAttribute('rotation', rotation)
      }
    })
  }
})