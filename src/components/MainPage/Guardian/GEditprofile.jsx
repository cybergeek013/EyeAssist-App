import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Gnavbar from "./Gnavbar";
import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";

export default function GEditprofile() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedQualification, setselectedQualification] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleQualificationChange = (event) => {
    setselectedQualification(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        closeModal();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Show the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <Gnavbar />
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 lg:flex lg:justify-evenly pt-10">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-3xl font-semibold leading-7 text-[--dark_green]">
              Student Profile
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 justify-items-center">
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-xl font-medium leading-6 text-[--dark_green] text-center"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-36 w-36 text-gray-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12 max-w-lg p-2 rounded-lg shadow-xl">
            <h2 className="text-base font-semibold leading-7 text-[--dark_green]">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-[--light_green]">
              Fill the personal Information carefully.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>India</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Phone No.
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="phone"
                    id="phone"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    min="1"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    value={selectedGender}
                    onChange={handleGenderChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Qualification Details */}
          <div className="border-b border-gray-900/10 pb-12 p-2 rounded-lg shadow-xl">
            <h2 className="text-base font-semibold leading-7 text-[--dark_green]">
              Qualification
            </h2>
            <p className="mt-1 text-sm leading-6 text-[--light_green]">
              Choose the qualification, specify it, and upload documentation
              supporting the highest qualification.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="highest-qualification"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Highest Qualification
                </label>
                <div className="mt-2">
                  <select
                    value={selectedQualification}
                    onChange={handleQualificationChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm"
                  >
                    <option value="">Select Qualification</option>
                    <option value="below-10th">below 10th grade</option>
                    <option value="10th">10th grade</option>
                    <option value="11th">11th grade</option>
                    <option value="12th">12th grade</option>
                    <option value="ug">Undergraduate</option>
                    <option value="pg">Postgraduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="specify-stream"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Specify Stream/Degree/Course
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="specify-stream"
                    id="specify-stream"
                    autoComplete="specify-stream"
                    placeholder="E.g. Science-(PCM) / B-Tech-(Mech)"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="exam-to-write"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Exam to write
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="exam-to-write"
                    id="exam-to-write"
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="date-of-exam"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Date of Exam
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="date-of-exam"
                    id="date-of-exam"
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-full">
                <label
                  htmlFor="center-of-exam"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Center of Exam
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="center-of-exam"
                    id="center-of-exam"
                    className="block w-full rounded-md border-0 py-1.5 text-[--dark_green] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--orange_color] focus:border-[--orange_color] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="disability-certificate"
                  className="block text-sm font-medium leading-6 text-[--dark_green]"
                >
                  Disability Certificate
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    {previewImage ? (
                      <a
                        href={previewImage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="mx-auto h-36 w-36 text-gray-300"
                        />
                      </a>
                    ) : (
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mt-4 flex text-sm leading-6 text-[--light_green]">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-[--orange_color] focus-within:outline-none focus-within:ring-2 focus-within:ring-[--medium_green] focus-within:ring-offset-2 hover:text-[--medium_green]"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-[--light_green]">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 pb-6 px-10 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-[--dark_green] "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-[--orange_color] px-3 py-2 text-sm font-semibold text-[--dark_green] shadow-sm hover:bg-[--medium_green] hover:text-[--white_color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--medium_green]"
          >
            Save
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-14 left-0 w-full h-full flex items-start justify-center">
            <div className="bg-white rounded-lg p-8 shadow-xl flex border border-[--medium_green]">
              <MdVerified className="text-green-600 pr-2" size={30} />
              <h2 className="text-xl font-bold text-[--dark_green]">
                Info Saved Successfully!
              </h2>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
