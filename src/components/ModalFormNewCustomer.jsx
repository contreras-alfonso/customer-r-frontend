import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const ModalFormNewCustomer = ({
  modalFormNewCustomer,
  setModalFormNewCustomer,
}) => {
  const [objCustomer, setObjCustomer] = useState({
    dni: "",
    names: "",
    lastnames: "",
    birthdate: "",
    phone: "",
    email: "",
    bank: "",
    otherBank: "",
    acountNumber: "",
    password: "",
  });

  return (
    <>
      <Transition appear show={modalFormNewCustomer} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setModalFormNewCustomer(false);
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
                  <Dialog.Title
                    as="h3"
                    className="leading-6 text-gray-900 font-black uppercase text-center"
                  >
                    New Customer
                  </Dialog.Title>
                  <form className="bg-white rounded-lg flex flex-col gap-[10px]">
                    <h2 className="leading-6 text-gray-900 font-black uppercase text-center"></h2>
                    <span className="text-xs uppercase font-semibold">DNI</span>
                    <input
                      value={objCustomer.dni}
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
                      placeholder=""
                      name="lastNames"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />
                    <span className="text-xs uppercase font-semibold">
                      Birthdate
                    </span>
                    <input
                      value={objCustomer.birthdate}
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
                          Other Bank
                        </span>

                        <input
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
                      value={objCustomer.acountNumber}
                      placeholder=""
                      name="acountNumber"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />

                    <span className="text-xs uppercase font-semibold">
                      Password (Bonus)
                    </span>
                    <input
                      value={objCustomer.password}
                      placeholder=""
                      name="password"
                      type="text"
                      className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
                    />

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
