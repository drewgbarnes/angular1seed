export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: 'app/views/page1/page1.html',
            controller: 'Page1Controller',
            controllerAs: 'vm'
        })
        .state('page2', {
            url: '/page2',
            templateUrl: 'app/views/page2/page2.html',
            controller: 'Page2Controller',
            controllerAs: 'vm'
        })
        .state('page3', {
            url: '/page3',
            templateUrl: 'app/views/page3/page3.html',
            controller: 'Page3Controller',
            controllerAs: 'vm'
        })
        .state('page4', {
            url: '/page4',
            templateUrl: 'app/views/page4/page4.html',
            controller: 'Page4Controller',
            controllerAs: 'vm'
        })
        .state('page5', {
            url: '/page5',
            templateUrl: 'app/views/page5/page5.html',
            controller: 'Page5Controller',
            controllerAs: 'vm'
        })
        ;

    $urlRouterProvider.otherwise('/page1');
}
