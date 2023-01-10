import { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Select from 'react-select';
import toast from 'react-hot-toast';
import { useAddPostMutation, useGetUsersQuery } from 'store';
import { Button } from 'components/Button';

interface Props {
  onClose?: () => void;
}

interface FormData {
  selectedUser: { value: number };
  title: string;
  body: string;
}

export const NewPost: React.FC<Props> = ({ onClose }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [
    triggerAdd,
    { isLoading: isAdding, isSuccess: isAddSuccess, isError: isAddError },
  ] = useAddPostMutation();
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();

  // show toasts
  useEffect(() => {
    if (isAddSuccess) {
      toast.success('New post successfully saved!');
      onClose?.();
    }
    if (isAddError) {
      toast.error('New post was not saved, please try again...');
    }
  }, [isAddSuccess, isAddError]);

  // handle button clicks
  const handleFormSubmit: SubmitHandler<FormData> = ({
    title,
    body,
    selectedUser: { value: userId },
  }) => {
    triggerAdd({ title, body, userId });
  };

  const handleClose = () => {
    onClose?.();
  };

  // prepare options for <Select />
  const userOptions = users?.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h2 className="font-semibold text-xl text-center">New post</h2>

      <label>
        <span className="text-middle">Author</span>
        <Controller
          name="selectedUser"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              classNames={{
                control: state =>
                  `w-full p-2 bg-light border rounded-lg outline-0 ${
                    state.isFocused ? 'border-accent' : 'border-transparent'
                  }`,
                menu: _ =>
                  'mt-2 bg-white rounded-lg border border-accent shadow overflow-hidden',
                menuList: _ => '!max-h-[10rem]',
                option: state =>
                  `p-2 cursor-pointer ${state.isFocused ? 'bg-light' : ''} ${
                    state.isSelected ? 'text-white bg-accent' : ''
                  } `,
                noOptionsMessage: _ => 'p-2 text-alert',
                indicatorsContainer: state =>
                  `${state.isDisabled ? 'text-middle' : 'text-accent'}`,
              }}
              {...field}
              options={userOptions}
              noOptionsMessage={_ => 'No users found'}
              autoFocus={true}
              isClearable={false}
              isLoading={isUsersLoading}
              isDisabled={isAdding}
              placeholder=""
              unstyled
            />
          )}
        />
        {errors.selectedUser && (
          <p className="text-sm text-alert">Author is required</p>
        )}
      </label>

      <label>
        <span className="text-middle">Title</span>
        <input
          className="w-full p-2 bg-light border border-transparent rounded-lg outline-0
        focus:border-accent"
          {...register('title', { required: true })}
          type="text"
          disabled={isAdding}
        />
        {errors.title && (
          <p className="text-sm text-alert">Title is required</p>
        )}
      </label>

      <label>
        <span className="text-middle">Text</span>
        <textarea
          className="w-full p-2 bg-light border border-transparent rounded-lg outline-0 resize-none
        focus:border-accent"
          {...register('body')}
          cols={40}
          rows={10}
          disabled={isAdding}
        ></textarea>
      </label>

      <div className="flex justify-center gap-4">
        <Button type="submit" disabled={isAdding}>
          Save
        </Button>
        <Button type="button" disabled={isAdding} onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
