import {Add} from "@components/icons";
import {useDispatch} from "react-redux";
import {openModal} from "@store/slices/modal-slice";
import {resetFormData} from "@store/slices/form-slice";
import _ from './table-header.module.scss';
const TableHeader = () => {
  const dispatch = useDispatch();
  const openCreateModal = () => {
    dispatch(openModal({title: 'create new item'}));
    dispatch(resetFormData());
  }
  return (
    <section className={_.wrapper}>
      <h3>Table of items</h3>
      <button
        onClick={() => openCreateModal()}
        className={`${_.addBtn} btn`}
      >
        <Add />
        create new item
      </button>
    </section>
  );
};

export {TableHeader};
