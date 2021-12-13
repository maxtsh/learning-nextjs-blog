import base64 from "base-64";
const encodedData = base64.decode(process.env.CRED);
export const dbUrl = encodedData;
