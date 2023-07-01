import React, { useState } from "react";
import homeImg from "../../../assets/profileImg.jpg";
import previewImage from "../../../assets/previewImage.jpg";

const GMain = () => {
  const students = [
    {
      id: 1,
      name: "Billy Hargrove",
      age: 21,
      gender: "male",
      phone: "9876543210",
      course: "Btech",
      specific: "4th Semester",
      experience: 2,
      location: "Vadodara",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      Proof: previewImage,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 2,
      name: "Eleven Byers",
      age: 21,
      gender: "Female",
      phone: "9876543210",
      course: "Btech",
      specific: "4th Semester",
      experience: 2,
      location: "Vapi",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      Proof: previewImage,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 3,
      name: "Erica Sinclair",
      age: 21,
      gender: "Female",
      phone: "9876543210",
      course: "Btech",
      specific: "4th Semester",
      experience: 2,
      location: "surat",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      Proof: previewImage,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 4,
      name: "Dustin Hender",
      age: 21,
      gender: "male",
      phone: "9876543210",
      course: "Btech",
      specific: "4th Semester",
      experience: 2,
      location: "deesa",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      Proof: previewImage,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 5,
      name: "Nancy Wheler",
      age: 21,
      gender: "Female",
      phone: "9876543210",
      course: "Btech",
      specific: "4th Semester",
      experience: 2,
      location: "ahmedabad",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      Proof: previewImage,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 6,
      name: "Lucus Sinclair",
      age: 21,
      gender: "male",
      phone: "9876543210",
      course: "Btech",
      specific: "4th Semester",
      experience: 2,
      location: "vapi",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      Proof: previewImage,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 7,
      name: "Steve Harring",
      age: 21,
      gender: "male",
      phone: "9876543210",
      course: "Btech",
      specific: "4th Semester",
      experience: 2,
      location: "vadodara",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      Proof: previewImage,
      href: "",
      imageSrc: homeImg,
    },
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");

  const openModal = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  const handleSearch = (e) => {
    setSearchLocation(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const sortedStudents = filteredStudents.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="bg-white-700">
      <div className="relative mt-8 text-center">
        <input
          type="text"
          placeholder="Search based on Location"
          className="px-4 py-2 w-80 rounded-full border-2 border-[--dark_green] bg-[--white_color] text-[--dark_green] focus:ring-2 focus:ring-[--orange_color] focus:border-[--orange_color]"
          value={searchLocation}
          onChange={handleSearch}
        />
      </div>
      <div className="mx-auto max-w-2xl px-10 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center mb-14 font-bold tracking-tight">
          These scribes are available...
        </h2>
        {/* Render filtered and sorted students */}
        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-2">
          {sortedStudents.map((student) => (
            <div
              key={student.id}
              className="bg-[--light_green] p-4 rounded-xl justify-self-center group relative cursor-pointer"
              onClick={() => openModal(student)}
            >
              {/* Card content */}
              <div className="aspect-h-1 aspect-w-1 w-62 h-40 overflow-hidden group-hover:opacity-80 ">
                <img
                  src={student.imageSrc}
                  className="h-40 w-62 object-cover rounded object-center "
                  alt=""
                />
              </div>
              <div className="mt-4 flex justify-between group-hover:opacity-80">
                <div>
                  <h3 className="text-xl font-semibold text-[--orange_color]">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {student.name}
                  </h3>
                  <p className="text-md text-white">From {student.location}</p>
                  {/* <p className="mt-1 text-md text-white">
                    Needs scribe for {student.course} course exam
                  </p>
                  <p className="text-md text-white">On date {student.date}</p> */}
                  <p className="text-md text-white">is available as Scribe</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal code */}
        {selectedStudent && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-black opacity-50" />

            <div className="bg-[--dark_green] rounded-lg p-8 z-20 text-[--white_color] lg:w-4/12 lg:h-3/5 overflow-auto">
              <div className="flex justify-between mb-6 text-[--orange_color]">
                <h2 className="text-xl font-bold">{selectedStudent.name}</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>

              <img
                src={selectedStudent.imageSrc}
                className="max-h-16 max-w-1 object-cover object-center lg:ax-h-16 lg:max-w-1 mb-10"
                alt=""
              />

              <table className="w-full ">
                <tbody>
                  <tr>
                    <th className="text-[--light_green] text-left">Age</th>
                    <td>: {selectedStudent.age}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">Gender</th>
                    <td>: {selectedStudent.gender}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">
                      Highest Qualification
                    </th>
                    <td>: {selectedStudent.course}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">
                      Specific Qualification
                    </th>
                    <td>: {selectedStudent.specific}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">
                      Scribe Experience
                    </th>
                    <td>: {selectedStudent.experience}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">City</th>
                    <td>: {selectedStudent.location}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">State</th>
                    <td>: {selectedStudent.state}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">Country</th>
                    <td>: {selectedStudent.country}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">PIN Code</th>
                    <td>: {selectedStudent.pin}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">Email</th>
                    <td>: {selectedStudent.mail}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">Contact</th>
                    <td>: {selectedStudent.phone}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">
                      Proof of max Qual.
                    </th>
                    <td>
                      :{" "}
                      <a
                        href={selectedStudent.Proof}
                        target="_blank"
                        className="hover:text-[--light_green] text-[--orange_color]"
                      >
                        Preview
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <button className="mt-5 text-[--white_color] bg-[--light_green] font-bold p-2 rounded hover:text-[--dark_green]">
                Connect with {selectedStudent.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GMain;
