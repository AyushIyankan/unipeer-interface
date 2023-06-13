import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PaymentMode from "./paymentmode";
import PaymentAddress from "./paymentaddress";

export default function PaymentModeModal() {
  const [activeModalComponent, setActiveModalComponent] = useState("mode");
  const [activePaymentIndex, setActivePaymentIndex] = useState(0);

  return (
    <>
      {activeModalComponent === "mode" ? (
        <PaymentMode
          activeModalComponent={activeModalComponent}
          setActiveModalComponent={setActiveModalComponent}
        />
      ) : (
        <PaymentAddress
          activeModalComponent={activeModalComponent}
          setActiveModalComponent={setActiveModalComponent}
        />
      )}
    </>
  );
}
