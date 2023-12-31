import { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';
import toast from 'react-hot-toast';
import { useAddPostMutation, useGetUsersQuery } from 'store';
import { Button } from 'components/Button';
import { User } from 'types';

interface Props {
  selectedUserId?: User['id'];
  onClose?: () => void;
}

interface FormData {
  selectedUser: { value: number };
  title: string;
  body: string;
}

const schema = yup.object({
  selectedUser: yup.object().required('Author is required'),
  title: yup
    .string()
    .min(8, 'Title must contain at least eight characters')
    .required('Title is required'),
});

export const NewPostForm: React.FC<Props> = ({ selectedUserId, onClose }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
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
    selectedUser,
  }) => {
    const userId = selectedUserId ?? selectedUser.value;
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
  const selectedUserOption = userOptions?.find(
    option => option.value === selectedUserId
  );
  const isSelectDisabled = isAdding || Boolean(selectedUserOption);

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
          defaultValue={selectedUserOption}
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
              defaultValue={selectedUserOption}
              noOptionsMessage={_ => 'No users found'}
              autoFocus={true}
              isClearable={false}
              isLoading={isUsersLoading}
              isDisabled={isSelectDisabled}
              placeholder=""
              unstyled
            />
          )}
        />
        <p className="text-sm text-alert">{errors.selectedUser?.message}</p>
      </label>

      <label>
        <span className="text-middle">Title</span>
        <input
          className="w-full p-2 bg-light border border-transparent rounded-lg outline-0
        focus:border-accent"
          {...register('title')}
          type="text"
          disabled={isAdding}
          autoFocus={true}
        />
        <p className="text-sm text-alert">{errors.title?.message}</p>
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
