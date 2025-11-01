import {useSelector} from "react-redux";
import {modalSelector} from "@store/slices/modal-slice";
import _ from './modal.module.scss';
const Modal = ({...props}) => {
  const {children} = props;
  const {open, title} = useSelector(modalSelector);
  if (!open) return null;
  return (
    <section className={_.wrapper}>
      <div className={_.modalBg}/>
      <main className={_.modal}>
        <header className={_.modalTitle}>{title}</header>
        <hr/>
        <section>
          {children}
        </section>
      </main>
    </section>
  );
};

export {Modal};
