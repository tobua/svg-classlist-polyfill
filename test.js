function setup() {
  var element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

  if (!element instanceof SVGElement) {
    document.write("<h2>Error: Couldn't create an SVG Element for test.</h2>")
  }

  return element
}

function test(name, condition) {
  if (condition) {
    document.write('<p>Success: ' + name + '.</p>')
  } else {
    document.write('<p>Failed: ' + name + '.</p>')
  }
}

var element

element = setup()

document.write('<h2>SVGElement.classList.contains</h2>')

test('contains without class', element.classList.contains('one') === false)

element = setup()

element.classList.add('one')

test('contains with class', element.classList.contains('one') === true)

element = setup()

element.classList.add('one')
element.classList.add('two')

test(
  'contains with several classes',
  element.classList.contains('one') === true
)

element = setup()

element.classList.add('two')
element.classList.add('one')

test('contains with order mixed', element.classList.contains('one') === true)

element = setup()

element.classList.add('two')
element.classList.add('done')

test(
  'contains with class inside class',
  element.classList.contains('one') === false
)

document.write('<h2>SVGElement.classList.add</h2>')

element = setup()

element.classList.add('one')

test('contains class after add', element.classList.contains('one') === true)

element = setup()

element.classList.add('one')
element.classList.add('two')

test(
  'contains class after adding serveral',
  element.classList.contains('one') === true
)

element = setup()

element.classList.add('one')
element.classList.add('two')
element.classList.add('three')

test(
  'several classes after adding',
  element.classList.contains('four') === false &&
    element.classList.contains('three') === true &&
    element.classList.contains('two') === true &&
    element.classList.contains('one') === true
)

document.write('<h2>SVGElement.classList.remove</h2>')

element = setup()

element.classList.remove('one')

test(
  "remove doesn't fail, even if class missing",
  element.classList.contains('one') === false
)

element = setup()

element.classList.add('one')
element.classList.remove('one')

test(
  "removing class after adding isn't present",
  element.classList.contains('one') === false
)

element = setup()

element.classList.add('one')
element.classList.add('two')
element.classList.add('three')
element.classList.add('three')
element.classList.add('three')
element.classList.add('two')

element.classList.remove('three')

test(
  'removes all present classes',
  element.classList.contains('three') === false
)

element = setup()

element.classList.add('a')
element.classList.add('b')
element.classList.add('c')
element.classList.add('c')

element.classList.remove('c')

test(
  'removes also short class names',
  element.classList.contains('c') === false
)

element = setup()

element.classList.add('chart__data-tooltip--visible')
element.classList.add('chart__data-tooltip')
element.classList.add('chart__data-tooltip--visible')

element.classList.remove('chart__data-tooltip--visible')

test(
  'removes multiple class names with special characters',
  element.classList.contains('chart__data-tooltip--visible') === false
)

element = setup()

element.classList.add('-one__one')
element.classList.add('_two-two_-')
element.classList.add('-one__one')
element.classList.add('-one__one')
element.classList.add('_two-two_-')
element.classList.add('-three')
element.classList.add('_two-two_-')
element.classList.add('_two-two_-')

element.classList.remove('-one__one')
element.classList.remove('_two-two_-')

test(
  'removes multiple class names with multiple special characters',
  element.classList.contains('-one__one') === false &&
    element.classList.contains('_two-two_-') === false &&
    element.classList.contains('-three') === true
)

document.write('<h2>SVGElement.classList.toggle</h2>')

element = setup()

element.classList.toggle('one')

test(
  'toggling a missing class will add it',
  element.classList.contains('one') === true
)

element = setup()

element.classList.add('one')
element.classList.toggle('one')

test(
  'toggling a present class will remove it',
  element.classList.contains('one') === false
)

element = setup()

element.classList.add('one')
element.classList.add('two')
element.classList.add('three')
element.classList.add('four')
element.classList.toggle('two')
element.classList.toggle('three')

test(
  'toggle works with several classes',
  element.classList.contains('one') === true &&
    element.classList.contains('two') === false &&
    element.classList.contains('three') === false &&
    element.classList.contains('one') === true
)

var icon = document.querySelector('#icon')

var animateColors = function () {
  setTimeout(function () {
    icon.classList.remove('blue')
  }, 1000)

  setTimeout(function () {
    icon.classList.remove('red')
  }, 2000)

  setTimeout(function () {
    icon.classList.add('green')
  }, 3000)

  setTimeout(function () {
    icon.classList.toggle('blue')
  }, 4000)

  setTimeout(function () {
    icon.classList.remove('green')
    icon.classList.add('red')
  }, 4500)
}

// Apply classes to SVG icon.
setInterval(animateColors, 5000)

animateColors()
