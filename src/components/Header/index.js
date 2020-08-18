import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

const Header = ({ openModal }) => (
  <Container>
    <header>
      <h1>Viitra restaurant</h1>
      {openModal
        ?
        <nav>
          <div>
            <button
              type="button"
              onClick={() => {
                openModal();
              }}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
        :
        <div></div>

      }

    </header>
  </Container>
);

export default Header;
