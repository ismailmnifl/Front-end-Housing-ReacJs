function ViewAllButton() {
  return (
    <>
      <button
        type='button'
        className='flex items-center justify-evenly w-60 text-gray-900 border border-gray-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 '>
        <p>View all properties</p>
        <i className='fas fa-arrow-right text-lg'></i>
      </button>
    </>
  );
}

export default ViewAllButton;
