import React from 'react'

const SubscriptionContainer  = () => {
  return (
    <div className='SubscriptionContainer'>
      <div className='SubscriptionFrame'>
        <div className='SubscriptionText'>
            <div>Ready to start?</div>
            <div>Launch a site for free. Choose a site plan to unlock more features.</div>
            <div/>
        </div>
        <div className='SubscriptionListFrame'>
          <div className='optionBox1'>
              <div className='optionTitle'>Free plan</div>
              <div className='optionPrice'>$15/mo</div>
              <div className='benefitsSummary'>
                <div>Up to 3 projects</div>
                <div/>
              </div>
              <div className='optionBenefitList'>
                <div>Custom domain</div>
                <div>Password protect</div>
                <div>10GB bandwidth</div>
                <div>1,000 CMS items</div>
                <div>10,000 visitors</div>
              </div>
              <div className='option1BuyButton'>Try for free</div>
          </div>
          <div className='optionBox2'>
            <div className='recommendedMark'>Popular</div>
          <div className='optionTitle'>Basic plan</div>
              <div className='optionPrice'>$30/mo</div>
              <div className='benefitsSummary'>
                <div>Billed yearly</div>
                <div/>
              </div>
              <div className='optionBenefitList'>
                <div>Custom domain</div>
                <div>Password protect</div>
                <div>10GB bandwidth</div>
                <div>1,000 CMS items</div>
                <div>10,000 visitors</div>
              </div>
              <div className='option1BuyButton'>Subscribe</div>
          </div>
          <div className='optionBox3'>
            <div className='optionTitle'>Pro plan</div>
                <div className='optionPrice'>$45/mo</div>
                <div className='benefitsSummary'>
                  <div>Billed yearly</div>
                  <div/>
                </div>
                <div className='optionBenefitList'>
                  <div>Custom domain</div>
                  <div>Password protect</div>
                  <div>10GB bandwidth</div>
                  <div>1,000 CMS items</div>
                  <div>10,000 visitors</div>
                </div>
                <div className='option1BuyButton'>Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionContainer