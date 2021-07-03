import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HTgCBJSWgPb3cA7AqrxgFC3HcZZREsfE7csqWwoRcNoLunnMncblGu75Zg63jEprZczWaJdE07Q3ysbCu4cNHXA00205neqXj";

  const onToken = (token) => {
    console.log("Stripe token: ", token);
    alert("Payment Successfull!");
  };

  return (
    <StripeCheckout 
      name='CRWN Clothing Ltd.'
      label='Pay Now'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
