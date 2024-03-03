import { useState } from 'react';
// import { Component } from 'react';
import { Form, Header, Input, SearchFormButton, Span } from './SearchBar.styled';
import { MdSearch } from 'react-icons/md';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      Notify.warning(
          'Sorry, enter your query in the search field.'
        );
    } else {
      onSubmit(searchQuery);
    }
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">
          <SearchFormButton type="submit">
            <MdSearch size="24" />
            <Span>Search</Span>
          </SearchFormButton>
        </label>

        <Input
          id="searchInput"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};