import React from 'react';
import './Modal.scss';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { IPlayer } from '../../types';

interface Props {
  selectedPlayer: IPlayer
}

export const Modal: React.FC<Props> = ({ selectedPlayer }) => {
  const portalDiv = document.getElementById('modal_root')!;

  return ReactDom.createPortal(
    <div
      style={{ display: 'block' }}
      className="modal"
    >
      <div className="modal__window">
        <div className="modal__top-part">
          <img
            src={selectedPlayer.avatar}
            alt="person face"
            className="modal__image"
          />

          <h2 className="modal__title">
            {selectedPlayer.name}
          </h2>

          <p className="modal__score">
            {`Score: ${selectedPlayer.score}`}
          </p>

          <p className="modal__bio">
            {selectedPlayer.bio}
          </p>
        </div>

        <div className="modal__bottom-part">
          <Link
            to="/"
          >
            <button
              type="button"
              className="modal__close-button"
            >
              <span className="modal__button-cross" />
              Close
            </button>
          </Link>
        </div>
      </div>
    </div>,
    portalDiv,
  );
};
