import { AppConfig } from 'herbjs';

AppConfig({
  pages: ['pages/index/index'],
  window: {
    defaultTitle: '',
    enableInPageRender: 'YES',
    enableDSL: 'YES',
    enableJSC: 'YES',
    enableKeepAlive: 'NO',
    enableWK: 'YES',
    nboffline: 'sync',
    tinyPubRes: 'YES',
    showDomain: 'NO',
    useSW: 'YES',
    allowsBounceVertical: 'NO',
    enableScrollBar: 'NO',
  },
});
