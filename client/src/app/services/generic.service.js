export class GenericService {
    constructor($log, $http) {
        'ngInject';

        this.$log = $log;
        this.$http = $http;
        this.apiHost = '//localhost:8000';
    }
    action(arg1, arg2) {
        // return this.$http.post(this.apiHost + '/endpoint/', {
        //     arg1: arg1,
        //     arg2: arg2,
        // });
        return [{ a: 1 }, { b: 2 }];
    }
    getEndpoint1() {
        return this.$http.get(this.apiHost + '/endpoint/', {});
    }
    getEndpoint2() {
        return this.$http.get(this.apiHost + '/endpoint/endpoint/', {});
    }
}
