const apiHost = 'https://bakesaleforgood.com';

export default {
  async fetchInitialDeals() {
    try {
      const response = await fetch(`${apiHost}/api/deals`);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      console.error(err);
    }
  },
  async fetchDealDetail(dealId) {
    try {
      const response = await fetch(`${apiHost}/api/deals/${dealId}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      console.error(err);
    }
  },
};