const makeAPICall = async (
    { path, method = "POST", payload = null },
    ...customConfigs
  ) => {
    const headers = {
      Accept: "application/json, */*",
      "Content-type": "application/json"
    };
  
    const configs = {
      method,
      headers,
      ...customConfigs
    };
  
    if (payload) configs.body = JSON.stringify(payload);
  
    return window
      .fetch(`${path}`, configs)
      .then((response) => response.json())
      .catch((err) => err);
  };
  
  export default makeAPICall;
  