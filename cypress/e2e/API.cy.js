import 'cypress-mochawesome-reporter/register';



describe('API Response Validation', () => {          //test suite , description 

  it('should validate the API response', () => {    //define multiple test using it block 
    cy.request({
      method: 'POST',
      url: 'https://common-uat-api.eyewa.com/api/v1/application/config',
      headers: {
        'user-agent': 'Dart/3.1 (dart:io)',
        'deviceId': '98BA3C65-2262-4134-9B7C-620F8D390DD3',
        'app_version': '4.6.7',
        'accept-encoding': 'gzip',
        'content-length': '0',
        'channel': 'ios',
        'host': 'common-uat-api.eyewa.com',
        'devicetype': 'web',
        'Cookie': '__cf_bm=nL22htg8j6HKDmLYgxXGZK3.pprLHCQO4HKBB9bvyYo-1725007925-1.0.1.1-KgSVmcjFDfk3kQlW8h5zURrlhkKAdcSkd3jyWEf.SOIdH6q8XutY_HMimCUI3gguGxtlUx0FNukK_d_lYzuEVg; _cfuvid=agcSotheIW6v58YKpj_j_RN1.VTY_ow41lwq2eIqaAs-1725007925522-0.0.1.1-604800000; __cf_bm=6fKmuGhOFESzJicaFbVPIHmywyo1TwOigBc0mhe2B88-1725438908-1.0.1.1-GCr306qh8wEMME6XYdTwiqRFX8fTmgp1FsOOkDM9QrawAryIUU75Ux4i3mu7lL2myG7VkBGm6pIh1W96geJzbQ; _cfuvid=NPE0kxxP7O7J9MAGavLsRxEfubvUth_39CE7QAO5iZE-1725438908146-0.0.1.1-604800000'
      }
    }).then((response) => {
      // Check the response status
      expect(response.status).to.eq(200);

      // Check the recordStatus field
      expect(response.body.recordStatus).to.eq('ACTIVE');

      // Check the trackingCode field
      expect(response.body.trackingCode).to.eq('4.6.7_3-B_14-B_16-B');

      // Validate experiments
      const experiments = response.body.experiments;
      expect(experiments).to.have.property('HOME_PAGE');
      expect(experiments['HOME_PAGE']).to.deep.equal({
        recordStatus: 'ACTIVE',
        variantType: 'VARIANT',
        experimentId: 3,
        experimentName: 'HOME_PAGE'
      });

      expect(experiments).to.have.property('NEW_APP_EXPERINCE');
      expect(experiments['NEW_APP_EXPERINCE']).to.deep.equal({
        recordStatus: 'ACTIVE',
        variantType: 'VARIANT',
        experimentId: 14,
        experimentName: 'NEW_APP_EXPERINCE'
      });

      expect(experiments).to.have.property('SIGN_UP_OR_SKIP');
      expect(experiments['SIGN_UP_OR_SKIP']).to.deep.equal({
        recordStatus: 'ACTIVE',
        variantType: 'VARIANT',
        experimentId: 16,
        experimentName: 'SIGN_UP_OR_SKIP'
      });

      // Validate commonConfig
      const commonConfig = response.body.config.commonConfig;
      expect(commonConfig).to.have.property('footerMenuMobile').that.is.an('array').with.length.of.at.least(1);
      expect(commonConfig).to.have.property('newSigninFlow', true);
      expect(commonConfig).to.have.property('phone', '04247 2979');
      expect(commonConfig).to.have.property('email', 'customercare@eyewa.com');

      // Validate applePayConfig
      const applePayConfig = response.body.config.applePayConfig;
      expect(applePayConfig).to.have.property('isActive', true);
      expect(applePayConfig).to.have.property('merchantId', 'merchant.uat.eyewa.com');
      expect(applePayConfig).to.have.property('buttonStyle', 'black');

      // Validate selectedWebsiteConfig
      const selectedWebsiteConfig = response.body.config.selectedWebsiteConfig;
      expect(selectedWebsiteConfig).to.have.property('countryCode', 'ae-en');
      expect(selectedWebsiteConfig).to.have.property('currency', 'AED');

      // Validate websitesConfig
      const websitesConfig = response.body.config.websitesConfig;
      expect(websitesConfig).to.be.an('array').that.is.not.empty;
      expect(websitesConfig[0]).to.have.property('countryCode', 'ae-en');

      // Validate storeLocatorCtaConfig
      const storeLocatorCtaConfig = response.body.config.storeLocatorCtaConfig;
      expect(storeLocatorCtaConfig).to.have.property('ctaConfigs').that.is.an('array').with.length.of.at.least(1);
      expect(storeLocatorCtaConfig).to.have.property('countryConfigs').that.is.an('array').with.length.of.at.least(1);

      // Validate appConfigKeys
      const appConfigKeys = response.body.config.appConfigKeys;
      expect(appConfigKeys).to.have.property('mapKey', 'AIzaSyD9JfFqdFqm8FGaigTbQmXj8wta6p9hEsA');
      expect(appConfigKeys).to.have.property('googleSignIn').that.is.a('string');
    });
  });

    
    
    });
    