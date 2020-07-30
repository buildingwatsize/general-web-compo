import axios from "axios";
// import { TOKEN, EMPLOYEE_ID, EMPLOYEE_NAME, EMPLOYEE_POSITION_LEVEL, EMPLOYEE_POSITION_NAME } from 'utils/constants'
// import { getCookie, removeCookie } from "utils/cookies";
import { message } from "antd";

const UNPROTECTED_PATHS = []

const isUnprotectedPath = (url) => {
  for (let path of UNPROTECTED_PATHS) {
    if (url.includes(path)) {
      return true
    }
  }
  return false
}

axios.interceptors.request.use(
  async config => {

    if (isUnprotectedPath(config.url)) {
      return config
    }

    // let token = getCookie(TOKEN);
    // config.headers["token"] = `${token}`;
    return config;
  },
  async error => {
    throw error;
  },
);

// Redirect to login page in case of 401 response
axios.interceptors.response.use(
  async config => {
    return config;
  },
  async error => {
    if (error.request === undefined) throw error;

    let url = error.request.responseURL;
    if (error.request.status === 401 && isUnprotectedPath(url)) {
      throw error;
    }

    if (error.request.status === 401) {
      console.log("Session expire, redirect to login");
      message.error("เซสชั่นหมดอายุ กำลังพาท่านไปหน้าล็อกอิน")

      // removeCookie(TOKEN)
      // removeCookie(EMPLOYEE_ID)
      // removeCookie(EMPLOYEE_NAME)
      // removeCookie(EMPLOYEE_POSITION_LEVEL)
      // removeCookie(EMPLOYEE_POSITION_NAME)

      if (window.appHistory) {
        window.appHistory.push("/")
      }
    }

    throw error;
  },
);

export default axios