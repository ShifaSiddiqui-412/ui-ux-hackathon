import React from "react";
import Image from "next/image";

const JoinPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Nike Logo */}
      <div className="mb-6">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Nike Logo"
          className="w-12 mt-[40px]"
        />
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Become a Nike Member
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        <form>
          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-6">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black sm:text-sm"
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Terms and Conditions */}
          <p className="text-sm text-gray-600 mb-4">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-all"
          >
            JOIN US
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
