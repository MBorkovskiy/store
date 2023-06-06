import { Head } from "../../Components/Head/Head";
import {
  orderAndConcerns,
  shippingAndPayment,
  otherInformation,
} from "../../utils/constant/faq";
import { MyAccordion } from "../../Components/MyAccordion/MyAccordion";
import "./FaqPage.css";

const FaqPage = () => {
  return (
    <>
      <Head title={"General Questions"} />
      <div className="faq_container">
        <h4>SHIPPING & PAYMENT INFORMATION</h4>
        <div>
          {orderAndConcerns.map((el) => (
            <MyAccordion el={el} />
          ))}
        </div>
        <h4>ORDER INFORMATION & CONCERNS</h4>
        <div>
          {shippingAndPayment.map((el) => (
            <MyAccordion el={el} />
          ))}
        </div>
        <h4>OTHER INFORMATION</h4>
        <div>
          {otherInformation.map((el) => (
            <MyAccordion el={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqPage;
