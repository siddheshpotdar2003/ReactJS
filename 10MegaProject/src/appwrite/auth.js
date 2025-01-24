import { Client, Account, ID } from "appwrite";
import config from "../config/config.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //login
        return this.loginUser({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, password }) {
    try {
      const user = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logoutUser() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }

  async getUser(userId) {
    try {
      return await this.account.getSession(current);
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
