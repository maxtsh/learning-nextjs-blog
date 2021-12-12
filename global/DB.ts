import base64 from "base-64";
const encodedData = base64.decode(
  "bW9uZ29kYitzcnY6Ly9tYXh0c2g6TW9oYW1tYWQxOTkyZ2hvc3RAY2x1c3RlcjAuanJyaHIubW9uZ29kYi5uZXQvbmV4dGpzLWxlYXJuaW5nLWJsb2c/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5"
);
export const dbUrl = encodedData;
