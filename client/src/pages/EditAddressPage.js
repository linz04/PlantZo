import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import LabelContainer from "../components/LabelContainer";
import UserFormInput from "../components/UserFormInput";

import { selectCurrentUser } from "../redux/user/user.selectors";

const EditAddressPage = () => {
  const [address, setAddress] = useState("");

  const currentUser = useSelector((state) => selectCurrentUser(state));

  const {
    pid,
    address:
      addressBefored = "Kampus IPB, Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kota Bogor, Jawa Barat 16680",
  } = currentUser;

  const handleChange = (e) => {
    const { value } = e.target;

    setAddress(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // CATATAN belum bisa connect
    axios.post("api/user/address", { pid, address }).then((res) => {
      setAddress("");

      console.log(res.data);
    });
  };

  return (
    <div className="flex-1">
      <LabelContainer>
        <div className="flex flex-col flex-1 space-y-2">
          <div className="mb-4">ALAMAT SEBELUM</div>
          <UserFormInput
            type="text"
            name="addressBefored"
            value={addressBefored}
            required
            large
            disabled
          />
        </div>
      </LabelContainer>
      <LabelContainer>
        <div className="flex flex-col flex-1 space-y-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">ALAMAT SESUDAH</div>
            <UserFormInput
              type="text"
              name="address"
              value={address}
              required
              large
              handleChange={handleChange}
            />
            <div className="flex flex-1 justify-end mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-green-400 text-gray-800"
              >
                Edit Alamat
              </button>
            </div>
          </form>
        </div>
      </LabelContainer>
    </div>
  );
};

export default EditAddressPage;
