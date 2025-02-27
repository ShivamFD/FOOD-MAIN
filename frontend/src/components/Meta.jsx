import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: ' Online Food Website | Buy Foods Online',
  description:
    'Browse and buy the latest Foods on our online store. Find great deals on Foods. Fast shipping and secure payments.',
  keywords:
    'Burgers, Pizzas, soft Drinks, Milkshake, Cakes, '
};

export default Meta;
