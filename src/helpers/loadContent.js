import * as R from 'ramda'
import * as loadJsonFile from 'load-json-file'

const loadContentWithLocale = R.curry(async (lang, path) =>
  loadJsonFile(path).then((content) => R.prop(lang, content))
)

const loadContent = async (path) => loadJsonFile(path)

export { loadContent, loadContentWithLocale }
