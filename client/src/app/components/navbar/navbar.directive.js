export function navbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/components/navbar/navbar.html',
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class NavbarController {
    constructor($log, $location) {
        'ngInject';

        this.$log = $log;
        this.title = $location.path().slice(1);

    }
}