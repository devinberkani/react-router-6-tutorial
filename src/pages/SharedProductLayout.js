import { Outlet } from 'react-router-dom';

const SharedProductLayout = () => {
  return (
    <>
      <div className='section'>
        <h2>products</h2>
      </div>
      <Outlet />
    </>
  );
};
export default SharedProductLayout;
