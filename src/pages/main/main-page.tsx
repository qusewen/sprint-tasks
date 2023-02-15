import { useSelector } from 'react-redux';
import { Navigation } from '../../components/navigation/navigation';
import { ContentBlock } from '../../components/content-block/content-block';
import './main-page.scss';
import { ResError } from '../../components/res-error/res-error';

type RootState = {
  burger: any;
};

export const MainPage = () => {
  const valueStateBurger = useSelector((state: RootState) => state.burger);
  const { error,loading} = useSelector((state: any) => state.books);
  if (error) {
    <>
      <Navigation />
      <ResError />
    </>;
  }

  return (
    <main className='main'>
      <div className='container main-container'>
        <Navigation />
        <ContentBlock />
      </div>
    </main>
  );
};
