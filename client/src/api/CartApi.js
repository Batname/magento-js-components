import request from 'superagent';
import cartConstants from '../constants/CartConstants';

const CartApi = {
  addToCartUrl(options){
    return new Promise((resolve, reject) => {
      request
        .post(cartConstants.addToCartUrl)
        .type('form')
        .send(options)
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (res.body) {
            resolve(res.body);
          } else {
            reject('res.text');
          }
        });
    });
  }
};

export default CartApi;

