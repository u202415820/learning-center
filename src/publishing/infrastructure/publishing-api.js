import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;
export class PublishingApi extends BaseApi {
    #categoriesEndpoint;

    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndpointPath);
    }

    getCategories() {
        return this.#categoriesEndpoint.getAll();
    }

    getCategoryById(id) {
        return this.#categoriesEndpoint.getById(id);
    }

    updateCategory(id, resource) {
        return this.#categoriesEndpoint.update(id, resource);
    }

    deleteCategory(id) {
        return this.#categoriesEndpoint.delete(id);
    }
}