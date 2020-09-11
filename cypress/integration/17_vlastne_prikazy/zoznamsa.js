/// <reference types="cypress" />


it('prihlasenie pomocou custom commandu', () => {


    cy
    .request({  
      method:'POST',
      url:'/login',
      body: {email: 'filip@filiphric.sk',
        password: 'aaaa'
      }
    })
  
    cy
    .visit('/')
});