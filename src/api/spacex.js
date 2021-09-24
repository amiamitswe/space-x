import config from "../config";

class SpaceX_API {
   static async spaceList({ limit = 10 }) {
      const response = await fetch(`${config.base_url}/launches?limit=${limit}`, {
         method: 'GET',
         mode: 'cors'
      }).then(data => data.json());

      console.log(await response);

      return await response.data;
   }
}

export default SpaceX_API;