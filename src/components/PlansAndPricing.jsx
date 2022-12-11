import React from 'react'
import { Button,Container,Table } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross1} from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import '../components/PlansAndPricing.css';

function PlansAndPricing() {
  const navigate=useNavigate();

  const loadScript = (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const displayRazorPayConsole = async (amountToPay) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline ..Failed to load Razorpay");
    }

  const options = {
    key: "rzp_test_AdnDBw7R2Iutm9",
    currency: "INR",
    amount: amountToPay *100,
    name: "Netflix Clone",
    image:"https://logos-world.net/wp-content/uploads/2021/04/ava.jpg",
    description: "Pay Securely with us",
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("payment successful");
    },
    preFill: {
      name: "Netflix Clone",
      email:"testData@gmail.com",
      contact:"9873847588"
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  }


  return (
    <div className="pricingSection">
    <Container className="plan-with-prices text-center">
    <div className="text--section pt-1 pb-2">
      <h2 className="mt-3 mb-4">Choose one plan and watch everything on NETFLIX</h2>
      <Button variant="danger mb-4">Join free for one month</Button>
    </div>
    <Table striped borderless hover variant="dark">
      <thead>
        <tr>
          <th></th>
          <th>Basic</th>
          <th>Standard</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monthly Price after free month ends</td>
          <td>Rs. 499</td>
          <td>Rs. 799</td>
          <td>Rs. 999</td>
        </tr>
        <tr>
          <td>HD Available</td>
          <td><RxCross1/></td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
        </tr>
        <tr>
          <td>Ultra HD Available</td>
          <td><RxCross1/></td>
          <td><RxCross1/></td>
          <td><AiOutlineCheck/></td>
        </tr>
        <tr>
          <td>Screens you can watch on at the same time</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Watch on your laptop,TV and Tablet</td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
        </tr>
        <tr>
          <td>Unlimited Movies and TV Shows</td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
        </tr>
        
        <tr>
          <td>Cancel Anytime</td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
        </tr>
        <tr>
          <td>Free Month</td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
          <td><AiOutlineCheck/></td>
        </tr>

        <tr>
          <td></td>
          <td><Button variant="danger" onClick={()=>displayRazorPayConsole(499)}>Basic Plan</Button></td>
          <td><Button variant="danger" onClick={()=>displayRazorPayConsole(799)}>Standard Plan</Button></td>
          <td><Button variant="danger" onClick={()=>displayRazorPayConsole(999)}>Premium Plan</Button></td>
          
        </tr>
        
      </tbody>
    </Table>
    <div className="home-button-section position-relative">
    <Button variant="danger position-absolute end-0 top-100" onClick={()=>navigate('/')}>Home</Button>

    </div>

    </Container>
    
    </div>
  )
}

export default PlansAndPricing