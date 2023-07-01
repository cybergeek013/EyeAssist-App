import React, { useState } from "react";
import homeImg from "../../../assets/profileImg.jpg";
import disabilitycerti from "../../../assets/disabilitycerti.pdf";

const SMain = () => {
  const students = [
    {
      id: 1,
      name: "Eddie Munson",
      age: 21,
      gender: "male",
      specific: "4th Semester",
      phone: "9876543210",
      course: "Btech",
      exam: "4th Semester",
      school: "Parul Institute of Enginnering and Technology",
      location: "Vadodara",
      date: "20/01/2020",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      certi: disabilitycerti,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 2,
      name: "Jim Hopper",
      age: 21,
      gender: "male",
      specific: "4th Semester",
      phone: "9876543210",
      course: "Btech",
      exam: "4th Semester",
      school: "Parul Institute of Enginnering and Technology",
      location: "vapi",
      date: "20/01/2020",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      certi: disabilitycerti,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 3,
      name: "Jonathan Byers",
      age: 21,
      gender: "male",
      specific: "4th Semester",
      phone: "9876543210",
      course: "Btech",
      exam: "4th Semester",
      school: "Parul Institute of Enginnering and Technology",
      location: "gandhinagar",
      date: "20/01/2020",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      certi: disabilitycerti,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 4,
      name: "Max Mayfield",
      age: 21,
      gender: "male",
      specific: "4th Semester",
      phone: "9876543210",
      course: "Btech",
      exam: "4th Semester",
      school: "Parul Institute of Enginnering and Technology",
      location: "vapi",
      date: "20/01/2020",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      certi: disabilitycerti,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 5,
      name: "Mike Wheeler",
      age: 21,
      gender: "male",
      specific: "4th Semester",
      phone: "9876543210",
      course: "Btech",
      exam: "4th Semester",
      school: "Parul Institute of Enginnering and Technology",
      location: "surat",
      date: "20/01/2020",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      certi: disabilitycerti,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 6,
      name: "Will Byers",
      age: 21,
      gender: "male",
      specific: "4th Semester",
      phone: "9876543210",
      course: "Btech",
      exam: "4th Semester",
      school: "Parul Institute of Enginnering and Technology",
      location: "vadodara",
      date: "20/01/2020",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      certi: disabilitycerti,
      href: "",
      imageSrc: homeImg,
    },
    {
      id: 7,
      name: "Suzie Hender",
      age: 21,
      gender: "male",
      specific: "4th Semester",
      phone: "9876543210",
      course: "Btech",
      exam: "4th Semester",
      school: "Parul Institute of Enginnering and Technology",
      location: "deesa",
      date: "20/01/2020",
      state: "Gujarat",
      country: "India",
      pin: 385535,
      mail: "billy@gmail.com",
      certi: disabilitycerti,
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
          These students are looking for scribe...
        </h2>
        {/* Render filtered and sorted students */}
        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-2 justify-items-center">
          {sortedStudents.map((student) => (
            <div
              key={student.id}
              className="bg-[--light_green] p-4 w-56 rounded-xl  group relative cursor-pointer"
              onClick={() => openModal(student)}
            >
              {/* Card content */}
              <div className="aspect-h-1 aspect-w-1 w-62 h-40 overflow-hidden group-hover:opacity-80">
                <img
                  src={student.imageSrc}
                  className="h-56 w-80 object-cover rounded object-center "
                  alt=""
                />
              </div>
              <div className="mt-4 flex justify-between group-hover:opacity-80">
                <div>
                  <h3 className="text-xl font-semibold text-[--orange_color]">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {student.name}
                  </h3>
                  <p className="mt-1 text-md text-white">
                    Needs scribe for {student.course} course exam
                  </p>
                  {/* <p className="text-md text-white">On date {student.date}</p>
                  <p className="text-md text-white">In {student.location}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal code */}
        {selectedStudent && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-black opacity-50" />

            <div className="bg-[--dark_green] rounded-lg p-8 z-20 text-[--white_color] lg:w-5/12 lg:h-3/5 h-2/3 overflow-auto">
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

              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="text-[--light_green] text-left">Age</th>
                    <td>: {selectedStudent.age}</td>
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
                      Exam to write
                    </th>
                    <td>: {selectedStudent.exam}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">
                      Date of exam
                    </th>
                    <td>: {selectedStudent.date}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">
                      Center of exam
                    </th>
                    <td>: {selectedStudent.school}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">Location</th>
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
                    <th className="text-[--light_green] text-left">Gender</th>
                    <td>: {selectedStudent.gender}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">Contact</th>
                    <td>: {selectedStudent.phone}</td>
                  </tr>
                  <tr>
                    <th className="text-[--light_green] text-left">
                      Disability Certi.
                    </th>
                    <td>
                      :{" "}
                      <a
                        href={selectedStudent.certi}
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

export default SMain;
