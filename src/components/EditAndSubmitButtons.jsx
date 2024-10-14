import './../styles/EditAndSubmitButtons.css';

export default function EditAndSubmitButtons({ mode, onEditOrSubmitClick }) {
  const content = mode === 'submited' ? 'Edit' : 'Submit';

  const toggleMode = () =>
    mode === 'edit'
      ? onEditOrSubmitClick('submited')
      : onEditOrSubmitClick('edit');

  return (
    <div>
      <button onClick={toggleMode}>{content}</button>
    </div>
  );
}
