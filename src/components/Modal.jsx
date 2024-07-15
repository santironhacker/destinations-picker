import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, openProp }) {
  const dialog = useRef();

  useEffect(() => {
    if (openProp) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [openProp]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
