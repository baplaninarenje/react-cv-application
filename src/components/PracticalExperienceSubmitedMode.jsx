export default function PracticalExperienceSubmitedMode({
  companyName,
  positionTitle,
  jobResponsibilities,
  dateFromCompany,
  dateUntilCompany,
}) {
  return (
    <div>
      <div>
        <span>Company Name:</span>
        <p>{companyName}</p>
      </div>
      <div>
        <span>Position Title:</span>
        <p>{positionTitle}</p>
      </div>
      <div>
        <span>Main responsibilities of your jobs:</span>
        <p>{jobResponsibilities}</p>
      </div>
      <div className="dates-container">
        <span>Date you worked for that company</span>
        <span>from:</span>
        <p>{dateFromCompany}</p>
        <span>until:</span>
        <p>{dateUntilCompany}</p>
      </div>
    </div>
  );
}
