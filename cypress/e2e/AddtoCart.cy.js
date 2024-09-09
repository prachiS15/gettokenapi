
// cypress/support/e2e.js (or e2e.ts if using TypeScript)
import 'cypress-mochawesome-reporter/register';

describe('Automate Add to Cart API Request', () => {
  it('should add an item to the cart', () => {
    cy.request({
      method: 'POST',
      url: 'https://cart-prd.eyewa.com/v4/cart/ae-en/addToCart', // The endpoint URL
      headers: {
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'appversion': '0.0.1',
        'channel': 'MWEB',
        'checkout': 'true',
        'content-type': 'application/json',
        'deviceid': 'efaee70b-a839-4355-a583-fa645beb6a6b',
        'devicetype': 'MWEB',
        'origin': 'https://eyewa.com',
        'priority': 'u=1, i',
        'referer': 'https://eyewa.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
        'Cookie': '__cf_bm=GtpaeXuP15jgRQrryPT_om1hhGbteTAp3BeU4SQ9oOE-1725603411-1.0.1.1-oo7Uoue.itxTuwOOnej_rtvPcwUfDOqT__8pwBMkUjkSrBLcTH1ykxcgIOOihpqkxi282ATWlqnKYc1EA9dpjA; _cfuvid=9std25DpBpkrJ1mCRUy8FQLKS0k25bQJPCi6YNk1J8M-1725541422044-0.0.1.1-604800000'
      },
      body: {
        "type": "configurable",
        "cartItems": [
          {
            "data": {
              "sku": "sw52910-bla-000221-0507-61",
              "quantity": 1
            },
            "variant_sku": "sw52904-bla-000221-61"
          }
        ]
      }
    })
    .then((response) => {
        
      expect(response.status).to.eq(200);
      expect(response.body.data.items).to.be.an('array').with.length.of.at.least(1);
        const items = response.body.data.items;
      expect(items[0]).to.have.property('attributeOptions').that.is.an('array').with.length.of.at.least(1);
      const qty = response.body.data.items;
    expect(items[0].quantity).to.be.at.least(1);
    expect(response.body.data.message.title).to.eq('Product added to cart');
    


    });
})
});