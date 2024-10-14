export default function EducationalExperienceEditMode({
  schoolName,
  titleOfStudy,
  dateFromStudy,
  dateUntilStudy,
  onSchoolNameChange,
  onTitleOfStudyChange,
  onDateFromStudyChange,
  onDateUntilStudyChange,
}) {
  return (
    <form>
      <label>
        <span>School Name:</span>
        <input
          onChange={(e) => onSchoolNameChange(e.target.value)}
          type="text"
          value={schoolName}
        />
      </label>
      <label>
        <span>Title of Study:</span>
        <input
          onChange={(e) => onTitleOfStudyChange(e.target.value)}
          type="text"
          value={titleOfStudy}
        />
      </label>
      <div>
        <span>Date of Study</span>
        <label>
          <span>from:</span>
          <input
            onChange={(e) => onDateFromStudyChange(e.target.value)}
            type="date"
            value={dateFromStudy}
          />
        </label>
        <label>
          <span>until:</span>
          <input
            onChange={(e) => onDateUntilStudyChange(e.target.value)}
            type="date"
            value={dateUntilStudy}
          />
        </label>
      </div>
    </form>
  );
}
