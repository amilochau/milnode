import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const components = require.context(
  './', true, /\.vue$/
)

const componentsToExport = {}

components.keys().forEach(fileName => {
  const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')))
  const component = components(fileName)
  componentsToExport[componentName] = component.default || component
})

export default componentsToExport
