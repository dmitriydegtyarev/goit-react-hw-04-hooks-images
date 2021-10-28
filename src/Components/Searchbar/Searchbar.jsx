import { useState } from 'react';
import toast from 'react-hot-toast';

import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarButton,
  SearchbarButtonLabel,
  SearchbarFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Enter search query.');
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarHeader>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />

        <SearchbarButton type="submit">
          <SearchbarButtonLabel>Search</SearchbarButtonLabel>
        </SearchbarButton>
      </SearchbarForm>
    </SearchbarHeader>
  );
};
