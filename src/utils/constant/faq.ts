export interface IFaq {
  title: string;
  info: string;
}

export const shippingAndPayment: IFaq[] = [
  {
    title: "When will my order ship?",
    info: "After your payment is verified, it takes up to 24 hours to process and ship your order. This does not include weekends or holidays. Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday",
  },
  {
    title: "Will I have to pay international taxes & duties?",
    info: "Your order may be subject to import duties and taxes, which are levied once a shipment reaches your country. The general amount for the duties and taxes fee is about 20% of the dollar amount of the merchandise. However, this is just a general guideline and may vary depending on the country to which the order was shipped. You should contact your customs office for specific amounts and percentages.SHOP cannot control and is not responsible for any duties/taxes applied to your package. You will be responsible for paying additional charges for customs clearance. Customs policies vary widely from country to country; please contact your local customs office for further information. Note, in rare occasions custom agents may delay delivery of some packages.",
  },
];

export const orderAndConcerns: IFaq[] = [
  {
    title: "I need to change something on my order. How can I do that?",
    info: "If you need to change or cancel your order, please contact us immediately. Once our warehouse has processed your order, we will be unable to make any changes.",
  },
  {
    title: "My order status says Unfulfilled. What does that mean?",
    info: "Unfulfilled just means that we successfully received your order! Once your order is shipped, you'll receive a tracking number and your order status will change to Fulfilled.",
  },
  {
    title: "Why was my order canceled?",
    info: "If your order was unexpectedly cancelled, chances are that our fraud filter marked your order as fraudulent. If you are certain that that is not true, please order again with a Paypal account. If you do not have Paypal, you can easily sign up at www.Paypal.com",
  },
];

export const otherInformation: IFaq[] = [
  {
    title:
      "How do I become a SHOP reseller? Do you have any authorized resellers?",
    info: "While we appreciate that you want to be a reseller of SHOP, we do not currently have any reseller or wholesale program. Please email us at wholesale@shop.com and we may get back to you when we decide to go down that path!",
  },
  {
    title: "Discount Exclusions",
    info: "Coupons do not apply to sale items",
  },
  {
    title: "What is your return/exchange policy?",
    info: "Any new product can be returned for a full refund within 60 days of delivery. We offer free and easy returns for all domestic and international orders for items placed on shop.com. Expedited shipping charges are non-refundable. For warranty claims or parts replacement, please get in touch with us at support@shop.com, as the process will be different.How do I start my free return?To start your return, please locate your order number. Once you have printed your return label, attach the label to your return package. If possible, use the same shipping materials that your order arrived in. Remove any previous labels and securely tape the new shipping label onto your package. Drop off your package at any facility designated by the carrier on your label.",
  },
];
