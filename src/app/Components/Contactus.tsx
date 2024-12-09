"use client"
import React from "react";
// Updated import paths for components
import { Accordion } from "@/app/Components/Accordion";
import { TextField } from "@/app/Components/TextField";
import { Button } from "@/app/Components/Button";

const ContactUs = () => {
  return (
    <section id="contact" className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col items-center">
        {/* Heading */}
        <header className="text-center">
          <h1 className="text-2xl font-bold text-[#111]">Need Assistance?</h1>
        </header>

        {/* Search Box */}
        <div className="mt-6 w-full flex justify-center">
          <TextField
            placeholder="How can we assist you?"
            className="w-[450px] rounded-md"
          />
        </div>

        {/* FAQ and Contact Information */}
        <div className="flex flex-col lg:flex-row mt-10 gap-10">
          {/* FAQ Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-[#111]">
              Payment Methods for Nike Orders
            </h2>
            <p className="mt-3 text-sm text-[#111]">
              We strive to make shopping seamless. The following payment options are accepted:
            </p>
            <ul className="list-disc mt-4 pl-6 text-sm text-[#111]">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
              <li>Apple Pay</li>
            </ul>
            <p className="mt-4 text-sm text-[#111]">
              Nike Members can save multiple cards for quick checkout. Not a member yet?{" "}
              <a href="#" className="underline">
                Sign up here
              </a>.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <Button color="primary" size="medium" text="Become a Member" />
              <Button color="primary" size="medium" text="Shop Now" />
            </div>

            {/* FAQ Accordion */}
            <div className="mt-8">
              <Accordion
                accordionVariant="default"
                items={[
                  {
                    title: "Can I use multiple payment methods?",
                    content:
                      "No, splitting payment across multiple methods isn't available.",
                  },
                  {
                    title: "What payment is accepted for SNKRS?",
                    content:
                      "All supported credit cards can be used for SNKRS orders.",
                  },
                  {
                    title: "Why isn't Apple Pay visible?",
                    content:
                      "Ensure you're using a compatible Apple device with the latest OS, signed into iCloud, and have a card in Wallet. Safari is required for Apple Pay on Nike.com.",
                  },
                ]}
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-[300px]">
            <h3 className="text-lg font-semibold text-[#111]">Contact Support</h3>
            <ul className="mt-6 text-sm text-[#111] space-y-4">
              <li>Call: 000 800 919 0566</li>
              <li>Support Hours: 24/7 for orders</li>
              <li>Enquiries: 7:30 AM - 4:30 PM, Mon-Fri</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
