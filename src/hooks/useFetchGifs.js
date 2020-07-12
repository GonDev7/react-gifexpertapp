import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((img) =>
      setState({
        data: img,
        loading: false,
      })
    );
  }, [category]);

  return state;
};

useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired,
};
