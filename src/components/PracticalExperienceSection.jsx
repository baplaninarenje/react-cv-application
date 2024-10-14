import { useState } from 'react';
import EditAndSubmitButtons from './EditAndSubmitButtons.jsx';
import PracticalExperienceEditMode from './PracticalExperienceEditMode';
import PracticalExperienceSubmitedMode from './PracticalExperienceSubmitedMode';
import SectionHeading from './SectionHeading';

export default function PracticalExperienceSection() {
  const [mode, setMode] = useState('edit');
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [jobResponsibilities, setJobResponsibilities] = useState('');
  const [dateFromCompany, setDateFromCompany] = useState('');
  const [dateUntilCompany, setDateUntilCompany] = useState('');

  const heading = 'Practical Experience';

  return (
    <section>
      <SectionHeading heading={heading} />
      {mode === 'edit' ? (
        <PracticalExperienceEditMode
          companyName={companyName}
          positionTitle={positionTitle}
          jobResponsibilities={jobResponsibilities}
          dateFromCompany={dateFromCompany}
          dateUntilCompany={dateUntilCompany}
          onCompanyNameChange={setCompanyName}
          onPositionTitleChange={setPositionTitle}
          onJobResponsibilitiesChange={setJobResponsibilities}
          onDateFromCompanyChange={setDateFromCompany}
          onDateUntilCompanyChange={setDateUntilCompany}
        />
      ) : (
        <PracticalExperienceSubmitedMode
          companyName={companyName}
          positionTitle={positionTitle}
          jobResponsibilities={jobResponsibilities}
          dateFromCompany={dateFromCompany}
          dateUntilCompany={dateUntilCompany}
        />
      )}
      <EditAndSubmitButtons mode={mode} onEditOrSubmitClick={setMode} />
    </section>
  );
}
