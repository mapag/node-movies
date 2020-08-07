const MongoLib = require('../lib/mongo');

class ServicesCRUD {
  constructor(_collection) {
    this.collection = _collection;
    this.mongoDB = new MongoLib();
  }

  async getDataByTags({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const data = await this.mongoDB.getAll(this.collection, query);
    return data || [];
  }

  async getDataById({ ID }) {
    const data = await this.mongoDB.get(this.collection, ID);
    return data || [];
  }

  async createData({ data }) {
    const createdDataId = await this.mongoDB.create(this.collection, data);
    return createdDataId;
  }

  async updateDataById({ ID, data } = {}) {
    const updatedDataId = await this.mongoDB.update(this.collection, ID, data);
    return updatedDataId;
  }

  async deleteDataById({ ID }) {
    const deletedDataId = await this.mongoDB.delete(this.collection, ID);
    return deletedDataId;
  }
}

module.exports = ServicesCRUD;