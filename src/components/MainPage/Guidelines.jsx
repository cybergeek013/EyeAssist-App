import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Guidelines = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hideModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("hasAcceptedModal", "true");
  };

  const handleAccept = () => {
    // Logic for accepting the terms
    hideModal();
    navigate("/guardian");
  };

  useEffect(() => {
    const isModalAccepted = localStorage.getItem("isModalAccepted");
    if (!isModalAccepted) {
      setIsModalOpen(true);
    }
  }, []);

  const handleDecline = () => {
    // Logic for declining the terms
    hideModal();
    navigate("/login");
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const isAcceptButtonDisabled = !isChecked;

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[--dark_green] rounded-lg shadow-lg transform transition-all duration-300 lg:max-w-2xl lg:w-full w-11/12">
            <div className="p-4">
              <h3 className="lg:text-3xl text-xl font-semibold text-[--light_green] text-center">
                <u>GUIDELINES</u>
              </h3>
              <h5 className="pt-2 text-lg font-semibold text-[--orange_color] text-center">
                Please read the below guidelines properly
              </h5>
            </div>
            <div className="lg:max-h-96 max-h-64 overflow-auto">
              <ul className="p-10 list-outside text-[--white_color] text-base leading-relaxed list-decimal">
                <li>
                  Those candidates who are blind / low vision with more than 40%
                  disability can use services of a scribe during the written
                  examination.{" "}
                </li>

                <li>
                  The candidate who uses a scribe should produce the candidate's
                  disability certificate issued by the Competent Authority of
                  the Government.
                </li>

                <li>
                  A person to be appointed as scribe should not have obtained
                  his / her qualifications in the same subject (s) as that of
                  the candidate and should be of same or less age than that of
                  the candidate,{" "}
                  <i>
                    i.e., For CSEET, the qualification of Scribe should be 10th
                    Class or Matriculation or pursuing 11th Class, and
                    accordingly..
                  </i>
                </li>

                <li>
                  The candidate who uses a scribe shall be eligible for
                  compensatory time of 20 minutes for every hour of the
                  examination. Therefore 40 minutes of extra time will be
                  provided since the test is of two hours duration.
                </li>

                <li>
                  In case the Scribe is provided by the Institute, the candidate
                  shall be allowed to meet the Scribe at least one day prior to
                  the commencement of examinations.
                </li>

                <li>
                  The candidate opting for scribe shall be responsible for any
                  misconduct on the part of scribe brought by him/her.
                </li>

                <li>
                  The scribe should not put the candidate in emotional or
                  stressful situation during the period of examination
                </li>

                <li>
                  Scribe should maintain distance with candidate prior and after
                  the exam and not to exploit the candidate in any manner.
                </li>

                <li>
                  Scribe shall submit the required declaration/ acceptance in
                  the prescribed format.
                </li>

                <li>
                  Scribe shall follow all instructions, guidelines, directions
                  etc. of the Institute in true letter and spirit
                </li>

                <li>
                  Candidate may be allowed to change the Scribe in case of
                  emergency on the written application of the candidate and its
                  approval from the Institute.
                </li>

                <li>
                  The Centre Superintendent shall have the authority not to
                  allow a particular person to act as Scribe/Writer, if he is
                  satisfied that such a person does not fulfil the criteria for
                  being a Scribe/writer.
                </li>

                <li>
                  The Institute will provide Scribe thro’ Superintendent of
                  Examination centre, if candidate insist to bring his/her own
                  scribe he/she may be allowed to do so subject to the
                  verification of educational qualification by the Centre
                  Superintendent concerned.
                </li>

                <li>
                  In case candidate brings his/her own scribe, he/she should
                  submit a selfdeclaration submitting that the qualification of
                  the scribe is as per the qualification permissible and in case
                  of any concealment of fact/misrepresentation the candidate
                  will be debarred from appearing in the examination in addition
                  to other disciplinary action as per The Company Secretaries
                  Regulations, 1982 as in force.
                </li>

                <li>
                  The scribe will read the questions for the candidate and write
                  answers only as per the dictation of the examinee and the
                  scribe shall not paraphrase, translate, add emphasis or
                  embellish the dictation in any manner, i.e., the scribe shall
                  only transcribe what is dictated to him by the examinee.
                </li>

                <li>
                  Conversation between the candidate and the scribe should not
                  disturb in anyway the peace in the examination hall or the
                  other candidates seated in the examination hall/room.
                </li>

                <li>
                  The scribe should not make any claim or accept any money or
                  money’s worth from the candidate. The honorarium to Scribe
                  shall be paid by the Institute.
                </li>

                <li>
                  The amount shall be paid from the advance given to the Exam
                  Centre . A receipt to this reflect must be submitted to CEE
                  cell along with other bills.
                </li>
              </ul>
            </div>
            <div>
              <label htmlFor="termsCheckbox" className="flex items-center">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="ml-4 mt-2.5 h-4 w-4 text-[--light_green] focus:ring-[--medium_green] border-gray-300 rounded"
                />
                <span className="text-base pl-4 pt-2.5 text-[--orange_color] font-bold">
                  I accept the terms and conditions
                </span>
              </label>
              <p className="pl-10 text-red-600">
                *
                <span className="text-xs">
                  If you decline, you will be back to the loginpage.
                </span>
              </p>
            </div>
            <div className="flex items-center justify-end p-4 bg-[--dark_green] rounded-b-lg">
              <button
                type="button"
                disabled={isAcceptButtonDisabled}
                className="text-[--dark_green]  bg-[--orange_color] hover:bg-[--light_green] focus:ring-4 focus:outline-none focus:ring-[--orange_color] font-bold hover:text-[--white_color] rounded-lg text-sm px-5 py-2.5"
                onClick={handleAccept}
              >
                I accept
              </button>
              <button
                type="button"
                className="text-[--dark_green] hover:text-[--white_color] bg-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-bold px-5 py-2.5 ml-2"
                onClick={handleDecline}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guidelines;
