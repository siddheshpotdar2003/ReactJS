import config from "../config/config.js";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Service {
  client;
  databases;
  storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appWriteURL)
      .setProject(config.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(
    documentId,
    { title, article, featuredImage, status, userId }
  ) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        documentId,
        { title, article, featuredImage, status, userId }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(documentId) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        documentId
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  async getPost(documentId) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        documentId,
        []
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  //Upload file

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      this.storage.deleteFile(config.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      // throw error;
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(config.appWriteBucketId, fileId);
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();
export default service;
