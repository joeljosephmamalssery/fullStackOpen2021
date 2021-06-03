const Notification = ({ message, errorMessageType }) => {
  if (message === null) {
    return null;
  }
  return (
    <>
      {errorMessageType ? (
        <div className="error">{message}</div>
      ) : (
        <div className="success">{message}</div>
      )}
    </>
  );
};

export default Notification;
