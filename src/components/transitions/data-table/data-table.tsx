import {Table} from "@components/common";
import {useDeleteItemMutation, useGetItemsQuery} from "@store/items-api";
import {Guage, Pen, Trash, Calendar, Clock, Loading} from "@components/icons";
import {NoData} from "@components/transitions";
import {useState} from "react";
import {formatDate, formatTime} from "@utils";
import {useDispatch} from "react-redux";
import {openModal} from "@store/slices/modal-slice";
import type {Item} from '@types';
import {setFormData} from "@store/slices/form-slice";
import Lottie from "react-lottie";
import animationData from '@assets/Searching.json';
import _ from './data-table.module.scss';
const DataTable = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const {
    data,
    isLoading
  } = useGetItemsQuery();
  const [deleteItem] = useDeleteItemMutation();
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());
  const dispatch = useDispatch();

  const openEditModal = (data: Item) => {
    dispatch(openModal({title: `edit ${data.title}`}));
    dispatch(setFormData({
      id: data.id,
      title: data.title,
      subTitle: data.subTitle
    }));
  }
  const deleteItemAction = async (id: string) => {
    setDeletingIds(prev => new Set(prev).add(id));
    try {
      await deleteItem(id).unwrap();
    } catch (error) {
      console.error('Failed to delete item:', error);
    } finally {
      setDeletingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  }
  const info = {
    head: <tr className="bg-gray-50">
      <th className={`${_.headCell} text-left`}>title</th>
      <th className={`${_.headCell} text-left`}>subtitle</th>
      <th className={`${_.headCell} text-center`}>date created</th>
      <th className={_.headCellActionWrapper}>
        <span>
          <Guage />
        </span>
      </th>
    </tr>,
    body: data?.map((item, index) => <tr
      key={item.id}
      className={`${_.row} ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
    >
      <td className={`${_.bodyCell} px-1`}>{item.title}</td>
      <td className={`${_.bodyCell} ${_.subTitleCell}`}>{item.subTitle}</td>
      <td>
        <span className={_.dateCreatedCell}>
          <span className={_.dateCreatedCellItem}><Calendar />{formatDate(item.createdAt)}</span>
          <span className={_.dateCreatedCellItem}><Clock />{formatTime(item.createdAt)}</span>
        </span>
      </td>
      <td className='px-4'>
        <span className={_.actionCellWrapper}>
          <button
            onClick={() => openEditModal(item)}
            disabled={deletingIds.has(item.id)}
            className={`${_.actionBtn} ${_.actionBtnEdit}`}
          ><Pen /></button>
          <button
            onClick={() => deleteItemAction(item.id)}
            disabled={deletingIds.has(item.id)}
            className={`${_.actionBtn} ${_.actionBtnDelete}`}
          >
            {deletingIds.has(item.id) ? <Loading /> : <Trash />}
          </button>
        </span>
      </td>
    </tr>)
  }
  return (
    <section className={_.wrapper}>
      {isLoading ? <Lottie
        options={defaultOptions}
        height={200}
        width={600}
      /> : data?.length === 0
        ? <div className={_.noDataSection}><NoData /><h6>There is no data to show!</h6></div>
        : <Table {...info} />
      }
    </section>
  );
};

export {DataTable};
