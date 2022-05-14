import React from 'react';
import style from './style.scss';
import assets from '../../assets/img/fondo1.jpg';

const Place = props => {
  return (
    <>
      <section class="dark">
        <div class="container py-4">
          <article class="postcard dark yellow">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src={require('../../assets/img/img.jpg')}
                alt="Image Title"
              />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title yellow">
                <a href="#">
                  {props.street}, {props.number} ({props.pc})
                </a>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  {props.date}
                </time>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">{props.desc}</div>
              <ul class="postcard__tagbox">
                <li class="tag__item">
                  <i class="fas fa-tag mr-2"></i>
                  {props.prize}€
                </li>
                <li class="tag__item">
                  <i class="fas fa-tag mr-2"></i>
                  {props.height} x {props.width} x {props.long}
                </li>
                <li class="tag__item">
                  <i class="fas fa-clock mr-2"></i>
                  {props.user}
                </li>
                <li class="tag__item play yellow">
                  <a href="#">
                    <i class="fas fa-play mr-2"></i>
                    {props.city}
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Place;
