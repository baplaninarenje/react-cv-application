import './../styles/EducationalExperienceSubmitedMode.css';

export default function EducationalExperienceSubmitedMode({
  schoolName,
  titleOfStudy,
  dateFromStudy,
  dateUntilStudy,
}) {
  return (
    <div>
      <div>
        <span>School Name:</span>
        <p>{schoolName} </p>
      </div>
      <div>
        <span>Title of Study:</span>
        <p>{titleOfStudy}</p>
      </div>
      <div className="dates-container">
        <span>Date of Study</span>

        <span>from:</span>
        <p>{dateFromStudy}</p>

        <span>until:</span>
        <p>{dateUntilStudy}</p>
      </div>
    </div>
  );
}
