import Heading from "@/app/utils/Heading";
import Loader from "../../../app/component/Loader";
import { useGetCourseDetailsQuery } from "../../../redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import { DataArray } from "@mui/icons-material";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";
import { useCreatePaymentIntentMutation, useGetStripePublishablekeyQuery } from "../../../redux/features/orders/OrdersApi";
import { loadStripe } from "@stripe/stripe-js";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("login");
  const [open, setOpen] = useState(false);
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [ClientSecret, setClientSecret] = useState('');
const {data,isLoading} = useGetCourseDetailsQuery(id);
const {data:config} = useGetStripePublishablekeyQuery({});
const [createPaymentIntent, {data:paymentIntentData}] = useCreatePaymentIntentMutation();


useEffect(() => {
  if(config){
    const publishablekey = config?.publishableKey;
    setStripePromise(loadStripe(publishablekey));
  }
if(data){
  const amount = Math.round(data.course.price * 100);
  createPaymentIntent(amount);
}
 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [config, data]);


useEffect(()=>{
  if(paymentIntentData){
    setClientSecret(paymentIntentData?.client_secret);
  }
}, [paymentIntentData]);






  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + "- Eshikhon"}
            description={
              "e shikhon is a programming learning platform which is develop by shazid karim"
            }
            keywords={data.course.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            activeItem={1}
            setRoute={setRoute}
            route={route}
          />
          {
            stripePromise && (
              <CourseDetails data={data.course}  stripePromise={stripePromise} clientSecret={ClientSecret}
              />
            )
          }
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
