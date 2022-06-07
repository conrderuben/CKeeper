import React from 'react';
import style from './style.scss';
import assets from '../../assets/img/fondo1.jpg';
import { useNavigate } from 'react-router-dom';

import { httpClient } from '../../utils/httpClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Place = props => {
  const navigate = useNavigate();
  const deletePlace = () => {
    let confirmAction = window.confirm('Are you sure to delete this Place?');
    if (confirmAction) {
      httpClient
        .post(`http://localhost:4000/api/delete-place/${props.placeId}`)
        .then(window.location.reload());
    }
  };
  const editPlace = () => {
    navigate(`/editPlace?${props.placeId}`);
  };

  var placeDate = props.date.split('T');
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
                <Link
                  to="/buy-place"
                  state={{
                    ...props
                  }}
                >
                  {props.street}, {props.number} ({props.pc})
                </Link>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  {placeDate[0]}
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
                {props.published !== undefined && (
                  <li
                    className={
                      props.published
                        ? 'publish__item_public play yellow'
                        : 'publish__item_private play yellow '
                    }
                  >
                    <div
                      onClick={() => {
                        httpClient
                          .get(
                            `http://localhost:4000/api/setPublish/${props.placeId}/${
                              props.published ? '0' : '1'
                            }`
                          )
                          .then(window.location.reload());
                      }}
                    >
                      {props.published ? 'Public' : 'Private'}
                    </div>
                  </li>
                )}
                {props.published !== undefined && (
                  <li>
                    <button onClick={editPlace} class="editButton">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="delete"
                        style={{ fontSize: 17 }}
                      />
                    </button>
                  </li>
                )}
                {props.published !== undefined && (
                  <li>
                    <button onClick={deletePlace} class="deleteButton">
                      <FontAwesomeIcon icon={faTrash} className="delete" style={{ fontSize: 17 }} />
                    </button>
                  </li>
                )}

                {props.admin === true && (
                  <li>
                    <button onClick={deletePlace} class="deleteButton">
                      <FontAwesomeIcon icon={faTrash} className="delete" style={{ fontSize: 17 }} />
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Place;
