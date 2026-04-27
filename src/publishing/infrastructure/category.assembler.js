export class Category {
    static toEntityFromResource(resource) {
        return new Category({...resource});
    }

    static ToEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status} - ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array
        ? response.data
            : response.data['categories'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}