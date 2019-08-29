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
          return _this.setAttribute(
            'class',
            _this.getAttribute('class') + ' ' + className
          )
        },
        remove: function remove(className) {
          var removedClass = _this
            .getAttribute('class')
            .replace(
              new RegExp('(\\s|^)'.concat(className, '(\\s|$)'), 'g'),
              '$2'
            )

          if (_this.classList.contains(className)) {
            _this.setAttribute('class', removedClass)
          }
        },
        toggle: function toggle(className) {
          if (this.contains(className)) {
            this.remove(className)
          } else {
            this.add(className)
          }
        }
      }
    }
  })
}
