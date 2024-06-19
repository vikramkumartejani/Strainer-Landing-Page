'use client'

export default function Pricing() {
  return (
    <div className='w-full max-w-[1440px] mx-auto my-40 font-gilroy-medium'>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table pricing-table-id="prctbl_1PLTTrGvwN4VfHTr6weJLBwj"
        publishable-key="pk_live_51NAatoGvwN4VfHTr04WYCpJpSInLOcuNMsvPe0waB56lSuDguskMqDyHPSRaPXlUpAYUiACpyg9ICHmyeNChtQoP00dlTnqUZF">
      </stripe-pricing-table>
    </div>
  );
}
