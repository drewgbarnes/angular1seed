export class Page1Controller {
    constructor(GenericService) {
        'ngInject';

        this.GenericService = GenericService;
        this.stuff = [];

        this.getAction();
    }
    getAction() {
        this.GenericService.action().then((response) => {
                this.stuff = response.data;
            })
            .catch((error) => {
                console.log(error.data);
            });
    }
}
