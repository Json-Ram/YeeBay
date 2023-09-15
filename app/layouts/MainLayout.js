'use client';
import TopMenu from "./includes/TopMenu";
import MainHeader from "./includes/MainHeader";

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="Mainlayout" className='min-w-[1050px] max-w-[1300px] mx-auto'>
        <div>
          <TopMenu />
          <MainHeader />
        </div>
      </div>
    </>
  )
}

export default MainLayout