import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      {/* Header */}
      <header className="pb-6 border-b">
        <h1 className= "text-center mb-2 text-xl font-bold">GET HELP</h1>
        <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="border rounded-lg px-4 py-2 w-64 text-center"
        />
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="mb-4">
            We want to make buying your favorite Nike shoes and gear online fast and easy, and we
            accept the following payment options:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-4">
            Nike Members can store multiple debit or credit cards in their profile for faster
            checkout. If youre not already a Member,{ }
            <Link href="/Components/joinus" className="underline text-blue-600">
              join us today
            </Link>
            .
          </p>
          <div className="flex space-x-4 mb-8">
            <Link
              href="/Components/joinus"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              JOIN US
            </Link>
            <Link
              href="/shop"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              SHOP NIKE
            </Link>
          </div>

          {/* FAQs */}
          <h3 className="text-xl font-semibold mb-4">FAQs</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">
                Does my card need international purchases enabled?
              </p>
              <p className="text-sm text-gray-600">
                Yes, we recommend asking your bank to enable international purchases on your card.
                You will be notified at checkout if international purchases need to be enabled.
              </p>
            </div>
            <div>
              <p className="font-medium">Can I pay for my order with multiple methods?</p>
              <p className="text-sm text-gray-600">
                No, payment for Nike orders cant be split between multiple payment methods.
              </p>
            </div>
            <div>
              <p className="font-medium">
                What payment method is accepted for SNKRS orders?
              </p>
              <p className="text-sm text-gray-600">
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>
            <div>
              <p className="font-medium">Why don’t I see Apple Pay as an option?</p>
              <p className="text-sm text-gray-600">
                To see Apple Pay as an option in the Nike App or on Nike.com, youll need a
                compatible Apple device running the latest OS, be signed in to your iCloud account,
                and have it set up in your wallet.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-6">
            <li>
              <p className="font-medium">000 800 919 0666</p>
              <p className="text-sm text-gray-600">Products & Orders: 24 hours a day, 7 days a week</p>
            </li>
            <li>
              <p className="font-medium">Company Info & Enquiries</p>
              <p className="text-sm text-gray-600">07:30 - 16:30, Monday - Friday</p>
            </li>
            <li>
              <p className="font-medium">Email Us</p>
              <p className="text-sm text-gray-600">We’ll reply within five business days.</p>
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">STORE LOCATOR</h4>
            <Link
              href="/Components/store-locator"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Find Nike retail stores near you
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
