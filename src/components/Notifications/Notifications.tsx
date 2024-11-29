import classNames from 'classnames';

type Props = {
  errorMessage: string;
};

export const Notifications: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification is-danger is-light has-text-weight-normal',
        { hidden: !errorMessage },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={close}
      />
      {errorMessage}
    </div>
  );
};
