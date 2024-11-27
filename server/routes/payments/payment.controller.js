const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const frontEndUrl = "https://prayaas.onrender.com";
async function checkout(req, res) {
  const { product } = req.body;
  console.log(product);
  console.log(+product.price);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        // quantity: 1,
        price_data: {
          currency: "inr",
          product_data: {
            name: product.name,
          },
          unit_amount: +product.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${frontEndUrl}/success`,
    cancel_url: `${frontEndUrl}/cancel`,
  });
  res.json({ id: session.id });
}

module.exports = {
  checkout,
};
