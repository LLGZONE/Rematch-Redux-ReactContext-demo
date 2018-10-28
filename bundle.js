const fs = require('fs');
const Bundler = require('parcel-bundler');
const Path = require('path');

const argv = require('yargs')
  .alias({
    project: 'p',
    type: 't'
  })
  .parse();

const path = `${argv.p}/${argv.t}`;
const content = fs.readFileSync('./index.html', 'utf-8');
fs.writeFileSync(
  './index.html',
  content.replace(/(src=")(.*)(\/App\.js")$/g, (match, p1, p2, p3) => {
    return [p1, path, p3].join('');
  })
);
const entryFiles = Path.join(__dirname, './index.html');
const bundler = new Bundler(entryFiles, entryFiles);
bundler.bundle();
bundler.serve(1234);
