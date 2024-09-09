describe('Get token and use it in search API request', () => {
    it('should get a new token and use it in the search request', () => {
      // Step 1: Get the token using the custom command
      cy.getToken().then((token) => {
        // Step 2: Use the token in the next API request
        cy.request({
          method: 'GET',
          url: 'https://eyewa.com/ae-en/search?q=blackout&_rsc=w1jpj',
          headers: {
            'accept': '*/*',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'checkout': 'true',
            'cookie': `Bearer ${token}`, 
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
            'priority': 'u=1, i',
            'referer': 'https://eyewa.com/ae-en',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
          }
        }).then((response) => {
          // Step 3: Assert the response from the search endpoint
          expect(response.status).to.eq(200);
          // Further assertions can be made based on the response body
          cy.log(JSON.stringify(response.body));
        });
      });
    });
  });
  