import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { books } from '../../assets/constants/mock-data';
import noPic from '../../assets/jpg/badbook.jpg';
import personImg from '../../assets/svg/person.svg';
import { Button } from '../../components/button/button';
import { Rate } from '../../components/rate/rate';
import { RouteBar } from '../../components/route-bar/route-bar';
import { Swipers } from '../../components/swiper/swiper';
import './book-page.scss';


type Param = {
  id: any
}

export const BookPage = () => {
  const [openAcard, setOpenAcard] = useState(false);
  const { id} = useParams<Param>();

  const [book, setBook] = useState(books.filter((e) => (e.id === +id ? e : '')));
  const [pic, setPic] = useState(book?.map((e) => e.testImg));
  const openAcardion = () => {
    if (openAcard) {
      setOpenAcard(false);
    } else {
      setOpenAcard(true);
    }
  };
  return (
    <section className='book'>
      <RouteBar name={book[0].title1} />
      <div className='container container-book'>
        <div className='book__information'>
          <div className='book__picture'>
            {book[0].countImg !== 0 ? (
              <Swipers
                slide={pic.map((e) =>
                  e?.map((i) => (
                    <SwiperSlide>
                      <img alt='slide' src={i} />
                    </SwiperSlide>
                  ))
                )}
                secondSlide={
                  book[0].countImg < 2
                    ? ''
                    : pic.map((e) =>
                        e?.map((i) => (
                          <SwiperSlide>
                            <img alt='slide' src={i} className="little_img" />
                          </SwiperSlide>
                        ))
                      )
                }
              />
            ) : (
              <img src={noPic} alt='book' className='book__picture_img' />
            )}
          </div>
          <div className='book__text'>
            <div className='book__text_body'>
              <h2 className='book__text_title'>{book[0].title1}</h2>
              <p className='book__text_subtitle'>{book[0].author}</p>
              <div className='book__button'>
                <Button buttonClass='book__button_new' buttonText='Забронировать' />
              </div>
            </div>
            <div className='book__text_body  book__text_body-about'>
              <div className='book__text_title-about'>О книге</div>
              <p className='book__text_subtitle-about'>{book[0].describe}</p>
              <p className='book__text_subtitle-about'>{book[0].describe2}</p>
            </div>
          </div>
        </div>

        <div className='book__rate'>
          <div className='book__rate_body'>
            <h2 className='book__rate_title'>Рейтинг</h2>
            <div className='book__rate-count'>
              <Rate val={book[0].rate} />
              <span className='book__rate-span'>{book[0].rate}</span>
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
                  <li className='book__rate-item-text'>{book[0].publishingHouse}</li>
                  <li className='book__rate-item-text'> {book[0].publishingYear}</li>
                  <li className='book__rate-item-text'>{book[0].pages}</li>
                  <li className='book__rate-item-text'>{book[0].binding}</li>
                  <li className='book__rate-item-text'>{book[0].format}</li>
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
                  <li className='book__rate-item-text'>{book[0].same}</li>
                  <li className='book__rate-item-text'> {book[0].weight}</li>
                  <li className='book__rate-item-text'>{book[0].isbn}</li>
                  <li className='book__rate-item-text item-text-320'>{book[0].age}</li>
                  <li className='book__rate-item-text'>{book[0].creater}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='reviews'>
            <h2 className='book__rate_title'>
              Отзывы{' '}
              <span className='book__rate-reviews'>
                {book[0].reviewsCount}{' '}
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
                <li className='reviews__list_item'>
                  <div className='reviews__person'>
                    <img className='reviews__person_img' src={personImg} alt='person' />
                    <div className='person__body'>
                      <p className='reviews__person_name'>Иван Иванов</p>
                      <p className='reviews__person_date'>5 января 2019</p>
                    </div>
                  </div>
                  <div className='reviews__rate'>
                    <Rate val={4} />
                  </div>
                  <div className='reviews__subtitle'> </div>
                </li>
                <li className='reviews__list_item'>
                  <div className='reviews__person'>
                    <img className='reviews__person_img' src={personImg} alt='person' />
                    <div className='person__body'>
                      <p className='reviews__person_name'>Николай Качков</p>
                      <p className='reviews__person_date'>20 июня 2018</p>
                    </div>
                  </div>
                  <div className='reviews__rate'>
                    <Rate val={4} />
                  </div>
                  <div className='reviews__subtitle'>
                    Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не
                    оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение
                    современных методик предоставляет широкие возможности для позиций, занимаемых участниками в
                    отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики
                    выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций —
                    глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет
                    сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в
                    посмешище, хотя само их существование приносит несомненную пользу обществу.
                  </div>
                </li>
                <li className='reviews__list_item'>
                  <div className='reviews__person'>
                    <img className='reviews__person_img' src={personImg} alt='person' />
                    <div className='person__body'>
                      <p className='reviews__person_name'>Екатерина Беляева</p>
                      <p className='reviews__person_date'>18 февраля 2018</p>
                    </div>
                  </div>
                  <div className='reviews__rate'>
                    <Rate val={4}/>
                  </div>
                  <div className='reviews__subtitle'> </div>
                </li>
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
