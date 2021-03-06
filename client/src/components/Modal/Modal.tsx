import React from 'react';
import './Modal.scss';
import ReactDom from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { IPlayer } from '../../types';

interface Props {
  selectedPlayer: IPlayer
}

export const Modal: React.FC<Props> = ({ selectedPlayer }) => {
  const portalDiv = document.getElementById('modal_root')!;
  const navigate = useNavigate();

  return ReactDom.createPortal(
    <>
      <div
        className="modal"
        aria-label="modal"
        role="button"
        tabIndex={0}
        style={{ display: 'block' }}
        onKeyPress={() => navigate('/')}
        onClick={() => navigate('/')}
      />

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
              <svg
                viewBox="0 0 10 11"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                className="modal__button-cross"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.188279 9.13636C-0.0627596 9.3874 -0.0627596 9.79441 0.188279 10.0455C0.439317 10.2965 0.846331 10.2965 1.09737 10.0455L4.73374 6.40909L8.37013 10.0455C8.62117 10.2965 9.02818 10.2965 9.27922 10.0455C9.53026 9.79444 9.53026 9.38743 9.27922 9.13639L5.64283 5.49999L9.27919 1.86364C9.53023 1.6126 9.53023 1.20558 9.27919 0.954545C9.02815 0.703506 8.62113 0.703506 8.3701 0.954545L4.73374 4.5909L1.0974 0.954572C0.846366 0.703534 0.439352 0.703534 0.188314 0.954572C-0.0627247 1.20561 -0.0627246 1.61262 0.188314 1.86366L3.82465 5.49999L0.188279 9.13636Z"
                />
              </svg>
              Close
            </button>
          </Link>
        </div>
      </div>
    </>,
    portalDiv,
  );
};
