"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions  } from "@stripe/stripe-js";
import StripeForm from "./StripeForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_PUBLISHABLE_KEY_TEST!,
  {locale: 'en-AU'}
);

interface Step3Props {
  price: number,
  handlePrevious: () => void;
  handleSubmit: () => void;
}

export default function PaymentElement_Container({ price, handlePrevious, handleSubmit } : Step3Props) {
  const options: StripeElementsOptions = {
    mode: 'payment',
    currency: 'aud',
    amount: price,
    appearance: {
      theme: "stripe",
      variables:{
        borderRadius: "20px"
      },
      rules:{
        ".Input": {
          border: '1px solid #358AC3',
        },
        ".Label": {
          opacity: "0",
          lineHeight: "0"
        }
      },   
    },
  }
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <StripeForm price={price} handlePrevious={handlePrevious} handleSubmit={handleSubmit}/>
    </Elements>
  );
}