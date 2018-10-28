const fs = require('fs');
const Bundler = require('parcel-bundler');
const Path = require('path');
const rf = require('rimraf');

const argv = require('yargs')
  .alias({
    project: 'p',
    type: 't'
  })
  .parse();

console.log('project:', argv.p, 'type:', argv.t);
const path = `${argv.p}/${argv.t}`;
const content = fs.readFileSync('./index.html', 'utf-8');
const data = content.replace(
  /(src=")(.*)(\/index\.js")/g,
  (match, p1, p2, p3) => {
    return [p1, path, p3].join('');
  }
);
fs.writeFileSync('./index.html', data);
const entryFiles = Path.join(__dirname, './index.html');
const bundler = new Bundler(entryFiles);
rf('./dist', () => {
  bundler.bundle();
  bundler.serve();
});

bundler.on('buildError', err => {
  console.error(err);
  process.exit(-1);
});
