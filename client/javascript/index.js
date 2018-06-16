import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({ class: className }) => {
  return <h1>{className}</h1>;
};

const Cards = () => {
  return <div />;
};

const Page = () => {
  return (
    <div>
      <Title class="Sunkeeper" />
      <Cards class="Sunkeeper" />
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById('root'));
