import { useState } from 'react';
import EditAndSubmitButtons from './EditAndSubmitButtons';
import EducationalExperienceEditMode from './EducationalExperienceEditMode';
import EducationalExperienceSubmitedMode from './EducationalExperienceSubmitedMode';
import SectionHeading from './SectionHeading';

export default function EducationalExperienceSection() {
  const [mode, setMode] = useState('edit');
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateFromStudy, setDateFromStudy] = useState('');
  const [dateUntilStudy, setDateUntilStudy] = useState('');

  const heading = 'Educational Experience';

  return (
    <section>
      <SectionHeading heading={heading} />
      {mode === 'edit' ? (
        <EducationalExperienceEditMode
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          dateFromStudy={dateFromStudy}
          dateUntilStudy={dateUntilStudy}
          onSchoolNameChange={setSchoolName}
          onTitleOfStudyChange={setTitleOfStudy}
          onDateFromStudyChange={setDateFromStudy}
          onDateUntilStudyChange={setDateUntilStudy}
        />
      ) : (
        <EducationalExperienceSubmitedMode
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          dateFromStudy={dateFromStudy}
          dateUntilStudy={dateUntilStudy}
        />
      )}
      <EditAndSubmitButtons mode={mode} onEditOrSubmitClick={setMode} />
    </section>
  );
}
