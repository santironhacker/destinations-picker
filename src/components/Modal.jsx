import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, openProp, onCloseModal }) {
  const dialog = useRef();

  useEffect(() => {
    if (openProp) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [openProp]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onCloseModal}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
