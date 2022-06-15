import React, { useEffect, useState } from 'react';
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
      httpClient.post(`/delete-place/${props.placeId}`).then(window.location.reload());
    }
  };
  const editPlace = () => {
    navigate(`/editPlace?${props.placeId}`);
  };
  const [user, setUser] = useState({ id: 0 });
  const [parkingNumber, setParkingNumber] = useState({});
  useEffect(() => {
    async function getData() {
      await httpClient.get('user').then(x => {
        setUser(x.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      await httpClient.get(`/parking-number/${props.idUser}`).then(x => {
        setParkingNumber(x.data);
      });
    }

    getData();
  }, []);

  const photos = () => {
    var array = [];
    array.push(
      <img
        src={require(`../../assets/users/${props.idUser}/Parking${props.placeId}/parking1.png`)}
        alt="Image Title"
        style={{ height: '100%', width: '100%' }}
        key={props.placeId}
      />
    );

    return array;
  };
  var placeDate = props.date.split('T');
  return (
    <>
      <section className="dark">
        <div className="container py-4">
          <article className="postcard dark yellow">
            <div className="postcard__img">{photos()}</div>
            <div className="postcard__text">
              <h1 className="postcard__title yellow">
                <Link
                  to="/buy-place"
                  state={{
                    ...props
                  }}
                >
                  {props.street}, {props.number} ({props.pc})
                </Link>
              </h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  {placeDate[0]}
                </time>
              </div>
              {props.rented === true && (
                <img className="rented" src={require('../../assets/img/rented.png')} alt="rented" />
              )}
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">{props.desc}</div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>
                  {props.prize}€/day
                </li>
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>
                  {props.height} x {props.width} x {props.long}
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                  {props.user}
                </li>
                <li className="tag__item play yellow">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>
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
                    <button onClick={editPlace} className="editButton">
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
                    <button onClick={deletePlace} className="deleteButton">
                      <FontAwesomeIcon icon={faTrash} className="delete" style={{ fontSize: 17 }} />
                    </button>
                  </li>
                )}

                {props.admin === true && (
                  <li>
                    <button onClick={deletePlace} className="deleteButton">
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
