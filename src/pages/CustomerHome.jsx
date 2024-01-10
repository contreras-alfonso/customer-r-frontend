import React, { useState } from "react";
import { ModalFormNewCustomer } from "../components/ModalFormNewCustomer";
import { ContainerTableCustomer } from "../components/ContainerTableCustomer";

export const CustomerHome = () => {
  const [modalFormNewCustomer, setModalFormNewCustomer] = useState(true);

  return (
    <>
      <div className="bg-white shadow py-3 px-5 flex flex-row max-lg:flex-col max-lg:gap-3 justify-between items-center rounded-lg gap-3 mb-5">
        <button
          onClick={() => {
            setModalFormNewCustomer(true);
          }}
          className="bg-emerald-500 rounded-lg py-3 px-5 text-white text-xs hover:bg-emerald-600 duration-300 max-lg:w-full"
        >
          New Customer +
        </button>

        <button className="bg-slate-800 rounded-lg py-3 px-5 text-white text-xs hover:bg-slate-900 duration-300 max-lg:w-full">
          Bonus - Login
        </button>
      </div>

      <ContainerTableCustomer/>

      {modalFormNewCustomer && (
        <ModalFormNewCustomer
          modalFormNewCustomer={modalFormNewCustomer}
          setModalFormNewCustomer={setModalFormNewCustomer}
        />
      )}

    </>
  );
};
