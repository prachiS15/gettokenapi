// cypress/support/commands.js

Cypress.Commands.add('getToken', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-usermgr.eyewa.com/api/um/ae-en/v1/sign-in',
      headers: {
        'accept': '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'appversion': '0.0.1',
        'channel': 'MWEB',
        'checkout': 'true',
        'content-type': 'application/json',
        'deviceid': '73f92eea-a797-416d-8887-a98b4cc666f9',
        'devicetype': 'MWEB',
        'origin': 'https://eyewa.com',
        'priority': 'u=1, i',
        'referer': 'https://eyewa.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
      },
      body: {
        email: 'prachi.sharma@eyewa.com',
        password: 'RXlld2FAMTIzNA==', 
      },
    }).then((response) => {
      const token = response.body.token; 
      Cypress.env('authToken', token);
      return token;
    });
  });
  