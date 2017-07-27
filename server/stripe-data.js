/**
 * Created by danielbruce on 2017-07-27.
 */

require('dotenv').load();
const stripeData = {}
stripeData.keyPublishable = process.env.STRIPE_PUBLISHABLE_KEY;
stripeData.keySecret = process.env.STRIPE_SECRET_KEY;

module.exports = stripeData;