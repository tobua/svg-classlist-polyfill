// Inject polyfill if classList not supported for SVG elements.
if (!('classList' in SVGElement.prototype)) {
  Object.defineProperty(SVGElement.prototype, 'classList', {
    get: function get() {
      var _this = this

      return {
        contains: function contains(className) {
          return _this.className.baseVal.split(' ').indexOf(className) !== -1
        },
        add: function add(className) {
          var newClass = (_this.getAttribute('class') + ' ' + className).trim()
          return _this.setAttribute('class', newClass)
        },
        remove: function remove(className) {
          var classes = _this.getAttribute('class') || ''
          var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g')
          classes = classes.replace(regex, '').trim()
          _this.setAttribute('class', classes)
        },
        toggle: function toggle(className) {
          if (this.contains(className)) {
            this.remove(className)
          } else {
            this.add(className)
          }
        },
      }
    },
  })
}
