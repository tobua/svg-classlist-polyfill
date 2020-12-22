function setup() {
  const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

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
