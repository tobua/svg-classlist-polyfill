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
          return this.setAttribute(
            'class',
            ''.concat(this.getAttribute('class'), ' ').concat(className)
          )
        },
        remove: function remove(className) {
          var removedClass = this.getAttribute('class').replace(
            new RegExp('(\\s|^)'.concat(className, '(\\s|$)'), 'g'),
            '$2'
          )

          if (this.classList.contains(className)) {
            this.setAttribute('class', removedClass)
          }
        },
        toggle: function toggle(className) {
          if (polyfill.contains(className)) {
            polyfill.remove(className)
          } else {
            polyfill.add(className)
          }
        }
      }
    }
  })
}
