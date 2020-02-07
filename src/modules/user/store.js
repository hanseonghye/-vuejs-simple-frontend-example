import COLLECTION_MODULE from "@/store/lib/collectionModule";

const NEW_USER = {
  email: ""
};

export default {
  namespaced: true,
  modules: {
    collection: COLLECTION_MODULE({ NEW_MODEL: NEW_USER })
  }
};
