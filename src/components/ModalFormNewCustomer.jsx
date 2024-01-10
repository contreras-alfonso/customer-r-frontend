import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { isFormValid } from "../helpers/herlpers";
import { toast } from "react-toastify";

export const ModalFormNewCustomer = ({
  modalFormNewCustomer,
  setModalFormNewCustomer,
}) => {
  const [inputType, setInputType] = useState("password");
  const [objCustomer, setObjCustomer] = useState({
    dni: "",
    names: "",
    lastnames: "",
    birthdate: "",
    phone: "",
    email: "",
    bank: "",
    otherBank: "",
    accountNumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const {status,msg} = isFormValid(objCustomer.dni,objCustomer.names,objCustomer.lastnames,objCustomer.birthdate,objCustomer.phone,objCustomer.email,objCustomer.bank,objCustomer.otherBank,objCustomer.accountNumber,objCustomer.  password);
    if(!status) return toast.error(msg)
    
  }

  const modifyCustomerState = (e) => {
    const copyObjCustomer = { ...objCustomer, [e.target.name]: e.target.value };
    setObjCustomer(copyObjCustomer);
  };

  return (
    <>
      <Transition appear show={modalFormNewCustomer} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
         
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[700px] transform overflow-hidden rounded-lg bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                      <button onClick={()=>{setModalFormNewCustomer(false)}} className="w-1 h-1 rounded-lg flex items-center justify-center bg-slate-800 text-white p-3 text-sm font-medium hover:text-white/80 duration-300">x</button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="leading-6 text-gray-900 font-black uppercase text-center"
                  >
                    New Customer
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className="bg-white rounded-lg flex flex-col gap-[10px]">
                    <h2 className="leading-6 text-gray-900 font-black uppercase text-center"></h2>
                    <span className="text-xs uppercase font-semibold">DNI</span>
                    <input
                      value={objCustomer.dni}
                      onChange={(e) => {
                        modifyCustomerState(e);
                      }}
                      placeholder=""
                      name="dni"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />
                    <span className="text-xs uppercase font-semibold">
                      Names
                    </span>
                    <input
                      value={objCustomer.names}
                      onChange={(e) => {
                        modifyCustomerState(e);
                      }}
                      placeholder=""
                      name="names"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />
                    <span className="text-xs uppercase font-semibold">
                      Last names
                    </span>
                    <input
                      value={objCustomer.lastnames}
                      onChange={(e) => {
                        modifyCustomerState(e);
                      }}
                      placeholder=""
                      name="lastnames"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />
                    <span className="text-xs uppercase font-semibold">
                      Birthdate
                    </span>
                    <input
                      value={objCustomer.birthdate}
                      onChange={(e) => {
                        modifyCustomerState(e);
                      }}
                      placeholder=""
                      name="birthdate"
                      type="date"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />
                    <span className="text-xs uppercase font-semibold">
                      Phone Number
                    </span>
                    <input
                      value={objCustomer.phone}
                      onChange={(e) => {
                        modifyCustomerState(e);
                      }}
                      placeholder=""
                      name="phone"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />

                    <span className="text-xs uppercase font-semibold">
                      Email
                    </span>
                    <input
                      value={objCustomer.email}
                      onChange={(e) => {
                        modifyCustomerState(e);
                      }}
                      placeholder=""
                      name="email"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />

                    <div className="flex max-md:flex-col min-md:items-center w-full gap-3">
                      <div className="max-md:w-full w-1/3 space-y-[10px]">
                        <span className="text-xs uppercase font-semibold block">
                          Bank
                        </span>
                        <select
                          value={objCustomer.bank}
                          onChange={(e) => {
                            modifyCustomerState(e);
                          }}
                          className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none w-full"
                          name="bank"
                          id=""
                        >
                          <option value="">-- Select --</option>
                          <option value="Banco de Crédito del Perú">
                            Banco de Crédito del Perú
                          </option>
                          <option value="Banco Pichincha">
                            Banco Pichincha
                          </option>
                          <option value="BBVA">BBVA</option>
                          <option value="Banco de la Nación">
                            Banco de la Nación
                          </option>
                          <option value="Interbank">Interbank</option>
                          <option value="MiBanco">MiBanco</option>
                          <option value="Scotiabank Perú">
                            Scotiabank Perú
                          </option>
                          <option value="Banco Falabella">
                            Banco Falabella
                          </option>
                          <option value="Banco Ripley">Banco Ripley</option>
                        </select>
                      </div>

                      <div className="max-md:w-full w-2/3 space-y-[10px]">
                        <span className="text-xs uppercase font-semibold block">
                          Other Bank (If it isn't on the list.)
                        </span>

                        <input
                          onChange={(e) => {
                            modifyCustomerState(e);
                          }}
                          value={objCustomer.otherBank}
                          placeholder="Example: J.P. Morgan Banco de Inversión"
                          name="otherBank"
                          type="text"
                          className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none w-full"
                        />
                      </div>
                    </div>

                    <span className="text-xs uppercase font-semibold">
                      Account Number or CCI number
                    </span>
                    <input
                      value={objCustomer.accountNumber}
                      onChange={(e) => {
                        modifyCustomerState(e);
                      }}
                      placeholder=""
                      name="accountNumber"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />

                    <span className="text-xs uppercase font-semibold">
                      Password (Bonus)
                    </span>
                    <div className="w-full flex border border-gray-300 rounded-lg px-3 py-3">
                      <input
                        value={objCustomer.password}
                        onChange={(e) => {
                          modifyCustomerState(e);
                        }}
                        placeholder=""
                        name="password"
                        type={inputType}
                        className="text-sm focus:outline-none w-full"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          inputType === "password"
                            ? setInputType("text")
                            : setInputType("password");
                        }}
                      >
                        {inputType === 'password' ? (
                          <i className="fa-duotone fa-eye-slash"></i>
                        ) : (
                          <i className="fa-solid fa-eye"></i>
                        )}
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg border border-transparent bg-emerald-500 px-4 py-3 text-sm font-medium uppercase text-white hover:bg-emerald-600 duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 tracking-wider mt-5"
                    >
                      Add Customer
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
