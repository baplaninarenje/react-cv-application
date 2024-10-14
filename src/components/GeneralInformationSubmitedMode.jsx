export default function GeneralInformationSubmitedMode({
  name,
  email,
  phoneNumber,
}) {
  return (
    <div>
      <div>
        <span>Name:</span>
        <p>{name}</p>
      </div>
      <div>
        <span>Email:</span>
        <p>{email}</p>
      </div>
      <div>
        <span>Phone Number:</span>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
}
