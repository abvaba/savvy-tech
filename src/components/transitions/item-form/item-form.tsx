import {Loading} from "@components/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formSelector, resetFormData } from "@store/slices/form-slice";
import { useCreateItemMutation, useUpdateItemMutation } from "@store/items-api";
import { closeModal } from "@store/slices/modal-slice";
import _ from './item-form.module.scss';
interface FormData {
  title: string;
  subTitle: string;
}

const ItemForm = () => {
  const { id, title, subTitle } = useSelector(formSelector);
  const dispatch = useDispatch();
  const [createItem, { isLoading: isCreating }] = useCreateItemMutation();
  const [updateItem, { isLoading: isUpdating }] = useUpdateItemMutation();

  const isLoading = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    setValue,
    watch
  } = useForm<FormData>({
    defaultValues: {
      title: title || "",
      subTitle: subTitle || ""
    },
    mode: "onChange"
  });

  const watchedTitle = watch("title");
  const watchedSubTitle = watch("subTitle");

  React.useEffect(() => {
    if (title) setValue("title", title);
    if (subTitle) setValue("subTitle", subTitle);
  }, [title, subTitle, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      if (id && id.length !== 0) {
        await updateItem({
          id,
          data: {
            title: data.title.trim(),
            subTitle: data.subTitle.trim()
          }
        }).unwrap();
      } else {
        await createItem({
          title: data.title.trim(),
          subTitle: data.subTitle.trim()
        }).unwrap();
      }

      reset();
      dispatch(resetFormData());
      dispatch(closeModal());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    reset();
    dispatch(resetFormData());
    dispatch(closeModal());
  };

  const titleCharacterCount = watchedTitle?.length || 0;
  const subTitleCharacterCount = watchedSubTitle?.length || 0;
  const maxTitleLength = 100;
  const maxSubTitleLength = 500;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={_.formGroup}>
        <label htmlFor="title" className={_.fieldLabel}>
          title
        </label>
        <input
          id="title"
          type="text"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters"
            },
            maxLength: {
              value: maxTitleLength,
              message: `Title must be less than ${maxTitleLength} characters`
            },
            validate: {
              notEmpty: (value) =>
                value.trim().length > 0 || "Title cannot be empty",
              notOnlySpaces: (value) =>
                value.replace(/\s/g, '').length > 0 || "Title cannot be only spaces"
            }
          })}
          className={`${_.field} ${errors.title ? 'border-red-500' : 'border-gray-300 focus:border-violet-500'} h-10`}
          placeholder="Enter item title"
          disabled={isLoading}
        />
        <div className={_.errorWrapper}>

        {errors.title ?
          <span className={_.errorMessage}>
            {errors.title.message}
          </span>
        : null}
        <span className={`${titleCharacterCount > maxTitleLength || titleCharacterCount < 3 ? 'text-red-500' : 'text-green-500'}`}>
          {titleCharacterCount}/{maxTitleLength}
        </span>
        </div>
      </div>

      <div className={`${_.formGroup} my-4`}>
        <label htmlFor="subTitle" className={_.fieldLabel}>
          Subtitle
        </label>
        <textarea
          id="subTitle"
          {...register("subTitle", {
            required: "Subtitle is required",
            minLength: {
              value: 3,
              message: "Subtitle must be at least 3 characters"
            },
            maxLength: {
              value: maxSubTitleLength,
              message: `Subtitle must be less than ${maxSubTitleLength} characters`
            },
            validate: {
              notEmpty: (value) =>
                value.trim().length > 0 || "Subtitle cannot be empty",
              notOnlySpaces: (value) =>
                value.replace(/\s/g, '').length > 0 || "Subtitle cannot be only spaces"
            }
          })}
          className={`${_.field} ${errors.subTitle ? 'border-red-500' : 'border-gray-300 focus:border-violet-500'} resize-none`}
          placeholder="Enter item subtitle"
          rows={4}
          disabled={isLoading}
        />
        <div className={_.errorWrapper}>
          {errors.subTitle ?
            <span className={_.errorMessage}>
            {errors.subTitle.message}
          </span>
            : null}
          <span className={`${subTitleCharacterCount > maxSubTitleLength || subTitleCharacterCount < 3 ? 'text-red-500' : 'text-green-500'}`}>
            {subTitleCharacterCount}/{maxSubTitleLength}
          </span>
        </div>
      </div>

      <div className={_.formActions}>
        <button
          type="button"
          onClick={handleCancel}
            disabled={isLoading}
            className={`${_.cancelBtn} btn`}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading || !isValid || !isDirty}
            className={`${_.submitBtn} btn`}
          >

            {isLoading ? (
              <Loading/>
            ) : (
              id ? "Update Item" : "Create Item"
            )}
          </button>
        </div>
    </form>
);
};

export {
  ItemForm
};
