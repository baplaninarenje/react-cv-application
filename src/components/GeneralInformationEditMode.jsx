export default function GeneralInformationEditMode({
  name,
  email,
  phoneNumber,
  onNameChange,
  onEmailChange,
  onPhoneNumberChange,
}) {
  return (
    <form>
      <label>
        <span>Name:</span>
        <input
          onChange={(e) => onNameChange(e.target.value)}
          type="text"
          value={name}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          onChange={(e) => onEmailChange(e.target.value)}
          type="email"
          value={email}
        />
      </label>
      <label>
        <span>Phone Number:</span>
        <input
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          type="tel"
          value={phoneNumber}
        />
      </label>
    </form>
  );
}
