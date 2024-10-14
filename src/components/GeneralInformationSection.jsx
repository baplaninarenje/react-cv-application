import { useState } from 'react';
import EditAndSubmitButtons from './EditAndSubmitButtons.jsx';
import GeneralInformationEditMode from './GeneralInformationEditMode';
import GeneralInformationSubmitedMode from './GeneralInformationSubmitedMode';
import SectionHeading from './SectionHeading';

export default function GeneralInformationSection() {
  const [mode, setMode] = useState('edit');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const heading = 'General Information';

  return (
    <section>
      <SectionHeading heading={heading} />
      {mode === 'edit' ? (
        <GeneralInformationEditMode
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          onNameChange={setName}
          onEmailChange={setEmail}
          onPhoneNumberChange={setPhoneNumber}
        />
      ) : (
        <GeneralInformationSubmitedMode
          name={name}
          email={email}
          phoneNumber={phoneNumber}
        />
      )}
      <EditAndSubmitButtons mode={mode} onEditOrSubmitClick={setMode} />
    </section>
  );
}
