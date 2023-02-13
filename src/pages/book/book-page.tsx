import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { books } from '../../assets/constants/mock-data';
import noPic from '../../assets/jpg/badbook.jpg';
import personImg from '../../assets/svg/person.svg';
import { Button } from '../../components/button/button';
import { Loader } from '../../components/loader/loader';
import { Rate } from '../../components/rate/rate';
import { RouteBar } from '../../components/route-bar/route-bar';
import { Swipers } from '../../components/swiper/swiper';
import { getPage } from '../../redux/actions/page-action';
import './book-page.scss';

type Param = {
  id: any;
};

export const BookPage = () => {
  const [openAcard, setOpenAcard] = useState(false);
  const { id } = useParams<Param>();
  const { page, loading } = useSelector((state: any) => state.page);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getPage(id));
  }, [dispatch, id]);
  const openAcardion = () => {
    if (openAcard) {
      setOpenAcard(false);
    } else {
      setOpenAcard(true);
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <section className='book'>
      <RouteBar categori={page?.categories} name={page?.title} />
      <div className='container container-book'>
        <div className='book__information'>
          <div className='book__picture'>
            {page?.images?.length !== 0 ? (
              <Swipers
                slide={page?.images?.map((e: any) => (
                  <SwiperSlide>
                    <img alt='slide' src={`https://strapi.cleverland.by${e?.url}`} />
                  </SwiperSlide>
                ))}
                secondSlide={
                  page?.images?.length < 2
                    ? ''
                    : page?.images?.map((e: any) => (
                        <SwiperSlide>
                          <img alt='slide' src={`https://strapi.cleverland.by${e?.url}`} className='little_img' />
                        </SwiperSlide>
                      ))
                }
              />
            ) : (
              <img src={noPic} alt='book' className='book__picture_img' />
            )}
          </div>
          <div className='book__text'>
            <div className='book__text_body'>
              <h2 className='book__text_title'>{page.title}</h2>
              <p className='book__text_subtitle'>{page?.authors}</p>
              <div className='book__button'>
                <Button buttonClass='book__button_new' buttonText='Забронировать' />
              </div>
            </div>
            <div className='book__text_body  book__text_body-about'>
              <div className='book__text_title-about'>О книге</div>
              <p className='book__text_subtitle-about'>{page?.description}</p>
            </div>
          </div>
        </div>

        <div className='book__rate'>
          <div className='book__rate_body'>
            <h2 className='book__rate_title'>Рейтинг</h2>
            <div className='book__rate-count'>
              <Rate val={page?.rating} />
              <span className='book__rate-span'>{page?.rating}</span>
            </div>
          </div>
          <div className='book__rate_info'>
            <h2 className='book__rate_title'>Подробная информация</h2>
            <div className='book__rate_more-information__body'>
              <div className='book__rate_more-information'>
                <ul className='book__rate-list'>
                  <li className='book__rate-item'>Издательство</li>
                  <li className='book__rate-item'>Год издания</li>
                  <li className='book__rate-item'>Страниц</li>
                  <li className='book__rate-item'>Переплёт</li>
                  <li className='book__rate-item'>Формат</li>
                </ul>
                <ul className='book__rate-list'>
                  <li className='book__rate-item-text'>{page?.publish}</li>
                  <li className='book__rate-item-text'> {page?.issueYear}</li>
                  <li className='book__rate-item-text'>{page?.pages}</li>
                  <li className='book__rate-item-text'>{page?.cover}</li>
                  <li className='book__rate-item-text'>{page?.format}</li>
                </ul>
              </div>
              <div className='book__rate_more-information'>
                <ul className='book__rate-list'>
                  <li className='book__rate-item book__rate-item-first'>Жанр</li>
                  <li className='book__rate-item'>Вес</li>
                  <li className='book__rate-item'>ISBN</li>
                  <li className='book__rate-item item-text-320-1'>Возрастные ограничения</li>
                  <li className='book__rate-item'>Изготовитель</li>
                </ul>
                <ul className='book__rate-list'>
                  <li className='book__rate-item-text'>{page?.categories}</li>
                  <li className='book__rate-item-text'> {page?.weight}</li>
                  <li className='book__rate-item-text'>{page?.ISBN}</li>
                  <li className='book__rate-item-text item-text-320'>+18</li>
                  <li className='book__rate-item-text'>{page?.producer}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='reviews'>
            <h2 className='book__rate_title'>
              Отзывы{' '}
              <span className='book__rate-reviews'>
                {page?.comments === null? 0 : page?.comments?.length}{' '}
                <button
                  className={openAcard ? 'arrow_reviews' : 'arrow_reviews_close'}
                  type='button'
                  data-test-id='button-hide-reviews'
                  onClick={openAcardion}
                >
                  {' '}
                </button>
              </span>
            </h2>

            <div className={openAcard ? 'reviews__body' : 'reviews__body_close'}>
              <ul className='reviews__list'>
                {page?.comments?.map((i: any) => (
                  <li className='reviews__list_item'>
                    <div className='reviews__person'>
                      <img className='reviews__person_img' src={personImg} alt='person' />
                      <div className='person__body'>
                        <p className='reviews__person_name'>
                          {i?.user?.firstName} {i?.user?.lastName}
                        </p>
                        <p className='reviews__person_date'>
                          {new Intl.DateTimeFormat().format(new Date(i?.createdAt))}
                        </p>
                      </div>
                    </div>
                    <div className='reviews__rate'>
                      <Rate val={i?.rating} />
                    </div>
                    <div className='reviews__subtitle'>{i?.text}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='reviews__button'>
              <Button buttonClass='reviews__button_new' buttonText='оценить книгу' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
