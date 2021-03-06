import { join } from 'lodash-es';
import { WindowHistoryService } from './services/window-history.service';

import foo from './some-js-file';

(function () {
  const joined = join(['Hello', 'world'], ' ');

  const historyService = new WindowHistoryService();

  const url = historyService.getUrl();
  foo('hello world');
  try {
    if (url.includes('collection')) {
      const page = import(/* webpackChunkName: "collection" */ './templates/collection').then(module => {
        const page = module.default;
   
        new page({});
      });
    }
  } catch (e) {
    console.log(e);
  }
}());