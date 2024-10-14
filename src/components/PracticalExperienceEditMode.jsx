export default function PracticalExperienceEditMode({
  companyName,
  positionTitle,
  jobResponsibilities,
  dateFromCompany,
  dateUntilCompany,
  onCompanyNameChange,
  onPositionTitleChange,
  onJobResponsibilitiesChange,
  onDateFromCompanyChange,
  onDateUntilCompanyChange,
}) {
  return (
    <form>
      <label>
        <span>Company Name:</span>
        <input
          onChange={(e) => onCompanyNameChange(e.target.value)}
          type="text"
          value={companyName}
        />
      </label>
      <label>
        <span>Position Title:</span>
        <input
          onChange={(e) => onPositionTitleChange(e.target.value)}
          type="text"
          value={positionTitle}
        />
      </label>
      <label>
        <span>Main responsibilities of your jobs:</span>
        <textarea
          onChange={(e) => onJobResponsibilitiesChange(e.target.value)}
          value={jobResponsibilities}
        ></textarea>
      </label>
      <div>
        <span>Date you worked for that company</span>
        <label>
          <span>from:</span>
          <input
            onChange={(e) => onDateFromCompanyChange(e.target.value)}
            type="date"
            value={dateFromCompany}
          />
        </label>
        <label>
          <span>until:</span>
          <input
            onChange={(e) => onDateUntilCompanyChange(e.target.value)}
            type="date"
            value={dateUntilCompany}
          />
        </label>
      </div>
    </form>
  );
}
