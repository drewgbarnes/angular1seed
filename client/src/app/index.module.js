import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { Page1Controller } from './views/page1/page1.controller';
import { Page2Controller } from './views/page2/page2.controller';
import { Page3Controller } from './views/page3/page3.controller';
import { Page4Controller } from './views/page4/page4.controller';

import { navbarDirective } from './components/navbar/navbar.directive';
import { bottombarDirective } from './components/bottombar/bottombar.directive';

import { GenericService } from './services/generic.service';

angular.module('angular1seed', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'ui.router',
        'ui.bootstrap'
    ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('Page1Controller', Page1Controller)
  .controller('Page2Controller', Page2Controller)
  .controller('Page3Controller', Page3Controller)
  .controller('Page4Controller', Page4Controller)

  .directive('navbar', navbarDirective)
  .directive('bottombar', bottombarDirective)

  .service('GenericService', GenericService)
;
