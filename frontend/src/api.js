import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  //Search Companies
  static async searchCompanies(data) {
    let res = await this.request(`companies/`, data);
    return res;
  }
  //Search Jobs
  static async searchJobs(data) {
    let res = await this.request(`jobs/`, data);
    return res;
  }
  //Get jobs based on job id
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res;
  }
  //Get a list of all companies
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res;
  }
  //Get list of all jobs
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res;
  }
  //Login
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res;
  }
  //Signups, registers new user
  static async signUp(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
  //Logout, clears local storage, sets currentUser and token to blank values
  static async logout() {
    let res = await this.request(`logout`);
    JoblyApi.token = "";
    return res;
  }
  //Get information on a specific user
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }
  //update a user's firstName, lastName, email
  static async update(username, data) {
    console.log(username, data);
    let res = await this.request(`users/${username}`, data, "patch");
    return res;
  }
  //apply to job
  static async apply(username, jobid) {
    let res = await this.request(
      `users/${username}/jobs/${jobid}`,
      null,
      "post"
    );
    return res;
  }
}
//Need to update this token based on the return from signup or login api calls
/* JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc"; */

export default JoblyApi;
