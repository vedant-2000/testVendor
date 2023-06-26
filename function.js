const axios = require('axios');
const clientId = 'CF473300CI5EBBUOJF7QM277LKO0';
const clientSecret = 'e6a4c3d053c3888e7a35b4dd7c4163c3d2d57d08';
module.exports.gstValidation = async(req, res,next)=>{
    const gstNumber = req.body.GSTIN;
const data = {
  GSTIN: gstNumber,
  businessName: ''
};
console.log(gstNumber)

axios.post('https://api.cashfree.com/verification/gstin', data, {
  headers: {
    'x-client-id': clientId,
    'x-client-secret': clientSecret,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    res.json(response.data)
  })
  .catch(error => {
    res.json(error.message)
  });
}
