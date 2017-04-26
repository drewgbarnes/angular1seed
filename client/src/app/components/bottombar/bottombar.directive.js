export function bottombarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/components/bottombar/bottombar.html',
        controller: bottombarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class bottombarController {
    constructor($log, $location) {
        'ngInject';

        this.$log = $log;
        this.title = $location.path().slice(1);
    }
}