import * as R from 'ramda';
import * as loadJsonFile from 'load-json-file';

const loadContent = R.curry(
  async (lang, path) => loadJsonFile(path).then(content => R.prop(lang, content))
);
export default loadContent