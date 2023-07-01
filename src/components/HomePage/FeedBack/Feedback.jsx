import React from "react";
import "./feedback.css";

const Feedback = () => {
  return (
    <div id="feedback" className="container mt-5">
      <h2 className="text-[--medium_green] text-4xl text-center font-[--font-bold] pt-20 pb-6">
        Share your Feedback
      </h2>

      <div className="container mx-auto text-[--orange_color] text-base text-center px-6 sm:px-10 md:px-16 lg:px-32 2xl:px-96">
        Have questions or want to learn more about our services? We would love
        to hear from you. Please reach out to our team at{" "}
        <a href="#" className="text-[--medium_green]">
          eyeassist@support.com
        </a>
        , and we will be happy to assist you.
      </div>

      <div className="container px-6 flex-wrap sm:px-10 md:px-16 lg:px-32 flex sm:flex-nowrap justify-center py-16">
        <div className="m-2">
          <div className="text-2xl sm:text-3xl text-center font-semibold font-sans text-[--light_green]">
            Talk to us
          </div>
          <div className="flex flex-col p-6 gap-y-4 sm:p-10">
            <div className="bg-[--orange_color] text-[--dark_green] rounded-lg p-2 sm:w-60">
              <div className="text-xl font-semibold text-[--medium_green]">
                Email
              </div>
              <div className="text-base pt-3">eyeassist@gmail.com</div>
              <div className="pt-1 text-base text-[--white_color]">
                <a href="#">Write me</a>
              </div>
            </div>

            <div className="bg-[--orange_color] rounded-lg p-2 sm:w-60">
              <div className="text-xl font-semibold text-[--medium_green]">
                Whatsapp
              </div>
              <div className="text-base pt-3">932XXXXXXX</div>
              <div className="pt-1 text-base text-[--white_color]">
                <a href="#">Write me</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[--light_green] rounded-lg m-2 mb-10">
          <form>
            <h3 className="text-2xl sm:text-3xl font-semibold font-sans text-center pt-5 text-[--orange_color]">
              Let us know
            </h3>
            <div className="flex flex-col py-6 sm:py-10 mx-4 sm:mx-8">
              <div className="pt-2 grid grid-cols-1 gap-y-5 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="block w-full rounded-md border border-[--light_green] py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--light_green] sm:text-sm sm:leading-6"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <div className="">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--light_green] sm:text-sm sm:leading-6"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--light_green] sm:text-sm sm:leading-6"
                      placeholder="Write here"
                      defaultValue={""}
                    />
                  </div>

                  <div className="mt-6 flex  gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-[--orange_color] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[--medium_green] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--light_green]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
