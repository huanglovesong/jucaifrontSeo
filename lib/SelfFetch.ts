import fetch from "isomorphic-unfetch";

class SelfFetch {

  // 让每个promise请求都trycatch
  async baseMethod(fn) {
    if (fn) {
      try {
        const res = await fn;
        const data = await res.json();
        if (data.code == 0) {
          return data.data;
        } else {
          return '';
        }
      } catch (error) {
        console.log(error,"--error")
        return null;
      }
    }
  }

  async get(url) {
    const token = ''
    return await this.baseMethod(
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`, // 带上token的地方
          'Content-Type': 'application/json'
        },
      })
    );
  }

  async post(url, options) {
   const token = ''
   const res = await this.baseMethod(
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(options),
      })
    );
    return res;
  }

  async put(url, options) {
    const token = ''
    const res = await this.baseMethod(
       fetch(url, {
         headers: {
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json'
         },
         method: "Put",
         body: JSON.stringify(options),
       })
     );
     return res;
   }
}

export default SelfFetch;
