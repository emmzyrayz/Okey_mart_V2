import './checkout.css';

export default function Checkout() {
    return(
        <div className="checkout_section">
            <div className="checkout_nav flex flex-row gap-1">
                <span className='faint'>Account</span>
                <span className="faint">/</span>
                <span className="faint">My Account</span>
                <span className="faint">/</span>
                <span className="faint">Product</span>
                <span className="faint">/</span>
                <span className="faint">View Cart</span>
                <span className="faint">/</span>
                <span className="full">CheckOut</span>
            </div>
            <div className="checkout_container">
                <div className="checkout_head">Billing Details</div>
                <div className="checkout_con"></div>
            </div>
        </div>
    )
}