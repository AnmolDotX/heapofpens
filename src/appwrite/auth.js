import conf from "@/conf/conf";
import { Account, Client, ID } from "appwrite";
import { useCookies } from "react-cookie";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }
  
  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),    
        email,
        password,
        name,
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailSession(email, password);
      const token = await this.account.createJWT();
      console.log(session, token);
      return {session, token}
    } catch (error) {
      console.log(error.message);
    }
  }

  async getCurrentUser() {
    try {
      const data = await this.account.get();
      return data;
    } catch (error) {
      console.log(error.message);
    }
    return null;
  }


  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error.message);
    }
  }
}

const authService = new AuthService();

export default authService;
