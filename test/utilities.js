import { Application } from 'spectron';
import { should, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';

const electronPath = '/Applications/Tidepool Uploader.app/Contents/MacOS/Tidepool Uploader';

global.before(() => {
  should();
  use(chaiAsPromised);
});

export async function startApp() {
  const app = new Application({
    path: electronPath,
  });
  chaiAsPromised.transferPromiseness = app.transferPromiseness;
  return app.start();
}

export async function stopApp(app) {
  if (app && app.isRunning()) {
    await app.stop();
  }
}
