import { Padding } from '@mui/icons-material'
import React, { FC } from 'react'

const FaqBody: FC = () => {
    return (
        <div style={{ padding: 20 + "px" }}>
            <h1>Frequently Asked Questions</h1>

            <h2>Account Registration</h2>
            <p><strong>How can I create an account?</strong></p>
            <p>A. You can use your phone number to log into your account by verifying through OTP.</p>

            <h2>Order & Shopping</h2>
            <p><strong>How to place an order?</strong></p>
            <p>A. You can order a product by selecting the product, adding it to your cart, and proceeding with the order.</p>

            <p><strong>What payment methods do you accept?</strong></p>
            <p>A. We accept UPI payments, cards, and Cash on Delivery (COD).</p>

            <p><strong>How to track an order?</strong></p>
            <p>A. We will provide a shipment ID so you can track it through our delivery partner's website or application.</p>

            <p><strong>Can I change or cancel the order?</strong></p>
            <p>A. Once the product has been dispatched, you cannot modify the order. You can cancel the order with a proper reason; otherwise, you won't be eligible for COD.</p>

            <h2>Shipping & Delivery</h2>
            <p><strong>Shipping cost & time?</strong></p>
            <p>A. Shipping time is usually 6 working days upon ordering. Delivery price and availability will be shown before finalizing the order.</p>

            <p><strong>What if my order is delayed or lost in transit?</strong></p>
            <p>A. In some circumstances, your order may get delayed. In that case, you can contact our support team, and they will help you get your order delivered to you, or you can raise a request for a refund.</p>

            <p><strong>How can I return my order? (Please do add it in our policies)</strong></p>
            <p>A. To return an order, you have to provide a valid reason, such as if the product doesn't match the description or if the product has a manufacturing defect or is damaged. To return a product, you should have all the box contents, the bill, and the box.</p>

            <h2>Return and Refund</h2>
            <p><strong>Return period?</strong></p>
            <p>A. In order to return a product, you should follow our return policy. When it complies with our policy, you have to raise a return request within two days after receiving the order.</p>

            <p><strong>How to return?</strong></p>
            <p>A. You can return by raising a request in your order history by selecting the product you want to return and choosing the return option.</p>

            <p><strong>When will I receive my refund?</strong></p>
            <p>A. Once the product has been picked up, you will get your refund within three working days.</p>

            <p><strong>How long is the return period applicable?</strong></p>
            <p>A. 3 days</p>

            <h2>Account Management</h2>
            <p><strong>How can I update my personal information in the app?</strong></p>
            <p>A. You can update your profile information and delivery address through the "Edit Profile" option in the profile section of the app.</p>

            <p><strong>Is there any tutorial of app functionality?</strong></p>
            <p>A. You can watch app tutorials on our official YouTube channel.</p>

            <p><strong>How to contact customer care?</strong></p>
            <p>A. To contact us, you can email us at <a href="mailto:endlessstore.in.co@gmail.com">endlessstore.in.co@gmail.com</a>.</p>

        </div>
    )
}

export default FaqBody