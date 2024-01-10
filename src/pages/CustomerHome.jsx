import React, { useState } from "react";
import { ModalFormNewCustomer } from "../components/ModalFormNewCustomer";
import { ContainerTableCustomer } from "../components/ContainerTableCustomer";
import { Link } from "react-router-dom";

export const CustomerHome = () => {
  const [modalFormNewCustomer, setModalFormNewCustomer] = useState(false);

  return (
    <>
      <main className="p-5 bg-color-bg h-screen overflow-y-auto">
        <div className="bg-white shadow py-3 px-5 flex flex-row max-lg:flex-col max-lg:gap-3 justify-between items-center rounded-lg gap-3 mb-5">
          <button
            onClick={() => {
              setModalFormNewCustomer(true);
            }}
            className="bg-emerald-500 rounded-lg py-3 px-5 text-white text-xs hover:bg-emerald-600 duration-300 max-lg:w-full"
          >
            New Customer +
          </button>

          <Link to={'/login'} className="bg-slate-800 rounded-lg py-3 px-5 text-white text-xs hover:bg-slate-900 duration-300 max-lg:w-full">
            Bonus - Login
          </Link>
        </div>

        <ContainerTableCustomer />

        {modalFormNewCustomer && (
          <ModalFormNewCustomer
            modalFormNewCustomer={modalFormNewCustomer}
            setModalFormNewCustomer={setModalFormNewCustomer}
          />
        )}
      </main>
    </>
  );
};
